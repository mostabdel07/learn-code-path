<?php

namespace App\Http\Controllers;

use App\Models\Subscription;
use App\Models\Bootcamp;
use Illuminate\Http\Request;

class SubscriptionController extends Controller
{
    public function getUserBootcamps($userId)
{

    // Obtén todas las compras del usuario
    $subscriptions = Subscription::where('user_id', $userId)->get();

    // Obtén los IDs de los cursos comprados
    $bootcampId = $subscriptions->pluck('bootcamp_id')->toArray();

    // Obtén los cursos correspondientes a los IDs
    $bootcamps = Bootcamp::whereIn('id', $bootcampId)->get();

    return response()->json($bootcamps);
}

  
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Subscription $Subscription)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Subscription $Subscription)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $onlineCourse = Subscription::find($id);
        $onlineCourse->delete();
        return response()->json(null, 204);
    }
}