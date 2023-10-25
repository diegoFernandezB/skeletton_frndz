import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  ingresar() {
    throw new Error('Method not implemented.');
  }

  constructor() { }
  

  getAuthToken(): Observable <boolean>{
    return of (true);
  }
}
