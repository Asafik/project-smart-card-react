<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProductStoreRequest;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search = $request->query('search');
        $product = Product::with('category')->get();
        if ($search != null) {
            $product = Product::where('name', 'like', '%' . $search . '%')->with('category')->get();
        }
        return response()->json([
            'products' => $product
        ], 200);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ProductStoreRequest $request)
    {
        try {
            $imageName = Str::random(32) . "." . $request->image->getClientOriginalExtension();

            // Create Products
            Product::create([
                'name' => $request->name,
                'image' => $imageName,
                'description' => $request->description,
                'category_id' => $request->category_id,
                'qty' => $request->qty,
                'price' => $request->price,
                'discount' => $request->discount
            ]);

            // Save Image in Storage Folder
            Storage::disk('public')->put($imageName, file_get_contents($request->image));

            // Return Json Response
            return response()->json([
                'message' => "Product created successfully",
            ], 200);
        } catch (\Exception $e) {
            // Return Json Response
            return response()->json([
                'message' => "Something went really wrong",
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $uuid)
    {
        {
            $product = Product::find($uuid);
            if (!$product) {
                // Return Json Response
                return response()->json([
                    'message' => 'product not found',
                ], 404);
            }
    
            // Return Json Response
            return response()->json([
                'Product' => $product
            ], 200);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ProductStoreRequest $request, string $uuid)
    {
        try {
            $product = Product::find($uuid);
            if (!$product) {
                // Return Json Response
                return response()->json([
                    'message' => 'Product not found',
                ], 404);
            }

            $product->name = $request->name;
            $product->description = $request->description;
            $product->category_id = $request->category_id;
            $product->price = $request->price;
            $product->qty = $request->qty;
            $product->discount = $request->discount;

            if ($request->image) {
                // Public Storage
                $storage = Storage::disk('public');

                // Delete Old Image
                if ($storage->exists($product->image)) {
                    $storage->delete($product->image);
                }

                // Image Name
                $imageName = Str::random(32) . "." . $request->image->getClientOriginalExtension();
                $product->image = $imageName;

                // Save Image in Storage Folder
                $storage->put($imageName, file_get_contents($request->image));
            }

            // Update Product
            $product->save();

            return response()->json([
                'message' => 'Product updated successfully',
            ], 200);
        } catch (\Exception $e) {
            // Return Json Response
            return response()->json([
                'message' => "Something went wrong",
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $uuid)
    {
        $product = Product::find($uuid);
        if (!$product) {
            // Return Json Response
            return response()->json([
                'message' => 'product not found',
            ], 404);
        }

        // Public Storage
        $storage = Storage::disk('public');

        // Delete Old Image
        if ($storage->exists($product->image)) {
            $storage->delete($product->image);
        }

        // Delete product
        $product->delete();

        // Return Json Response
        return response()->json([
            'message' => 'product deleted successfully',
        ], 200);
    }
}
