<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        if (request()->isMethod('post')) {
            return [
                'name' => 'required|string|max:258',
                'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
                'description' => 'required|string',
                'category_id' => 'required|exists:categories,id',
                'qty' => 'required|numeric',
                'price' => 'required|numeric',
                'discount' => 'required|numeric',
            ];
        } else {
            return [
                'name' => 'required|string|max:258',
                'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
                'description' => 'required|string',
                'category_id' => 'required|exists:categories,id',
                'qty' => 'required|numeric',
                'price' => 'required|numeric',
                'discount' => 'required|numeric',
            ];
        }
    }

    public function messages(): array
    {
        if (request()->isMethod('post')) {
            return [
                'name.required' => 'Name is required',
                'image.required' => 'Image is required',
                'description.required' => 'Description is required',
                'category_id.required' => 'Category is required',
                'qty.required' => 'Quantity is required',
                'price.required' => 'Price is required',
                'discount.required' => 'Discount is required',
            ];
        } else {
            return [
                'name.required' => 'Name is required',
                'description.required' => 'Description is required',
                'category_id.required' => 'Category is required',
                'qty.required' => 'Quantity is required',
                'price.required' => 'Price is required',
                'discount.required' => 'Discount is required',
            ];
        }
    }
}
