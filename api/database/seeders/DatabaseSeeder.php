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

        $this->call(RoleSeeder::class);

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
        ])->assignRole('admin');

        \App\Models\User::factory()->create([
            'username' => 'mosta',
            'email' => 'mosta@gmail.com',
            'password' => bcrypt('mosta1234'),
            'personal_data_id' => '2',
        ])->assignRole('admin');
        
        \App\Models\User::factory(10)->create()->each(function($user){
            $user->assignRole('user');
        });

        \App\Models\Bootcamp::create([
            'title'=> 'Iniciación en la programación con Java y MySQL',
            'startDatetime' => '2023-06-09T13:00',
            'endDatetime' => '2023-06-09T14:30',
            'duration'=> '2 semana(s)',
            'location'=> 'Barcelona',
            'description'=> 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde tempore aliquid voluptate natus. Odio iste perspiciatis vitae harum! Atque itaque officiis consequatur doloremque, fugit odio est minus voluptates magni beatae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde tempore aliquid voluptate natus. Odio iste perspiciatis vitae harum! Atque itaque officiis consequatur doloremque, fugit odio est minus voluptates magni beatae! odio est minus voluptates magni beatae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
            'image'=> 'https://ts-production.imgix.net/images/088e397f-8949-42ad-a09c-631d611fd773.jpg?auto=compress,format&w=800&h=450',
        ]);

        \App\Models\Bootcamp::create([
            'title'=> 'Laravel 9 y Next.js Full-stack',
            'startDatetime' => '2023-05-28T13:00',
            'endDatetime' => '2023-05-28T14:30',
            'duration'=> '4 semana(s)',
            'location'=> 'Barcelona',
            'description'=> 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde tempore aliquid voluptate natus. Odio iste perspiciatis vitae harum! Atque itaque officiis consequatur doloremque, fugit odio est minus voluptates magni beatae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde tempore aliquid voluptate natus. Odio iste perspiciatis vitae harum! Atque itaque officiis consequatur doloremque, fugit odio est minus voluptates magni beatae! odio est minus voluptates magni beatae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
            'image'=> 'https://reffect.co.jp/wp-content/uploads/2022/03/Laravel9_-next_js-1024x585.png',
        ]);
    }
}