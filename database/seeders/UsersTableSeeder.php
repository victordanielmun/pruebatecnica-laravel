<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::factory()->create([
            'name' => 'Test',
            'lastname' => 'User',
            'phone' => '123456789',
            'email' => 'test@example.com',
            'email_verified_at' => null,
            'password' => '$2y$12$Qgm3A0eCCondB8FKPJJuf.AzLH.X7PXewXIV0wQJdpjqkv8OSJc8u',
            'remember_token' => Str::random(10),
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
