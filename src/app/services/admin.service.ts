import { Injectable, inject } from '@angular/core';



import { Client } from '@models/client.model';

export type SortDir = 'asc' | 'desc';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  clients!: Client[];
  clientsToShow!: any[];

  private sortBy(clients: Client[], getValue: (c: Client) => string, dir: SortDir = 'asc') {
    const withValue = clients.filter(c => getValue(c) !== '');
    const empty = clients.filter(c => getValue(c) === '');
    withValue.sort((a, b) => {
      const cmp = getValue(a).localeCompare(getValue(b));
      return dir === 'asc' ? cmp : -cmp;
    });
    return [...withValue, ...empty];
  }

  orderFirstName(clients: Client[], dir: SortDir = 'asc') {
    return this.sortBy(clients, c => c.firstname?.trim().toLowerCase() || '', dir);
  }

  orderLastName(clients: Client[], dir: SortDir = 'asc') {
    return this.sortBy(clients, c => c.lastname?.trim().toLowerCase() || '', dir);
  }

  orderEmail(clients: Client[], dir: SortDir = 'asc') {
    return this.sortBy(clients, c => c.email?.trim().toLowerCase() || '', dir);
  }

  orderStripeId(clients: Client[], dir: SortDir = 'asc') {
    return this.sortBy(clients, c => c.stripeCustomerId?.trim().toLowerCase() || '', dir);
  }

  orderSubscription(clients: Client[], dir: SortDir = 'asc') {
    return this.sortBy(clients, c => c.subscription?.trim().toLowerCase() || '', dir);
  }


  // orderOptionalText(clients: Client[]) {
  //   const listOfClientsChanged = clients.sort((a, b) => {
  //     const subscriptionA = a.optionalText null?.trim().toLowerCase() || '';
  //     const subscriptionB = b.optionalText null?.trim().toLowerCase() || '';
  //     if (subscriptionA === '' && subscriptionB === '') return 0;
  //     if (subscriptionA === '') return 1;
  //     if (subscriptionB === '') return -1;
  //     return subscriptionA.localeCompare(subscriptionB);
  // });
  //   return listOfClientsChanged
  // }


  orderOptionalText(clients: Client[], dir: SortDir = 'asc') {
    return this.sortBy(clients, c => c.optionalText?.trim().toLowerCase() || '', dir);
  }

  orderCreatedAt(clients: Client[], dir: SortDir = 'asc') {
    return this.sortBy(clients, c => c.createdAt || '', dir);
  }

  orderLastLoginAt(clients: Client[], dir: SortDir = 'asc') {
    return this.sortBy(clients, c => c.lastLoginAt || '', dir);
  }

}
