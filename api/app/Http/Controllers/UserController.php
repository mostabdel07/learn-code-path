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

    if (!$request->user()->hasRole('admin')) {
        if ($user->id !== $request->user()->id) {
            return response()->json(['error' => 'Acceso denegado'], 403);
        }
    }

        $user->update($validatedData);

        if (array_key_exists('role_name', $validatedData)) {
            $roleName = $validatedData['role_name'];
    
            if ($roleName !== $user->role_name) {
                if ($roleName === 'admin') {
                    $role = Role::findByName('admin');
                    $user->syncRoles($role);
                } elseif ($roleName === 'user') {
                    $role = Role::findByName('user');
                    $user->syncRoles($role);
                } else {
                    return response()->json(['error' => 'Invalid role_name'], 400);
                }
            }
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

        $userToDelete = User::find($id);

        if (!$userToDelete) {
            return response()->json([
                'status' => 'error',
                'message' => 'Usuario no encontrado.'
            ], 404);
        }
    
        $loggedInUser = User::find(Auth::user()->id);
    
        if ($loggedInUser->hasRole('admin') || $userToDelete->id === $loggedInUser->id) {
            $userToDelete->delete();
            return response()->json(null, 204);
        }

    
        return response()->json([
            'status' => 'error',
            'message' => 'No tienes permiso para realizar esta acción.'
        ], 403);
}}