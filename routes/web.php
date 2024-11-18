<?php

use App\Http\Controllers\TemplateController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

//Route::get('/', function () {
//    return Inertia::render('Welcome', [
//        'canLogin' => Route::has('login'),
//        'canRegister' => Route::has('register'),
//        'laravelVersion' => Application::VERSION,
//        'phpVersion' => PHP_VERSION,
//    ]);
//});
//
//Route::middleware([
//    'auth:sanctum',
//    config('jetstream.auth_session'),
//    'verified',
//])->group(function () {
//    Route::get('/dashboard', function () {
//        return Inertia::render('Dashboard');
//    })->name('dashboard');
//});

Route::get('/', [TemplateController::class, 'index'])->name('home');
Route::resource('templates', TemplateController::class, ['except' => ['destroy', 'edit']]);
Route::get('templates/{template}/preview', [TemplateController::class, 'preview'])->name('templates.preview');
Route::any('templates/email', [TemplateController::class, 'email'])->name('templates.email');


