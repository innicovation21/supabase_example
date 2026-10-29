import { Component, inject } from '@angular/core';
import { Supabase } from '../../services/supabase';

@Component({
  selector: 'app-main-content',
  imports: [],
  templateUrl: './main-content.html',
  styleUrl: './main-content.scss',
})
export class MainContent {
  supabase = inject(Supabase)
  
  signOut() {
    this.supabase.signOut();
  }
}
