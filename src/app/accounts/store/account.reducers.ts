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
     'Tasty Schnitzel',
     'A super-tasty Schnitzel - just awesome!',
     'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG'
    ),
    new Account('Big Fat Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
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
