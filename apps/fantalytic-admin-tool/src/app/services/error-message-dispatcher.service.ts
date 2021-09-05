import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef, TextOnlySnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { filter, take, tap } from 'rxjs/operators';
import { AppUtilService } from './app-util.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorMessageDispatcherService {

  private _snackbarInstances = new Map<string, MatSnackBarRef<TextOnlySnackBar>>();

  constructor(private _snackBar: MatSnackBar, private _appUtilSvc: AppUtilService) {}

  dispatchErrorMsg(errorMsg: string): void {
      console.log('ERR');
      const guid = this._appUtilSvc.generateGuid();
      const snackBar = this._snackBar.open(errorMsg, undefined, { duration: 2000 });
      this._snackbarInstances.set(guid, snackBar);
      snackBar.afterDismissed().pipe(
        take(1)
      ).subscribe(() => {
        this._snackbarInstances.delete(guid);
      })
  }

}
