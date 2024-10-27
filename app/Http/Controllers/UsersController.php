<?php

namespace App\Http\Controllers;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\User;


class UsersController extends Controller
{

  

    /**
     * Display the users history.
     */
    public function index(): Response
    {
        return Inertia::render('Users/Index', [
            'users' => User::where('is_active', true)->get()
        ]);
    }

    /**
     * Display the user details.
     */
    public function show(int $id): Response
    {
        return Inertia::render('Users/Details', [
            'user' => User::find($id)
        ]);
    }


    public function edit(Request $request, $id): RedirectResponse
    {
        // Validate incoming request data
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:users,email,' . $id,
            'phone' => 'required|string|max:20',
            'is_active' => 'required|boolean',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        // Find the user and update the data
        $user = User::findOrFail($id);
        $user->update($request->only(['name', 'last_name', 'email', 'phone', 'is_active']));

        return Redirect::route('dashboard');
    }
    

    public function delete(Request $request, $id): RedirectResponse
    {
        // Validate incoming request data
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:users,email,' . $id,
            'phone' => 'required|string|max:20',
            'is_active' => 'required|boolean',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        // Find the user and update the data
        $user = User::findOrFail($id);
        $user->update($request->only(['is_active']));

        return Redirect::route('dashboard');
    }
    

}
