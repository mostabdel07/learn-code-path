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

                    $price=$course->price;
                    $price = str_replace('€', '', $price);
                    $price = floatval($price);

                    $instructorName = $course->visible_instructors[0]->title;
                    $instructorJobTitle = $course->visible_instructors[0]->job_title;

                    $instructor = Instructor::firstOrCreate([
                        'name' => $instructorName,
                        'job_title' => $instructorJobTitle,
                    ]);
                    
                    $onlineCourse = OnlineCourse::create([
                        'id' => $course->id,
                        'title' => $course->title,
                        'price' => $price,
                        'img' => $course->image_480x270,
                        'headline' => $course->headline,
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