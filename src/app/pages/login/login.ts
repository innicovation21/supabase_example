import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Supabase } from '../../services/supabase';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  supabase = inject(Supabase)

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  async onSubmit() {
    await this.supabase.signInWithEmail(
      this.loginForm.value.email ?? '',
      this.loginForm.value.password ?? ''
    );
    this.loginForm.reset();
  }
}
