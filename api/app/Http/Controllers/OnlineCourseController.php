<?php

namespace App\Http\Controllers;

use App\Models\OnlineCourse;
use App\Models\Purchase;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;



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

        if (!$request->user()->hasRole('admin')) {
            return response()->json(['message' => 'Acceso denegado'], 403);
        }

        
        $validatedData = $request->validate([
            'title' => 'required|string|max:100|unique:online_courses',
            'price' => 'required|numeric|min:0|max:1000',
            'img' => 'required|image',
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
            'img.image' => 'El campo imagen debe ser una imagen válida.',
            'headline.required' => 'El campo titular es requerido.',
            'headline.string' => 'El campo titular debe ser una cadena de caracteres.',
            'headline.max' => 'El campo titular no debe exceder los 150 caracteres.',
            'instructor.required' => 'El campo instructor es requerido.',
            'instructor.numeric' => 'El campo instructor debe ser un valor numérico.',
        ]);


        $imagePath = $request->file('img')->store('public/images');
        $imageName = basename($imagePath);
        $imageUrl = asset('storage/images/' . $imageName);
        
        $validatedData['img'] = $imageUrl;

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
    
        $onlineCourse->append('instructor_name'); // Agregar el atributo "instructor_name" al objeto $onlineCourse
    
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
        if (!$request->user()->hasRole('admin')) {
            return response()->json(['message' => 'Acceso denegado'], 403);
        }
    
        $onlineCourse = OnlineCourse::find($id);
    
        $validatedData = $request->validate([
            'title' => 'string|max:100|unique:online_courses,title,'.$onlineCourse->id,
            'price' => 'numeric|min:0|max:1000',
            'img' => 'image',
            'headline' => 'string|max:150',
            'instructor_id' => 'numeric',
        ], [
            'title.string' => 'El campo título debe ser una cadena de caracteres.',
            'title.max' => 'El campo título no debe exceder los 100 caracteres.',
            'title.unique' => 'El título de ese curso ya existe.',
            'price.numeric' => 'El campo precio debe ser un valor numérico.',
            'price.min' => 'El campo precio debe ser mayor o igual a cero.',
            'price.max' => 'El campo precio no debe exceder los 1000.',
            'img.image' => 'El campo imagen debe ser una imagen válida.',
            'headline.string' => 'El campo titular debe ser una cadena de caracteres.',
            'headline.max' => 'El campo titular no debe exceder los 150 caracteres.',
            'instructor_id.numeric' => 'El campo instructor debe ser un valor numérico.',
        ]);
    
        if ($request->hasFile('img')) {
            // Si se proporciona una nueva imagen, almacenarla y actualizar la ruta de la imagen
            $imagePath = $request->file('img')->store('public/images');
            $imageName = basename($imagePath);
            $imageUrl = asset('storage/images/' . $imageName);
            $validatedData['img'] = $imageUrl;

        }
    
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
        $user = User::find(Auth::user()->id);
        
    // Comprobar si el usuario tiene el rol de administrador
    if ($user->hasRole('admin')) {
        // Realizar la lógica para eliminar el recurso, ya que el usuario tiene el rol de administrador
        $onlineCourse = OnlineCourse::find($id);
        $onlineCourse->delete();
        return response()->json(null, 204);

    // Si el usuario no tiene el rol de administrador, devolver una respuesta de error o redireccionar a una página no autorizada
    return response()->json([
        'status' => 'error',
        'message' => 'No tienes permiso para realizar esta acción.'
    ], 403);
    }
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