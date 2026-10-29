# SupabaseAuthDemo

A small Angular demo app that shows how to handle user authentication with [Supabase](https://supabase.com/). It covers signing up with email and password, logging in and out, and protecting a dashboard route with an auth guard that checks the current Supabase session.

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.0.7.

## Setup

Before running the app, set up your environment file:

```bash
cp src/environments/environment.template.ts src/environments/environment.ts
```

Then enter your Supabase project URL and anon key (found in your Supabase Dashboard under Project Settings > API) in `environment.ts`.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.