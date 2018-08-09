import { Action } from '@ngrx/store';

import { Account } from '../account.model';

export const SET_ACCOUNTS = 'SET_ACCOUNTS';
export const ADD_ACCOUNT = 'ADD_ACCOUNT';
export const UPDATE_ACCOUNT = 'UPDATE_ACCOUNT';
export const DELETE_ACCOUNT = 'DELETE_ACCOUNT';
export const STORE_ACCOUNTS = 'STORE_ACCOUNTS';
export const FETCH_ACCOUNTS = 'FETCH_ACCOUNTS';

export class SetAccounts implements Action {
  readonly type = SET_ACCOUNTS;

  constructor(public payload: Account[]) {}
}

export class AddAccount implements Action {
  readonly type = ADD_ACCOUNT;

  constructor(public payload: Account) {}
}

export class UpdateAccount implements Action {
  readonly type = UPDATE_ACCOUNT;

  constructor(public payload: {index: number, updatedAccount: Account}) {}
}

export class DeleteAccount implements Action {
  readonly type = DELETE_ACCOUNT;

  constructor(public payload: number) {}
}

export class StoreAccounts implements Action {
  readonly type = STORE_ACCOUNTS;
}

export class FetchAccounts implements Action {
  readonly type = FETCH_ACCOUNTS;
}

export type AccountActions = SetAccounts |
  AddAccount |
  UpdateAccount |
  DeleteAccount |
  StoreAccounts |
  FetchAccounts;
