import { Routes } from '@angular/router';
import { LayoutComponent } from '@shared/layout/layout.component';
import { ClientsFullComponent } from '@admin/clients-full/clients-full.component';
import { EditClientComponent } from '@admin/edit-client/edit-client.component';
import { UsersFullComponent } from '@admin/users-full/users-full.component';
import { EditUserComponent } from '@admin/edit-user/edit-user.component';
import { AcquireComponent } from '@users/acquire/acquire.component';
import { SigninComponent } from '@users/signin/signin.component';
import { LoginComponent } from '@users/login/login.component';
import { DashboardComponent } from '@users/dashboard/dashboard.component';
import { EditComponent } from '@users/edit/edit.component';
import { JoinmailComponent } from '@users/joinmail/joinmail.component';
import { JoinedmaillistComponent } from '@users/joinedmaillist/joinedmaillist.component';
import { NotfoundComponent } from '@shared/notfound/notfound.component';
import { MonoproductComponent  } from '@shop/monoproduct/monoproduct.component';
import { LandshopComponent  } from '@shop/landshop/landshop.component';
import { ShippingmethodComponent  } from '@shop/shippingmethod/shippingmethod.component';

import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard'
import { CardStripeComponent } from '@shop/card-stripe/card-stripe.component';


export const routes: Routes = [
  {
    path: 'card',
    component: CardStripeComponent,
    ...canActivate(() => redirectUnauthorizedTo(['acquire']))
  },
  {
    path: 'ship',
    component: ShippingmethodComponent,
    ...canActivate(() => redirectUnauthorizedTo(['acquire']))
  },
  {
    path: 'members',
    component: LandshopComponent,
    ...canActivate(() => redirectUnauthorizedTo(['acquire']))
  },
  {
    path: 'mono',
    component: MonoproductComponent,
    ...canActivate(() => redirectUnauthorizedTo(['acquire']))
  },
  {
    path: 'test',
    component: LayoutComponent
  },
  {
    path: 'admin',
    component: ClientsFullComponent,
    // ...canActivate(() => redirectUnauthorizedTo(['login']))
  },
  {
    path: 'joinedadmin',
    component: ClientsFullComponent,
    // ...canActivate(() => redirectUnauthorizedTo(['login']))
  },
  {
    path: 'joinedadmin/:id',
    component: EditClientComponent,
    // ...canActivate(() => redirectUnauthorizedTo(['login']))
  },
  {
    path: 'usersadmin',
    component: UsersFullComponent,
    // ...canActivate(() => redirectUnauthorizedTo(['login']))
  },
  {
    path: 'usersadmin/:id',
    component: EditUserComponent,
    // ...canActivate(() => redirectUnauthorizedTo(['login']))
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
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'acquire',
    component: AcquireComponent
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
  {
    path: '',
    component: NotfoundComponent,
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
