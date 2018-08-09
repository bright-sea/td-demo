import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../auth/auth-guard.service';
import { AccountEditComponent } from './account-edit/account-edit.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { AccountStartComponent } from './account-start/account-start.component';
import { AccountsComponent } from './accounts.component';

const accountsRoutes: Routes = [
  { path: '', component: AccountsComponent, children: [
    { path: '', component: AccountStartComponent },
    { path: 'new', component: AccountEditComponent, canActivate: [AuthGuard] },
    { path: ':id', component: AccountDetailComponent },
    { path: ':id/edit', component: AccountEditComponent, canActivate: [AuthGuard] },
  ] },
];

@NgModule({
  imports: [
    RouterModule.forChild(accountsRoutes)
  ],
  exports: [RouterModule],
  providers: [
    AuthGuard
  ]
})
export class AccountsRoutingModule {}
