import { Injectable, inject } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc, getDoc, updateDoc, setDoc } from '@angular/fire/firestore';
import { Client } from '@models/client.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private firestore: Firestore = inject(Firestore);

  constructor() { }

  addClient(client: Client) {
    const clientsRef = collection(this.firestore, 'clientsjoinedlist');
    return addDoc(clientsRef, client)
  };

  getClients(): Observable<Client[]> {
    const clientsRef = collection(this.firestore, 'clientsjoinedlist');
    return collectionData(clientsRef, { idField: 'clientUID' }) as Observable<Client[]>
  };

  async getOneClient(clientId: string) {
    // const clientDocRef = doc(this.firestore, `clientsjoinedlist/${clientId}`);
    const clientDocRef = doc(this.firestore, 'clientsjoinedlist', clientId);
    console.log(clientDocRef);
    const client = (await getDoc(clientDocRef)).data();
    console.log(client);
    return client as Client
  };

  updateOneClient(client: any, clientId: string) {
    const clientDocRef = doc(this.firestore, 'clientsjoinedlist', clientId);
    updateDoc(clientDocRef, client)
      .then(() => {
        console.log('Client updated');
        alert('CLient Updated');
      })
      .catch((error) => {
        console.log(error);
      })
  };

  deleteClient(client: Client) {
    const clientDocRef = doc(this.firestore, `clientsjoinedlist/${client.clientUID}`);
    return deleteDoc(clientDocRef)
  };




  addUserWithId(user: Client, userId: any) {
    const usersRef = collection(this.firestore, 'users');
    return setDoc(doc(usersRef, userId), user)
  }

  getUsers(): Observable<Client[]> {
    const usersRef = collection(this.firestore, 'users');
    return collectionData(usersRef, { idField: 'clientUID' }) as Observable<Client[]>
  };

  async getOneUser(userId: string) {
    // const clientDocRef = doc(this.firestore, `users/${clientId}`);
    const userDocRef = doc(this.firestore, 'users', userId);
    console.log(userDocRef);
    const user = (await getDoc(userDocRef)).data();
    console.log(user);
    return user as Client
  };

  updateOneUser(user: any, userId: string) {
    const userDocRef = doc(this.firestore, 'users', userId);
    updateDoc(userDocRef, user)
      .then(() => {
        console.log('User updated');
        alert('User Updated');
      })
      .catch((error) => {
        console.log(error);
      })
  };

  deleteUser(user: Client) {
    const userDocRef = doc(this.firestore, `users/${user.clientUID}`);
    return deleteDoc(userDocRef)
  };

  // // add student
  // addStudent(student : Student) {
  //   student.id = this.afs.createId();
  //   return this.afs.collection('/Students').add(student);
  // }

  // // get all students
  // getAllStudents() {
  //   return this.afs.collection('/Students').snapshotChanges();
  // }

  // // delete student
  // deleteStudent(student : Student) {
  //    this.afs.doc('/Students/'+student.id).delete();
  // }

  // // update student
  // updateStudent(student : Student) {
  //   this.deleteStudent(student);
  //   this.addStudent(student);
  // }




}
