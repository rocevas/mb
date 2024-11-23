<?php

namespace Database\Seeders;

use App\Models\Team;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->withPersonalTeam()->create();

//        User::factory()->withPersonalTeam()->create([
//            'name' => 'Šarūnas',
//            'email' => 'sarunas@mailbaker.com',
//        ]);

        $user = User::create([
            'email' => 'sarunas@mailbaker.com',
            'name' => 'Šarūnas Ročevas',
            'password' => Hash::make('secret'),
            'email_verified_at' => now(),
        ]);

        $team = Team::create([
            'name' => 'Team',
            'user_id' => $user->id,
            'personal_team' => false,
        ]);

        $user->switchTeam($team);

        \DB::unprepared(
            file_get_contents(base_path('database/seeders/templates.sql'))
        );
    }
}
