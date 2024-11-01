<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\User;
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
     * Display register new user form.
     */
    public function new()
    {
        return Inertia::render('Users/Register');
    }

            /**
     * Display register new user form.
     */
    public function updateuser(Request $request, $user_id)
    {
        $user = User::find($user_id);

        return Inertia::render('Users/Update', [
            'user' => $user
        ]);
    }

            
    /**
     * Regiter new user.
     */

    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'lastname' => 'required|string|max:255',
            'phone' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'name' => $request->name,
            'lastname' => $request->lastname,
            'phone' => $request->phone,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        event(new Registered($user));

        return redirect(route('users.index', absolute: false));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }


    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
 public function update(Request $request)
{
    // Asegúrate de validar que se reciba un ID en la solicitud
    $request->validate([
        'id' => 'required|integer|exists:users,id', // Validar que el ID exista
        'name' => 'required|string|max:255',
        'lastname' => 'required|string|max:255',
        'phone' => 'required|string|max:255',
        'email' => [
            'required', 
            'string', 
            'email', 
            'max:255',
            // Validar que el email sea único en la tabla de usuarios
            // pero ignorando el ID del usuario que se está actualizando
        ],
    ]);

    // Buscar al usuario por ID usando el ID que viene de la solicitud
    $user = User::findOrFail($request->id);

    // Actualizar los datos del usuario
    $user->name = $request->input('name');
    $user->lastname = $request->input('lastname');
    $user->phone = $request->input('phone');

    // Guardar los cambios
    $user->save();

    // Redirigir a la lista de usuarios o a la vista de éxito
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
