import { Action, createReducer, on } from '@ngrx/store';
import * as StoreActions from '../actions';

export const storeFeatureKey = 'store';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,

  on(StoreActions.loadStores, state => state),
  on(StoreActions.loadStoresSuccess, (state, action) => state),
  on(StoreActions.loadStoresFailure, (state, action) => state),

);
