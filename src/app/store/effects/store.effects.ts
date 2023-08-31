import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, mergeMap, tap, switchMap } from 'rxjs/operators';
import { Observable, EMPTY, of, concat } from 'rxjs';
import * as StoreActions from '../actions';


@Injectable()
export class StoreEffects {

  loadStores$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(StoreActions.loadStores),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => StoreActions.loadStoresSuccess({ data })),
          catchError(error => of(StoreActions.loadStoresFailure({ error }))))
      )
    );
  });



  // loadData$ = createEffect(() => this.actions$.pipe(
  //   ofType(loadData),
  //   withLatestFrom(this.store.select(permissions)))),
  //   filter(([action, permissions]) => hasSpecificPermission(permissions)),
  //   map(([action]) => action),
  //   mergeMap(({payload}) => this.dataService.getData(payload).pipe(
  //     map(data => loadDataSuccess(data)),
  //     catchError(error => of(loadDataError(error))),
  //   ))
  // ));


  test$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StoreActions.test),
      tap((value) => console.log(value)),
      switchMap(() => {
        const res = this.http.post('', {})

        const result$ = res.pipe(map((res: any) => res ?
          StoreActions.loadStoresSuccess({ data: res }) :
          StoreActions.loadStoresFailure({ error: res })
        ))

        return concat(result$)
      })
    )
  )


  constructor(private actions$: Actions, private http: HttpClient) {}
}
