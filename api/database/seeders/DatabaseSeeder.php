<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Instructor;
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
            'startDatetime' => '2023-06-09T08:00',
            'endDatetime' => '2023-06-09T18:30',
            'duration'=> '2 semana(s)',
            'location'=> 'Barcelona',
            'description'=> 'Únase a "Iniciación en la programación con Java y MySQL" y sumérjase en el mundo de la programación. Aprenda los fundamentos de la programación en Java, incluyendo sintaxis, tipos de datos y principios orientados a objetos. Explore MySQL para una gestión eficaz de los datos. Con la orientación de expertos y ejercicios prácticos, obtendrá una base sólida en Java y MySQL. Comience hoy mismo su viaje por la programación con este completo curso.',
            'image'=> 'java-course.jpg',
        ]);

        \App\Models\Bootcamp::create([
            'title'=> 'Laravel 9 y Next.js Full-stack',
            'startDatetime' => '2023-06-28T08:00',
            'endDatetime' => '2023-06-28T18:00',
            'duration'=> '4 semana(s)',
            'location'=> 'Barcelona',
            'description'=> "Únete a Laravel 9 y Next.js Full-stack Bootcamp y domina el arte de construir aplicaciones web de vanguardia. Explore las potentes capacidades de backend de Laravel, incluyendo enrutamiento, gestión de bases de datos y autenticación, mientras aprovecha Next.js para crear interfaces frontend ultrarrápidas y SEO-friendly. Con proyectos prácticos y la orientación de expertos, obtendrá las habilidades necesarias para sobresalir en el desarrollo full-stack. Acelera tu carrera y crea aplicaciones web impactantes con este bootcamp inmersivo.",
            'image'=> 'laravel-course.jpg',
        ]);
    }
}