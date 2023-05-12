<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthApiController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CourseApiController;
use App\Http\Controllers\OnlineCourseController;
use App\Http\Controllers\PurchaseController;


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

Route::get('udemy', [CourseApiController::class, 'getCourses']);

Route::controller(AuthApiController::class)->group(function () {
    Route::post('login', 'login'); 
    Route::post('register', 'register'); 
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
});

Route::apiResource('users', UserController::class);

Route::apiResource('courses', OnlineCourseController::class);

Route::post('check_courses', [OnlineCourseController::class, 'checkCourses']);

Route::get('user/{userId}/courses', [PurchaseController::class, 'getUserCourses']);