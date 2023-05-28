<?php

namespace App\Http\Controllers;

use App\Models\PersonalDatas;
use App\Models\User;
use Illuminate\Http\Request;

class PersonalDataController extends Controller
{
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
{
    $user = User::find($id);

    if (!$user) {
        return response()->json(['message' => 'Usuario no encontrado'], 404);
    }

    $personalData = $user->personalData;

    if (!$personalData) {
        // Crear un nuevo registro en la tabla personal_data
        $personalData = new PersonalDatas();
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

    // Asociar personal_data al usuario si aún no está asociado
    if (!$user->personalData) {
        $user->personalData()->associate($personalData);
        $user->save();
    }

    return response()->json(['message' => 'Actualización exitosa'], 204);
}
}