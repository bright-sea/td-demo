import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromAccount from '../store/account.reducers';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {
  accountState: Observable<fromAccount.State>;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private store: Store<fromAccount.FeatureState>) {
  }

  ngOnInit() {
    this.accountState = this.store.select('accounts');
  }

  onNewAccount() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
