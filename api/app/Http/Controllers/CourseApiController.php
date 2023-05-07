<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;
use App\Models\OnlineCourse;


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

                    $price=$course->price;
                    $price = str_replace('€', '', $price);
                    $price = floatval($price);
                    
                    OnlineCourse::create([
                        'id' => $course->id,
                        'title' => $course->title,
                        'price' => $price,
                        'img' => $course->image_480x270,
                        'headline' => $course->headline,
                        'instructor' => array_map(fn($instructor) => $instructor->title, $course->visible_instructors) // TODO: Not working yet
                    ]);
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