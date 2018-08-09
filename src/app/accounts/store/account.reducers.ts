import { Account } from '../account.model';
import * as AccountActions from './account.actions';
import * as fromApp from '../../store/app.reducers';

export interface FeatureState extends fromApp.AppState {
  accounts: State
}

export interface State {
  accounts: Account[];
}

const initialState: State = {
  accounts: [
    new Account(
     'Checking',
     '230170989999',
     10000.00,
     'CND'
    ),
    new Account('Saving',
      '326565273333',
      23257656.89,
      'USD'
      )
  ]
};

export function accountReducer(state = initialState, action: AccountActions.AccountActions) {
  switch (action.type) {
    case (AccountActions.SET_ACCOUNTS):
      return {
        ...state,
        accounts: [...action.payload]
      };
    case (AccountActions.ADD_ACCOUNT):
      return {
        ...state,
        accounts: [...state.accounts, action.payload]
      };
    case (AccountActions.UPDATE_ACCOUNT):
      const account = state.accounts[action.payload.index];
      const updatedAccount = {
        ...account,
        ...action.payload.updatedAccount
      };
      const accounts = [...state.accounts];
      accounts[action.payload.index] = updatedAccount;
      return {
        ...state,
        accounts: accounts
      };
    case (AccountActions.DELETE_ACCOUNT):
      const oldAccounts = [...state.accounts];
      oldAccounts.splice(action.payload, 1);
      return {
        ...state,
        accounts: oldAccounts
      };
    default:
      return state;
  }
}
