import { Injectable } from '@angular/core';
import { merge, Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppComponentViewModel, AppRoutes } from '../models/app.component.interface';

@Injectable()
export class AppViewmodelService {

  private _appViewModelSub$ = new Subject<AppComponentViewModel>();

  viewModel$ = this._appViewModelSub$.asObservable();

  getViewModel(): Observable<AppComponentViewModel> {
    const route = new Map<string, AppRoutes>();
    route.set('Analyze File', AppRoutes.ANALYZE_FILE);
    const routes$ = of([...route.keys()]).pipe(
      map(routes => ({routes}))
    );
    return merge(routes$, this.viewModel$);
  }
}
