<?php

use App\Http\Controllers\TemplateController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});

Route::middleware(['auth:sanctum', 'verified'])->group(function () {

    Route::get('templates/preview', [TemplateController::class, 'preview'])->name('templates.no.preview');
    Route::get('templates/{template?}/preview', [TemplateController::class, 'preview'])->name('templates.preview');
    Route::resource('templates', TemplateController::class, ['except' => ['destroy', 'edit']]);
    Route::any('templates/email', [TemplateController::class, 'email'])->name('templates.email');

});
