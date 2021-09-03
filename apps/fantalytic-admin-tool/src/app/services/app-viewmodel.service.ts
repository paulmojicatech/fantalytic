import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { merge, Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppComponentViewModel, AppRoutes } from '../models/app.component.interface';

@Injectable()
export class AppViewmodelService {

  private _appViewModelSub$ = new Subject<AppComponentViewModel>();

  viewModel$ = this._appViewModelSub$.asObservable();

  constructor(private _router: Router, private _matSnackbar: MatSnackBar){}

  getViewModel(): Observable<AppComponentViewModel> {
    const route = new Map<string, AppRoutes>();
    route.set('Analyze File', AppRoutes.ANALYZE_FILE);
    const routes$ = of([...route.keys()]).pipe(
      map(routes => ({routes}))
    );
    return merge(routes$, this.viewModel$);
  }

  handleSidenavClick(route: string): void {
    switch (route) {
      case 'Analyze File':
        this._router.navigate([AppRoutes.ANALYZE_FILE]);
        break;
      default:
        break;
    }
  }

  displayErrorMessage(errorMessage: string): void {

  }
}
