<?php

namespace App\Http\Controllers;

use App\Models\OnlineCourse;
use App\Models\Purchase;
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
            'title' => 'required|string|max:100|unique:online_courses',
            'price' => 'required|numeric|min:0|max:1000',
            'img' => 'required|string',
            'headline' => 'required|string|max:150',
            'instructor_id' => 'required|numeric',
        ],[
            'title.required' => 'El campo título es requerido.',
            'title.string' => 'El campo título debe ser una cadena de caracteres.',
            'title.max' => 'El campo título no debe exceder los 100 caracteres.',
            'title.unique' => 'El título de ese curso ya existe.',
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
            'instructor.numeric' => 'El campo instructor debe ser un valor numérico.',
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
            'title' => 'string|max:100|unique:online_courses',
            'price' => 'numeric|min:0|max:1000',
            'img' => 'string|regex:/^https:\/\/.*/',
            'headline' => 'string|max:150',
            'instructor_id' => 'numeric',
        ],[
            'title.string' => 'El campo título debe ser una cadena de caracteres.',
            'title.max' => 'El campo título no debe exceder los 100 caracteres.',
            'title.unique' => 'El campo título debe ser único.',
            'price.numeric' => 'El campo precio debe ser un valor numérico.',
            'price.min' => 'El campo precio debe ser mayor o igual a cero.',
            'price.max' => 'El campo precio no debe exceder los 1000.',
            'img.string' => 'El campo imagen debe ser una cadena de caracteres.',
            'imagen_url.regex' => 'La URL de la imagen debe empezar con https://',
            'headline.string' => 'El campo titular debe ser una cadena de caracteres.',
            'headline.max' => 'El campo titular no debe exceder los 150 caracteres.',
            'instructor.numeric' => 'El campo instructor debe ser un valor numérico.',
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

    public function checkCourses(Request $request)
    {
        $courseIds = $request->input('course_ids'); // Obtén los IDs de los cursos enviados en el cuerpo de la solicitud
    
        // Verifica la existencia de cada curso individualmente
        $existingCourses = true;
        foreach ($courseIds as $courseId) {
            if (!OnlineCourse::where('id', $courseId)->exists()) {
                $existingCourses = false;
                break;
            }
        }
    
        // Si todos los cursos existen, guarda la compra en la tabla "purchases"
        if ($existingCourses) {
            $userId = $request->input('user_id'); // Obtén el ID del usuario enviado en la solicitud
            $purchaseDate = now(); // Obtén la fecha actual
    
            // Crea el registro de compra en la tabla "purchases"
            foreach ($courseIds as $courseId) {
                Purchase::create([
                    'user_id' => $userId,
                    'online_course_id' => $courseId,
                    'purchase_date' => $purchaseDate
                ]);
            }
        }
    
        // Devuelve true si todos los cursos existen, false en caso contrario
        return $existingCourses ? 'true' : 'false';
    }
}