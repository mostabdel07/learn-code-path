<?php

namespace App\Listeners;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Spatie\Permission\Models\Role;

class AssignUserRoleListener implements ShouldQueue
{
    use InteractsWithQueue;

    /**
     * Handle the event.
     *
     * @param  \App\Events\AssignUserRole  $event
     * @return void
     */
    public function handle($event)
    {
        $user = $event->user;
        $role = Role::findByName('user'); // Obtén el rol "user" utilizando Spatie

        $user->assignRole($role); // Asigna el rol al usuario
    }
}