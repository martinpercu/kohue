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
// import { HistorystripeComponent } from '@users/historystripe/historystripe.component';
import { NotfoundComponent } from '@shared/notfound/notfound.component';
import { MonoproductComponent  } from '@shop/monoproduct/monoproduct.component';
import { LandshopComponent  } from '@shop/landshop/landshop.component';
import { ShippingmethodComponent  } from '@shop/shippingmethod/shippingmethod.component';
import { CardStripeComponent } from '@shop/card-stripe/card-stripe.component';
import { TermsComponent } from '@shared/terms/terms.component';
import { PrivacyComponent } from '@shared/privacy/privacy.component';
import { DirectlinkComponent  } from '@shop/directlink/directlink.component';
import { Directlink2Component  } from '@shop/directlink-2/directlink-2.component';
import { Directlink3Component  } from '@shop/directlink-3/directlink-3.component';
import { ThanksInterestModalComponent  } from '@shop/thanks-interest-modal/thanks-interest-modal.component';
import { StaytunedComponent } from '@shop/staytuned/staytuned.component';
import { ClubmemberModalComponent } from '@shop/clubmember-modal/clubmember-modal.component';

import { AboutComponent } from '@users/about/about.component';
import { OurwinesComponent } from '@users/ourwines/ourwines.component';

import { InfopurchaseComponent } from '@shop/infopurchase/infopurchase.component';

import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';


export const routes: Routes = [
  {
    path: 'terms',
    component: TermsComponent
  },
  {
    path: 'privacy',
    component: PrivacyComponent
  },
  {
    path: 'card',
    component: CardStripeComponent,
    ...canActivate(() => redirectUnauthorizedTo(['join']))
  },
  {
    path: 'ship',
    component: ShippingmethodComponent,
    ...canActivate(() => redirectUnauthorizedTo(['login']))
  },
  {
    path: 'members',
    component: LandshopComponent,
    ...canActivate(() => redirectUnauthorizedTo(['login']))
  },
  {
    path: 'mono',
    component: MonoproductComponent,
    ...canActivate(() => redirectUnauthorizedTo(['login']))
  },
  {
    path: '',
    component: LayoutComponent
  },
  {
    path: 'ourwines',
    component: OurwinesComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'admin',
    component: ClientsFullComponent,
    ...canActivate(() => redirectUnauthorizedTo(['login']))
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
    path: 'ex-join',
    component: JoinmailComponent
  },
  {
    path: 'ex-joinedmaillist',
    component: JoinedmaillistComponent
  },
  {
    path: 'join',
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
    path: 'offering',
    component: DirectlinkComponent,
  },
  {
    path: 'offer1',
    component: Directlink3Component,
  },
  // {
  //   path: 'offering',
  //   component: DirectlinkComponent,
  // },
  {
    path: 'success_offering',
    component: Directlink2Component,
  },
  {
    path: 'test',
    component: NotfoundComponent,
  },
  {
    path: 'thanks',
    component: ThanksInterestModalComponent,
  },
  {
    path: 'stay',
    component: StaytunedComponent,
  },
  {
    path: 'clubmember',
    component: ClubmemberModalComponent,
  },
  {
    path: 'succes',
    component: InfopurchaseComponent,
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
