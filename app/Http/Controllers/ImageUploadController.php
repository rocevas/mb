<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ImageUploadController extends Controller
{
    public function uploadFile(Request $request)
    {
        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('images', 'public');
            return response()->json(['success' => 1, 'file' => ['url' => Storage::url($path)]]);
        }
        return response()->json(['success' => 0, 'error' => 'File not uploaded']);
    }

    public function fetchUrl(Request $request)
    {
        $url = $request->input('url');
        // Validate and process the URL
        return response()->json(['success' => 1, 'file' => ['url' => $url]]);
    }
}
