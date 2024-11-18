<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use PhpParser\Node\Expr\Array_;

class TestMail extends Mailable
{
    use Queueable, SerializesModels;

    public $blocks;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(Array $blocks)
    {
        $this->blocks = $blocks;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('preview', [
            'blocks' => $this->blocks ?? []
        ]);
    }
}
