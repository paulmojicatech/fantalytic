import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { APP_DISPLAY_ERROR_MESSAGE } from "./app-state.actions";

@Injectable()
export class AppStateEffect {

    constructor(private _actions: Actions) {}
}