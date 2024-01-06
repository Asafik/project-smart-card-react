<?php

use App\Http\Controllers\Api\Auth\LoginController;
use App\Http\Controllers\Api\Auth\RegisterController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\ProductController as ApiProductController;
use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return new UserResource($request->user());
});


Route::middleware('auth:sanctum')->group(function () {
    Route::post('logout', [LoginController::class, 'logout']);
});

Route::post('login', [LoginController::class, 'login']);
Route::post('register', [RegisterController::class, 'register']);
Route::post('forgot-password', [LoginController::class, 'forgotPassword']);


Route::get('categories', [CategoryController::class, 'index']);
Route::get('categories/{uuid}', [CategoryController::class, 'show']);
Route::post('categories', [CategoryController::class, 'store']);
Route::put('categoriesupdate/{uuid}', [CategoryController::class, 'update']);
Route::delete('categoriesdelete/{uuid}', [CategoryController::class, 'destroy']);


Route::get('products', [ApiProductController::class, 'index']);
Route::post('products', [ApiProductController::class, 'store']);
Route::get('products/{uuid}', [ApiProductController::class, 'show']);
Route::put('productsupdate/{uuid}', [ApiProductController::class, 'update']);
Route::delete('productsdelete/{uuid}', [ApiProductController::class, 'destroy']);
