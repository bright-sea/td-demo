import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';

import * as AccountActions from '../store/account.actions';
import * as fromAccount from '../store/account.reducers';

@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.css']
})
export class AccountEditComponent implements OnInit {
  id: number;
  editMode = false;
  accountForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private store: Store<fromAccount.FeatureState>) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  onSubmit() {
    if (this.editMode) {
      this.store.dispatch(new AccountActions.UpdateAccount({
        index: this.id,
        updatedAccount: this.accountForm.value
      }));
    } else {
      this.store.dispatch(new AccountActions.AddAccount(this.accountForm.value));
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let accountName = '';
    let accountNumber = '';
    let accountAmount = 0;
    let accountCurrency = 'CND'

    if (this.editMode) {
      this.store.select('accounts')
        .pipe(take(1))
        .subscribe((accountState: fromAccount.State) => {
          const account = accountState.accounts[this.id];
          accountName = account.name;
          accountNumber = account.number;
          accountAmount = account.amount;
          accountCurrency = account.currency;
        });
    }

    this.accountForm = new FormGroup({
      'name': new FormControl(accountName, Validators.required),
      'number': new FormControl(accountNumber, Validators.required),
      'amount': new FormControl(accountAmount, Validators.required),
      'currency': new FormControl(accountCurrency, Validators.required),
    });
  }

}
