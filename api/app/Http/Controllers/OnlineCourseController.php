<?php

namespace App\Http\Controllers;

use App\Models\OnlineCourse;
use Illuminate\Http\Request;

class OnlineCourseController extends Controller
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
        $onlineCourses = OnlineCourse::all();
        return response()->json($onlineCourses);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|string|max:30|unique:online_courses',
            'price' => 'required|numeric|min:0|max:1000',
            'img' => 'required|string',
            'headline' => 'required|string|max:150',
            'instructor' => 'required|string|max:30',
        ],[
            'title.required' => 'El campo título es requerido.',
            'title.string' => 'El campo título debe ser una cadena de caracteres.',
            'title.max' => 'El campo título no debe exceder los 30 caracteres.',
            'title.unique' => 'El campo título debe ser único.',
            'price.required' => 'El campo precio es requerido.',
            'price.numeric' => 'El campo precio debe ser un valor numérico.',
            'price.min' => 'El campo precio debe ser mayor o igual a cero.',
            'price.max' => 'El campo precio no debe exceder los 1000.',
            'img.required' => 'El campo imagen es requerido.',
            'img.string' => 'El campo imagen debe ser una cadena de caracteres.',
            'headline.required' => 'El campo titular es requerido.',
            'headline.string' => 'El campo titular debe ser una cadena de caracteres.',
            'headline.max' => 'El campo titular no debe exceder los 150 caracteres.',
            'instructor.required' => 'El campo instructor es requerido.',
            'instructor.string' => 'El campo instructor debe ser una cadena de caracteres.',
            'instructor.max' => 'El campo instructor no debe exceder los 30 caracteres.'
        ]);


        $onlineCourse = OnlineCourse::create($validatedData);

        return response()->json($onlineCourse, 201);
    }

    /**
     * Display the specified resource.
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $onlineCourse = OnlineCourse::find($id);

        if (!$onlineCourse) {
            return response()->json(['error' => 'Course not found'], 404);
        }

        return response()->json($onlineCourse);
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
            'title' => 'string|max:255',
            'price' => 'numeric|min:0',
            'img' => 'string',
            'headline' => 'string',
            'instructor' => 'string',
        ]);
        
        $onlineCourse = OnlineCourse::find($id);
        $onlineCourse->update($validatedData);
    
        return response()->json($onlineCourse, 204);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $onlineCourse = OnlineCourse::find($id);
        $onlineCourse->delete();
        return response()->json(null, 204);
    }
}