<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Users/Index', [
            'users' => User::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Users/New');
    }



    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'lastname' => 'required|string|max:255',
            'phone' => 'required|string|max:255',
            'isactive' => 'required|boolean',
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'name' => $request->name,
            'lastname' => $request->lastname,
            'phone' => $request->phone,
            'isactive' => $request->isactive,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        event(new Registered($user));

        return redirect(route('users.index', absolute: false));
    }

    /**
     * Display the specified resource.
     */
    public function updateuser(Request $request, $user_id)
    {
        $user = User::find($user_id);

        return Inertia::render('Users/Update', [
            'user' => $user
        ]);
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
    public function update(Request $request)
    {
          $request->validate([
        'id' => 'required|integer|exists:users,id',
        'name' => 'required|string|max:255',
        'lastname' => 'required|string|max:255',
        'phone' => 'required|string|max:255',
        'isactive' => 'required|boolean',
        'email' => [
            'required', 
            'string', 
            'email', 
            'max:255'
        ],
    ]);

    $user = User::findOrFail($request->id);
    $user->update($request->only(['name', 'lastname', 'phone', 'isactive']));

     return redirect(route('users.index', absolute: false));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
