<?php
namespace App\Traits;
use Illuminate\Support\Facades\Log;
use Laravel\Jetstream\Jetstream;
trait HasNoPersonalTeam
{
    /**
     * Determine if the user owns the given team.
     *
     * @param  mixed  $team
     * @return bool
     */
    public function ownsTeam($team): bool
    {
        // return $this->id == $team->user_id;
        return $this->id == optional($team)->user_id;
    }
    /**
     * Determine if the given team is the current team.
     *
     * @param  mixed  $team
     * @return bool
     */
    public function isCurrentTeam($team): bool
    {
        if (! $this->allTeams()->count()) {
            return false;
        }
        // return $team->id === $this->currentTeam->id;
        return optional($team)->id === $this->currentTeam->id;
    }
    /**
     * Get the current team of the user's context.
     */
    public function currentTeam()
    {
        if (is_null($this->current_team_id) && $this->id) {
            $this->switchTeam($this->allTeams()->first());
        }
        return $this->belongsTo(Jetstream::teamModel(), 'current_team_id');
    }
}
