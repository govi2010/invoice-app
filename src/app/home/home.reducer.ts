import { Action } from '@ngrx/store';

import { HomeActions } from './home.actions';

export interface HomeState {
  value?: string;
}

export const initialState: HomeState = {};

export function homeReducer(state = initialState, action: Action): HomeState {
  switch (action.type) {

    case HomeActions.SET_VALUE: {
      return Object.assign({}, state, {
        value: action.payload
      });
    }

    default: {
      return state;
    }
  }
}
