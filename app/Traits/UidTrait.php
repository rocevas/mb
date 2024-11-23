<?php

namespace App\Traits;

use Hidehalo\Nanoid\Client;

trait UidTrait
{

    /**
     * Defines the UUID field for the model.
     * @return string
     */
    protected static function uidField(): string
    {
        return 'uid';
    }

    /**
     * Bootstrap any application services.
     */
    protected static function bootUidTrait(): void
    {

        // Create uid when creating item.
        $creationCallback = function ($model) {
            if (empty($model->uid))
            {
                $client = new Client();
                $model->uid = $client->generateId(21);
            }
        };
        static::creating($creationCallback);

    }

    /**
     * Get the route key for the model.
     * @return string
     */
    public function getRouteKeyName(): string
    {
        return 'uid';
    }

}
