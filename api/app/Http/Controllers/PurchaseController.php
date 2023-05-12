<?php

namespace App\Http\Controllers;

use App\Models\Purchase;
use App\Models\OnlineCourse;
use Illuminate\Http\Request;

class PurchaseController extends Controller
{
    public function getUserCourses($userId)
{
    // Obtén todas las compras del usuario
    $purchases = Purchase::where('user_id', $userId)->get();

    // Obtén los IDs de los cursos comprados
    $courseIds = $purchases->pluck('online_course_id')->toArray();

    // Obtén los cursos correspondientes a los IDs
    $courses = OnlineCourse::whereIn('id', $courseIds)->get();

    return response()->json($courses);
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
    public function show(Purchase $purchase)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Purchase $purchase)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Purchase $purchase)
    {
        //
    }
}