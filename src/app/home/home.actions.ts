import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Action } from '@ngrx/store';

@Injectable()

export class HomeActions {

  public static SET_VALUE = '[Home] Set Value';
  public setValue(value: string): Action {
    return {
      type: HomeActions.SET_VALUE,
      payload: value
    };
  }
}
