<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;
use App\Models\OnlineCourse;
use App\Models\Instructor;


class CourseApiController extends Controller
{

        public function getCourses(){

            $client_id = env('CLIENT_ID');
            $client_secret = env('CLIENT_SECRET');
            $api_url = env('URL_ENDPOINT');

            
            $response = Http::withHeaders([
                'Accept' => 'application/json, text/plain, */*',
                'Authorization' => 'Basic ' . base64_encode($client_id . ':' . $client_secret),
                'Content-Type' => 'application/json'
            ])->get($api_url . '?page=2&page_size=100');
            
            if ($response->successful()) {

                $data = json_decode($response);

        
                foreach ($data->results as $key => $course) {

                    $rating = mt_rand(3, 5);
                    // Genera un número aleatorio entre 0 y 2 para determinar el tipo de precio
                    $priceType = mt_rand(0, 2);

                    if ($priceType === 0) {
                        // Un tercio de los cursos son gratuitos
                        $price = 0;
                    } else {
                        // Dos tercios de los cursos tienen un precio entre 1 y 99

                        // Genera un número aleatorio entre 0 y 1 para determinar si el precio es menor a 20
                        $isLessThan20 = mt_rand(0, 1);

                        if ($isLessThan20) {
                            // La mitad de los cursos es menor a 20
                            $randomPercentage = mt_rand(1, 100);
                            if ($randomPercentage <= 35) {
                                // El 30% de los cursos tienen valores decimales terminados en .99 o .95
                                $price = mt_rand(1, 19) + (mt_rand(0, 1) ? 0.99 : 0.95);
                            } else {
                                // El 70% de los cursos son enteros
                                $price = mt_rand(1, 19);
                            }
                        } else {
                            // La mitad de los cursos es mayor a 20
                            $randomPercentage = mt_rand(1, 100);
                            if ($randomPercentage <= 35) {
                                // El 30% de los cursos tienen valores decimales terminados en .99 o .95
                                $price = mt_rand(20, 99) + (mt_rand(0, 1) ? 0.99 : 0.95);
                            } else {
                                // El 70% de los cursos son enteros
                                $price = mt_rand(20, 99);
                            }
                        }
                    }


                    $instructorName = $course->visible_instructors[0]->title;
                    $instructorJobTitle = $course->visible_instructors[0]->job_title;

                    $instructor = Instructor::firstOrCreate([
                        'name' => $instructorName,
                        'job_title' => $instructorJobTitle,
                    ]);
                    
                    $onlineCourse = OnlineCourse::create([
                        'id' => $course->id,
                        'title' => $course->title,
                        'headline' => $course->headline,
                        'price' => $price,
                        'rating' => $rating,
                        'img' => $course->image_480x270,
                        'instructor_id' => $instructor->id,
                    ]);

                    $instructor->onlineCourses()->save($onlineCourse);       
                }
    
                return response()->json($data);

            } else {
                // Handle errors
                $statusCode = $response->getStatusCode();

                switch ($statusCode) {
                    case 401:
                        $message = 'Unauthorized';
                        break;
                    case 403:
                        $message = 'Forbidden';
                        break;
                    case 404:
                        $message = 'Not Found';
                        break;
                    case 405:
                        $message = 'Method Not Allowed';
                        break;
                    case 422:
                        $message = 'Unprocessable Content';
                        break;
                    default:
                        $message = ($statusCode == 500) ? 
                        'Whoops, looks like something went wrong' : 'Unknown error';
                        break;
                }

                // Custom error response
                $response = [
                        'message' => $message,
                        'status_code' => $statusCode
                    ];

                return response()->json($response);
            }
        }
         
}