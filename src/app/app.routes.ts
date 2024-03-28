import { Routes } from '@angular/router';
import { LayoutComponent } from '@shared/layout/layout.component';
import { ClientsFullComponent } from '@admin/clients-full/clients-full.component'
import { EditClientComponent } from '@admin/edit-client/edit-client.component'
import { SigninComponent } from '@users/signin/signin.component'
import { LoginComponent } from '@users/login/login.component'
import { DashboardComponent } from '@users/dashboard/dashboard.component'
import { EditComponent } from '@users/edit/edit.component'
import { JoinmailComponent } from '@users/joinmail/joinmail.component'
import { JoinedmaillistComponent } from '@users/joinedmaillist/joinedmaillist.component'

import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard'


export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent
  },
  {
    path: 'admin',
    component: ClientsFullComponent,
    // ...canActivate(() => redirectUnauthorizedTo(['login']))
  },
  {
    path: 'admin/:id',
    component: EditClientComponent,
    // ...canActivate(() => redirectUnauthorizedTo(['login']))
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'join',
    component: JoinmailComponent
  },
  {
    path: 'joinedmaillist',
    component: JoinedmaillistComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    ...canActivate(() => redirectUnauthorizedTo(['login']))
  },
  {
    path: 'edit',
    component: EditComponent,
    ...canActivate(() => redirectUnauthorizedTo(['login']))
  },
  // {
  //   path: 'admin',
  //   component: AdminComponent
  // },
  // {
  //   path: '**',
  //   // component: NotFoundComponent
  //   loadComponent: () => import ('@shared/components/notfound/notfound.component').then(compo => compo.NotFoundComponent)
  // },,
  // {
  //   path: '',
  //   canActivate: [authGuard],
  //   loadComponent: () => import('./domains/users/account/account.component').then(compo => compo.AccountComponent),
  // },
  // {
  //   path: 'auth',
  //   children: [
  //     {
  //       path: 'sign-up',
  //       loadComponent: () => import('./domains/test2/signup/signup.component').then(compo => compo.SignupComponent),
  //     },
  //     {
  //       path: 'log-in',
  //       loadComponent: () => import('./domains/test2/login/login.component').then(compo => compo.LoginComponent),
  //     },
  //   ],
  // }
];
