import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {switchMap, withLatestFrom, map} from 'rxjs/operators';
import {HttpClient, HttpRequest} from '@angular/common/http';
import {Store} from '@ngrx/store';

import * as AccountActions from '../store/account.actions';
import {Account} from '../account.model';
import * as fromAccount from '../store/account.reducers';

@Injectable()
export class AccountEffects {
  @Effect()
  accountFetch = this.actions$
    .ofType(AccountActions.FETCH_ACCOUNTS)
    .pipe(switchMap((action: AccountActions.FetchAccounts) => {
      return this.httpClient.get<Account[]>('https://td-demo-2ed10.firebaseio.com/accounts.json', {
        observe: 'body',
        responseType: 'json'
      });
    }), map(
      (accounts) => {
        return {
          type: AccountActions.SET_ACCOUNTS,
          payload: accounts
        };
      }
    ));

  @Effect({dispatch: false})
  accountStore = this.actions$
    .ofType(AccountActions.STORE_ACCOUNTS)
    .pipe(withLatestFrom(this.store.select('accounts')),
      switchMap(([action, state]) => {
        const req = new HttpRequest('PUT', 'https://td-demo-2ed10.firebaseio.com/accounts.json', state.accounts, {reportProgress: true});
        return this.httpClient.request(req);
      }));

  constructor(private actions$: Actions,
              private httpClient: HttpClient,
              private store: Store<fromAccount.FeatureState>) {
  }
}
