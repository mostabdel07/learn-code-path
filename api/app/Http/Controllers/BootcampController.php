<?php

namespace App\Http\Controllers;

use App\Models\Bootcamp;
use App\Models\Subscription;
use Illuminate\Http\Request;

class BootcampController extends Controller
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
        $bootcamps = Bootcamp::all();
        return response()->json($bootcamps);
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
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $bootcamp = Bootcamp::find($id);
        $bootcamp->delete();
        return response()->json(null, 204);
    }

    public function subscriptionBootcamp(Request $request)
    {
        $bootcampId = $request->input('bootcamp_id'); // Obtén los IDs de los cursos enviados en el cuerpo de la solicitud
    
        // Verifica la existencia de cada curso individualmente
        $existingCourses = true;
   
            if (!Bootcamp::where('id', $bootcampId)->exists()) {
                $existingCourses = false;
            }
        
    
        // Si todos los cursos existen, guarda la compra en la tabla "purchases"
        if ($existingCourses) {
            $userId = $request->input('user_id'); // Obtén el ID del usuario enviado en la solicitud
            $subscriptionDate = now(); // Obtén la fecha actual
    
            // Crea el registro de compra en la tabla "purchases"
          
            Subscription::create([
                    'user_id' => $userId,
                    'bootcamp_id' => $bootcampId,
                    'purchase_date' => $subscriptionDate
                ]);
            
        }
    
        // Devuelve true si todos los cursos existen, false en caso contrario
        return $existingCourses ? 'true' : 'false';
    }
}