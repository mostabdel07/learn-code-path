<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthApiController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CourseApiController;
use App\Http\Controllers\OnlineCourseController;
use App\Http\Controllers\BootcampController;
use App\Http\Controllers\PurchaseController;
use App\Http\Controllers\SubscriptionController;
use App\Http\Controllers\InstructorController;
use App\Http\Controllers\PersonalDataController;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Storage;



/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::get('udemy', [CourseApiController::class, 'getCourses'])->withoutMiddleware(['csrf']);

Route::middleware(['cors'])->group(function () {

Route::controller(AuthApiController::class)->group(function () {
    Route::post('login', 'login'); 
    Route::post('register', 'register'); 
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
});

Route::apiResource('users', UserController::class);

Route::apiResource('courses', OnlineCourseController::class);

Route::apiResource('instructors', InstructorController::class);

Route::apiResource('personal_data', PersonalDataController::class);

Route::post('check_courses', [OnlineCourseController::class, 'checkCourses']);
Route::get('bootcamps', [BootcampController::class, 'index']);
Route::post('subscription_bootcamp', [BootcampController::class, 'subscriptionBootcamp']);

Route::get('user/{userId}/courses', [PurchaseController::class, 'getUserCourses']);
Route::get('user/{userId}/bootcamps', [SubscriptionController::class, 'getUserBootcamps']);
Route::apiResource('bootcamps/subscriptions', SubscriptionController::class);


});

Route::get('/greeting', function () {
    return 'Hello World';
});

Route::get('/images/{filename}', function ($filename) {
    $path = storage_path('app/public/images/' . $filename);

    if (File::exists($path)) {
        $file = File::get($path);
        $type = File::mimeType($path);
        $response = Response::make($file, 200);
        $response->header("Content-Type", $type);

        return $response;
    } else {
        abort(404);
    }
});