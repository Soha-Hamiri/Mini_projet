<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
Use App\Models\Product;
class ProductController extends Controller
{
    public function getProduct(){
        return response()->json(Product::all(),200);
    }
    public function getProductByuId($id){
        $product = Product::find($id);
        if(is_null($product)){
            return response()->json(['message' => 'product introvable'],404);
        }
     return response()->json(Product::find($id),200);
 }

 //ajouter un product
public function addProduct(Request $request){
    $product = Product::create($request->all());
    return response($product,201);
}

//modifier un product
public function updateProduct(Request $request, $id){
    $product = Product::find($id);
    if(is_null($product)){
        return response()->json(['message' => 'product introvable'],404);
    }
    $product->update($request->all());
    return response($product,200);
    } 

    //supprimer un product
public function deleteProduct(Request $request, $id){
    $product = Product::find($id);
    if(is_null($product)){
        return response()->json(['message' => 'product introvable'],404);
    }
    $product->delete();
    return response(null,204);
    }
    
    public function searchProduct(Request $request){
        $query = Product::query();
        $data = $request->input('search_product');
        if($data){
            $query->whereRaw("nom LIKE '%" .$data. "%'")
            ->orWhereRaw("id LIKE '%" .$data. "%'")
            ->orWhereRaw("prix LIKE '%" .$data. "%'")
            ->orWhereRaw("quantite LIKE '%" .$data. "%'");
        }
        return $query->get();
        }  
}
