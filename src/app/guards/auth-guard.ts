import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { Supabase } from '../services/supabase';

export const authGuard: CanActivateFn = async (route, state) => {
  const supabase = inject(Supabase);
  const router = inject(Router);

  if (await supabase.isLoggedIn()) {
    return true;
  } else {
    return router.createUrlTree(['/login']);
  }
};
