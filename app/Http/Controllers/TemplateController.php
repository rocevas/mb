<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTemplateRequest;
use App\Http\Requests\UpdateTemplateRequest;
use App\Mail\TestMail;
use App\Models\Template;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use Illuminate\Support\Facades\Mail;

class TemplateController extends Controller
{

    function index(Request $request): \Inertia\Response
    {
        return Inertia::render('Builder/Templates', [
            'title' => 'Templates',
            'templates' => Template::orderBy('id')->get(['id', 'uid', 'title']),
        ]);
    }

    function create(Template $template): \Inertia\Response
    {
        return Inertia::render('Builder/Builder', [
            'title' => 'Builder',
            'template' => $template,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTemplateRequest $request): \Illuminate\Http\RedirectResponse
    {
        $template = Template::create($request->validated());
        return redirect()->route('templates.show', $template)->with(['toast' => ['type' => 'success', 'message' => 'Template created.', 'id' => $template->id]]);
    }

    function show(Template $template): \Inertia\Response
    {
        return Inertia::render('Builder/Builder', [
            'title' => 'Builder',
            'template' => $template,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTemplateRequest $request, Template $template): \Illuminate\Http\RedirectResponse
    {
        $template->update($request->validated());

        return back()->with(['toast' => ['type' => 'success', 'message' => 'Template updated.']]);

    }

    function preview(Template $template = null): \Inertia\Response
    {
        return Inertia::render('Builder/Preview', [
            'title' => 'Preview',
            'template' => $template,
        ]);
    }

    function email(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'template' => 'required|array',
        ]);

        if ($validator->fails()) {
            return response()->json(array_merge(
                [ 'success' => false ],
                $validator->errors()->toArray()
            ));
        }

        $test_mail = new TestMail($request->get('template'));

        Mail::to($request->get('email'))->send($test_mail);

        return response()->json([
            'success' => true
        ]);
    }
}
