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

        
        
        \App\Models\Role::factory()->create([
            'role_name' => 'admin',
        ]);
        
        \App\Models\Role::factory()->create([
            'role_name' => 'user',
        ]);

        \App\Models\PersonalDatas::factory()->create([
            'name' => 'Víctor',
            'surname' => 'Muñoz Calzada',
            'birthday' => '1994-05-13',
            'location' => 'Barcelona',
            'img' => 'img',
        ]);

        \App\Models\PersonalDatas::factory()->create([
            'name' => 'Mostafa',
            'surname' => 'Abdedlillah',
            'birthday' => '1996-04-30',
            'location' => 'Barcelona',
            'img' => 'img',
        ]);

        \App\Models\User::factory()->create([
            'username' => 'victor',
            'email' => 'victor@gmail.com',
            'password' => bcrypt('victor1234'),
            'personal_data_id' => '1',
            'role_id' => '1',
        ]);

        \App\Models\User::factory()->create([
            'username' => 'mosta',
            'email' => 'mosta@gmail.com',
            'password' => bcrypt('mosta1234'),
            'personal_data_id' => '2',
            'role_id' => '1',
        ]);
        
        \App\Models\User::factory(10)->create();

        


    }
}