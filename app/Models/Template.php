<?php

namespace App\Models;

use App\Traits\UidTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Template extends Model
{
    use HasFactory;
    use UidTrait;

    protected $table = 'templates';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'template',
    ];

    /**
     * The guarded attributes on the model.
     *
     * @var array
     */
    protected $guarded = [
        'id', 'uid'
    ];
}
