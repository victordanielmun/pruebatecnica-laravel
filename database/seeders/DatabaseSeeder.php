<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Test',
            'lastname' => 'User',
            'phone' => '123456789',
            'isactive' => true,
            'email' => 'test@gmail.com',
            'password' => '$2y$12$slfcpqz0/o3Mjs5ZZmUiEO7HxjAFDxlTj.h6Xx2mn/MlGl/mqgUw6',
            'created_at' => '2024-11-06 01:16:11',
            'updated_at' => '2024-11-06 01:16:11',
        ]);

        User::factory()->create([
            'name' => 'Test2',
            'lastname' => 'User',
            'phone' => '123456789',
            'isactive' => false,
            'email' => 'test2@gmail.com',
            'password' => '$2y$12$slfcpqz0/o3Mjs5ZZmUiEO7HxjAFDxlTj.h6Xx2mn/MlGl/mqgUw6',
            'created_at' => '2024-11-06 01:16:11',
            'updated_at' => '2024-11-06 01:16:11',
        ]);

        User::factory()->create([
            'name' => 'Test3',
            'lastname' => 'User',
            'phone' => '123456789',
            'isactive' => true,
            'email' => 'test3@gmail.com',
            'password' => '$2y$12$slfcpqz0/o3Mjs5ZZmUiEO7HxjAFDxlTj.h6Xx2mn/MlGl/mqgUw6',
            'created_at' => '2024-11-06 01:16:11',
            'updated_at' => '2024-11-06 01:16:11',
        ]);

        User::factory()->create([
            'name' => 'Test4',
            'lastname' => 'User',
            'phone' => '123456789',
            'isactive' => true,
            'email' => 'test4@gmail.com',
            'password' => '$2y$12$slfcpqz0/o3Mjs5ZZmUiEO7HxjAFDxlTj.h6Xx2mn/MlGl/mqgUw6',
            'created_at' => '2024-11-06 01:16:11',
            'updated_at' => '2024-11-06 01:16:11',
        ]);
    }
}

