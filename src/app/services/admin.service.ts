import { Injectable, inject } from '@angular/core';



import { Client } from '@models/client.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  clients!: Client[];
  clientsToShow!: any[];


  orderFirstName(clients: Client[]) {
    const listOfClientsChanged = clients.sort((a, b) => {
      const firstnameA = a.firstname?.trim().toLowerCase() || ''; // empty string for null/undefined
      const firstnameB = b.firstname?.trim().toLowerCase() || ''; // empty string for null/undefined
      // If both empty, they are considered equal
      if (firstnameA === '' && firstnameB === '') return 0;
      // If only one of them is empty (null/undefined), move it to the end
      if (firstnameA === '') return 1;
      if (firstnameB === '') return -1;
      // Normal comparison for non-empty last names
      return firstnameA.localeCompare(firstnameB);
  });
    return listOfClientsChanged
  }

  orderLastName(clients: Client[]) {
    const listOfClientsChanged = clients.sort((a, b) => {
      const lastnameA = a.lastname?.trim().toLowerCase() || '';
      const lastnameB = b.lastname?.trim().toLowerCase() || '';
      if (lastnameA === '' && lastnameB === '') return 0;
      if (lastnameA === '') return 1;
      if (lastnameB === '') return -1;
      return lastnameA.localeCompare(lastnameB);
  });
    return listOfClientsChanged
  }

  orderEmail(clients: Client[]) {
    const listOfClientsChanged = clients.sort((a: { email: string; }, b: { email: string; }) => {
      const emailA = a.email.trim().toLowerCase();
      const emailB = b.email.trim().toLowerCase();
      if (emailA < emailB) return -1;
      if (emailA > emailB) return 1;
      return 0;
    });
    return listOfClientsChanged
  }

  orderStripeId(clients: Client[]) {
    const listOfClientsChanged = clients.sort((a, b) => {
      const stripeIdA = a.stripeCustomerId?.trim().toLowerCase() || '';
      const stripeIdB = b.stripeCustomerId?.trim().toLowerCase() || '';
      if (stripeIdA === '' && stripeIdB === '') return 0;
      if (stripeIdA === '') return 1;
      if (stripeIdB === '') return -1;
      return stripeIdA.localeCompare(stripeIdB);
  });
    return listOfClientsChanged
  }

  orderSubscription(clients: Client[]) {
    const listOfClientsChanged = clients.sort((a, b) => {
      const subscriptionA = a.subscription?.trim().toLowerCase() || '';
      const subscriptionB = b.subscription?.trim().toLowerCase() || '';
      if (subscriptionA === '' && subscriptionB === '') return 0;
      if (subscriptionA === '') return 1;
      if (subscriptionB === '') return -1;
      return subscriptionA.localeCompare(subscriptionB);
  });
    return listOfClientsChanged
  }


}
