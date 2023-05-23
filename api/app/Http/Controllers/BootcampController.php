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
        $bootcampId = $request->input('bootcamp_id'); 
    
        $existingBootcamp = true;
   
            if (!Bootcamp::where('id', $bootcampId)->exists()) {
                $existingBootcamp = false;
            }
        
    
        if ($existingBootcamp) {
            $userId = $request->input('user_id'); 
            $subscriptionDate = now(); 
    
          
            Subscription::create([
                    'user_id' => $userId,
                    'bootcamp_id' => $bootcampId,
                    'subscription_date' => $subscriptionDate
                ]);
            
        }
    
        return $existingBootcamp ? 'true' : 'false';
    }
}