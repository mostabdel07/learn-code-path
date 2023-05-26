<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Illuminate\Support\Facades\Auth;
use Spatie\Permission\Models\Role;



class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::with('roles')->get();
    
        return response()->json(
            $users->map(function ($user) {
                return [
                    'id' => $user->id,
                    'username' => $user->username,
                    'email' => $user->email,
                    'role_name' => $user->roles->first()->name ?? null
                ];
            })
        );
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
    }

    /**
     * Display the specified resource.
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = User::with('personalData', 'role')->find($id);
    
        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }

        $user->role_name = $user->roles->first()->name ?? null;
    
        return response()->json($user);
    }
 
 
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'username' => 'string|max:255',
            'email' => 'string|email|max:255|unique:users,email',
            'role_name' => 'string'
        ]);

        $user = User::find($id);
        $user->update($validatedData);

        if ($validatedData['role_name'] === 'admin') {
            $role = Role::findByName('admin');
            $user->syncRoles($role);
        } elseif ($validatedData['role_name'] === 'user') {
            $role = Role::findByName('user');
            $user->syncRoles($role);
        } else {
            return response()->json(['error' => 'Invalid role_name'], 400);
        }
   
        

    
        return response()->json($user, 204);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {

        $user = User::find(Auth::user()->id);
        
        // Comprobar si el usuario tiene el rol de administrador
        if ($user->hasRole('admin')) {
        // Realizar la lógica para eliminar el recurso, ya que el usuario tiene el rol de administrador
        $user = User::find($id);
        $user->delete();
        return response()->json(null, 204); 
    }
        // Si el usuario no tiene el rol de administrador, devolver una respuesta de error o redireccionar a una página no autorizada
        return response()->json([
            'status' => 'error',
            'message' => 'No tienes permiso para realizar esta acción.'
        ], 403);
}}