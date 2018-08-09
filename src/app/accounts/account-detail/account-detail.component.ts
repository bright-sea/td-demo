import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromAccount from '../store/account.reducers';
import * as AccountActions from '../store/account.actions';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit {
  accountState: Observable<fromAccount.State>;
  id: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private store: Store<fromAccount.FeatureState>) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.accountState = this.store.select('accounts');
        }
      );
  }

  onEditAccount() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteAccount() {
    this.store.dispatch(new AccountActions.DeleteAccount(this.id));
    this.router.navigate(['/accounts']);
  }

}
