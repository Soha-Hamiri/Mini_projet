<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\http\Controllers\ProductController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('products',[ProductController::class,'getProduct']);
Route::get('product/{id}',[ProductController::class,'getProductByuId']);
Route::post('addProduct',[ProductController::class,'addProduct']);
Route::put('updateProduct/{id}',[ProductController::class,'updateProduct']);
Route::delete('deleteProduct/{id}',[ProductController::class,'deleteProduct']);
Route::get('products/search_product',[ProductController::class,'searchProduct']);