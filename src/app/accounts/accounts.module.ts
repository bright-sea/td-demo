import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AccountsComponent } from './accounts.component';
import { AccountStartComponent } from './account-start/account-start.component';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountEditComponent } from './account-edit/account-edit.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { AccountItemComponent } from './account-list/account-item/account-item.component';
import { AccountsRoutingModule } from './accounts-routing.module';
import { SharedModule } from '../shared/shared.module';
import { accountReducer } from './store/account.reducers';
import { AccountEffects } from './store/account.effects';

@NgModule({
  declarations: [
    AccountsComponent,
    AccountStartComponent,
    AccountListComponent,
    AccountEditComponent,
    AccountDetailComponent,
    AccountItemComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AccountsRoutingModule,
    SharedModule,
    StoreModule.forFeature('accounts', accountReducer),
    EffectsModule.forFeature([AccountEffects])
  ]
})
export class AccountsModule {}
