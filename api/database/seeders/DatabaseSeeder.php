<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        //\App\Models\User::factory(1)->create();

        \App\Models\Role::factory()->create([
            'role_name' => 'admin',
        ]);

        \App\Models\Role::factory()->create([
            'role_name' => 'user',
        ]);

        \App\Models\User::factory()->create([
            'username' => 'victor',
            'email' => 'victor@gmail.com',
            'password' => bcrypt('victor1234'),
            'role_id' => '1',
        ]);

        \App\Models\User::factory()->create([
            'username' => 'mosta',
            'email' => 'mosta@gmail.com',
            'password' => bcrypt('mosta1234'),
            'role_id' => '1',
        ]);
    }
}