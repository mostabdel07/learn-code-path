<?php

namespace App\Http\Controllers;

use App\Models\PersonalData;
use App\Models\User;
use Illuminate\Http\Request;

class PersonalDataController extends Controller
{
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,$id)
    {
        $user = User::find($id);

        if (!$user) {
            return response()->json(['message' => 'Usuario no encontrado'], 404);
        }

        $personalData = $user->personalData;

        if (empty($personalData)) {
            return response()->json(['message' => 'Datos personales no encontrados'], 404);
        }

        if (!empty($request->name)) {
            $personalData->name = $request->name;
        }

        if (!empty($request->surname)) {
            $personalData->surname = $request->surname;
        }

        if (!empty($request->birthday)) {
            $personalData->birthday = $request->birthday;
        }

        if (!empty($request->location)) {
            $personalData->location = $request->location;
        }

        $personalData->save();

        return response()->json(['message' => 'Actualización exitosa'],204);
    }

}