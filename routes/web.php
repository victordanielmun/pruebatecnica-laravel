<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UsersController;
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

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::prefix('users')->group(function () {
    Route::get('/', [UsersController::class, 'index'])->name('users.index');
    Route::get('/{id}', [UsersController::class, 'show'])->name('users.show');
    Route::put('/users/{id}', [UsersController::class, 'edit'])->name('users.edit');
    Route::put('/users/{id}', [UsersController::class, 'delete'])->name('users.delete');
    });

});

require __DIR__.'/auth.php';
