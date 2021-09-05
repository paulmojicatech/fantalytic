import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { v4 as uuidv4 } from 'uuid';


@Injectable({
  providedIn: 'root'
})
export class AppUtilService {

  constructor() { }

  generateGuid(): string {
    return uuidv4();
  }
}
