<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('mentors', 'MentorController@create');
Route::put('mentors/{id}', 'MentorController@update');
Route::get('mentors', 'MentorController@index');
Route::get('mentors/{id}', 'MentorController@show');
Route::delete('mentors/{id}', 'MentorController@destory');

Route::post('courses', 'CourseController@create');
Route::put('courses/{id}', 'CourseController@update');
Route::get('courses/{id}', 'CourseController@show');
Route::get('courses', 'CourseController@index');
Route::delete('courses/{id}', 'CourseController@destroy');

Route::post('chapters', 'ChapterController@create');
Route::put('chapters/{id}', 'ChapterController@update');
Route::get('chapters', 'ChapterController@index');
Route::get('chapters/{id}', 'ChapterController@show');
Route::delete('chapters/{id}', 'ChapterController@destroy');

Route::post('lesson', 'LessonController@create');
Route::put('lesson/{id}', 'LessonController@update');
Route::get('lesson', 'LessonController@index');
Route::get('lesson/{id}', 'LessonController@show');
Route::delete('lesson/{id}', 'LessonController@destroy');

Route::post('image-courses', 'ImageCourceController@create');
Route::delete('image-courses/{id}', 'ImageCourceController@destroy');

Route::post('my-courses', 'MyCourseController@create');
Route::get('my-courses', 'MyCourseController@index');

Route::post('reviews', 'ReviewController@create');
Route::put('reviews/{id}', 'ReviewController@update');
Route::delete('reviews/{id}', 'ReviewController@destroy');
