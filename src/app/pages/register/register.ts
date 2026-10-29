import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Supabase } from '../../services/supabase';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  supabase = inject(Supabase)
  
  registerForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  async onSubmit() {
    await this.supabase.signUpNewUser(
      this.registerForm.value.email ?? '',
      this.registerForm.value.password ?? ''
    );
    this.registerForm.reset();
  }
}
