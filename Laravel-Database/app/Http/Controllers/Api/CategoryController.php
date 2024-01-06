<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CategoryStoreRequest;
use App\Models\Category;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;



class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = Category::all();

        return response()->json([
            'categories' => $categories
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
    public function store(CategoryStoreRequest $request)
    {
        try {
            $imageName = Str::random(32) . "." . $request->image->getClientOriginalExtension();

            // Create Category
            Category::create([
                'name' => $request->name,
                'image' => $imageName,
                'description' => $request->description
            ]);

            // Save Image in Storage Folder
            Storage::disk('public')->put($imageName, file_get_contents($request->image));

            // Return Json Response
            return response()->json([
                'message' => "Category created successfully",
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
            $category = Category::find($uuid);
            if (!$category) {
                // Return Json Response
                return response()->json([
                    'message' => 'Category not found',
                ], 404);
            }
    
            // Return Json Response
            return response()->json([
                'Category' => $category
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
    public function update(CategoryStoreRequest $request, string $uuid)
    {
        try {
            $category = Category::find($uuid);
            if (!$category) {
                // Return Json Response
                return response()->json([
                    'message' => 'Category not found',
                ], 404);
            }

            $category->name = $request->name;
            $category->description = $request->description;

            if ($request->image) {
                // Public Storage
                $storage = Storage::disk('public');

                // Delete Old Image
                if ($storage->exists($category->image)) {
                    $storage->delete($category->image);
                }

                // Image Name
                $imageName = Str::random(32) . "." . $request->image->getClientOriginalExtension();
                $category->image = $imageName;

                // Save Image in Storage Folder
                $storage->put($imageName, file_get_contents($request->image));
            }

            // Update Category
            $category->save();

            return response()->json([
                'message' => 'Category updated successfully',
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
        $category = Category::find($uuid);
        if (!$category) {
            // Return Json Response
            return response()->json([
                'message' => 'Category not found',
            ], 404);
        }

        // Public Storage
        $storage = Storage::disk('public');

        // Delete Old Image
        if ($storage->exists($category->image)) {
            $storage->delete($category->image);
        }

        // Delete Category
        $category->delete();

        // Return Json Response
        return response()->json([
            'message' => 'Category deleted successfully',
        ], 200);
    }
}
