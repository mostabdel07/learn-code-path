<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\Events\AssignUserRole;



class AuthApiController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string|min:6',
        ]);

        $credentials = $request->only('email', 'password');

        $token = Auth::attempt($credentials);

        if (!$token) {
            return response()->json([
                'status' => 'error',
                'message' => 'Unauthorized',
            ], 401);
        }

        $user = User::find(Auth::user()->id);
        $role = $user->getRoleNames()->first();

        
        return response()->json([
            'status' => 'success',
            'user' => $user,
            'role' => $role,
            'authorisation' => [
                'token' => $token,
                'type' => 'bearer',
            ]
        ]);
    }

    public function register(Request $request)
    {
        $request->validate([
            'username' => 'required|string|max:30',
            'email' => 'required|string|email|max:50|unique:users,email',
            'password' => 'required|string|min:6|regex:/^(?=.*[a-zA-Z])(?=.*\d).+$/',
        ], [
            'username.required' => 'El campo nombre de usuario es requerido.',
            'username.string' => 'El campo nombre de usuario debe ser una cadena de caracteres.',
            'username.max' => 'El campo nombre de usuario no debe exceder los 30 caracteres.',
            'email.required' => 'El campo correo electrónico es requerido.',
            'email.string' => 'El campo correo electrónico debe ser una cadena de caracteres.',
            'email.email' => 'El campo correo electrónico debe ser una dirección de correo válida.',
            'email.max' => 'El campo correo electrónico no debe exceder los 50 caracteres.',
            'email.unique' => 'El correo electrónico ingresado ya está registrado.',
            'password.required' => 'El campo contraseña es requerido.',
            'password.string' => 'El campo contraseña debe ser una cadena de caracteres.',
            'password.min' => 'El campo contraseña debe tener al menos 6 caracteres.',
            'password.regex' => 'El campo contraseña debe contener al menos una letra y un número.',
        ]);

        $user = User::create([
            'username' => $request->username,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role_id' => 2,
        ]);

        event(new AssignUserRole($user)); 

        $token = Auth::login($user);
        return response()->json([
            'status' => 'success',
            'message' => 'User created successfully',
            'user' => $user,
            'authorisation' => [
                'token' => $token,
                'type' => 'bearer',
            ]
        ]);
    }

    public function logout()
    {
        Auth::logout();
        return response()->json([
            'status' => 'success',
            'message' => 'Successfully logged out',
        ]);
    }

    public function refresh()
    {
        return response()->json([
            'status' => 'success',
            'user' => Auth::user(),
            'authorisation' => [
                'token' => Auth::refresh(),
                'type' => 'bearer',
            ]
        ]);
    }
}