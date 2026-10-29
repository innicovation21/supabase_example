import { Service, inject } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Service()
export class Supabase {
    supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
    private router = inject(Router);

    async signUpNewUser(email: string, password: string) {
        const { data, error } = await this.supabase.auth.signUp({
            email: email,
            password: password,
        });

        if (error) {
            console.error('Signup error:', error.message);
        } else {
            console.log('Signup success:', data);
            this.router.navigate(['/login']);
        }

        return { data, error };
    }

    async signInWithEmail(email: string, password: string) {
        const { data, error } = await this.supabase.auth.signInWithPassword({
            email: email,
            password: password,
        })

        if (error) {
            console.error('Login error:', error.message);
        } else {
            console.log('Login success:', data);
            this.router.navigate(['/dashboard']);
        }

        return { data, error };
    }

    async isLoggedIn() {
        const { data } = await this.supabase.auth.getUser();
        console.log('Login status:', data.user)
        return data.user !== null;
    }

    async signOut() {
        const { error } = await this.supabase.auth.signOut();

        if (error) {
            console.error('Signout error:', error.message);
        } else {
            console.log('Signout success');
            this.router.navigate(['/login']);
        }
    }
}
