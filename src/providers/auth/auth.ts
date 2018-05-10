import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { switchMap, first } from "rxjs/operators";
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { of } from 'rxjs/observable/of';
import * as firebase from 'firebase';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  user: Observable<any>;

  constructor(public http: HttpClient, public afAuth: AngularFireAuth, public db: AngularFireDatabase) {
    console.log('Hello AuthProvider Provider');

    this.user = afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return db.object(`users/${user.uid}/info`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  async getCurrentUser(): Promise<any> {
    return this.user.pipe(first()).toPromise();
  }


  async FacebookLogin(): Promise<void> {
    try {
      const provider = new firebase.auth.FacebookAuthProvider();
      const credential = await this.afAuth.auth.signInWithPopup(provider);

      return await this.updateUserData(credential.user);
    } catch (err) {
      console.log(err);
    }
  }

  async GoogleLogin(): Promise<void> {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const credential = await this.afAuth.auth.signInWithPopup(provider);

      return await this.updateUserData(credential.user);
    } catch (err) {
      console.log(err);
    }
  }

  async EmailLogin(username: string, password: string): Promise<void> {
    try {
      const credential = await this.afAuth.auth.signInWithEmailAndPassword(username, password);
    } catch (err) {
      console.log(err);
    }
  }

  async EmailSignUp(username: string, password: string): Promise<void> {
    try {
      const credential = await this.afAuth.auth.createUserWithEmailAndPassword(username, password);
      const user = {
        uid: credential.uid,
        email: credential.email,
        displayName: credential.displayName,
        photoURL: credential.photoURL
      }
      return await this.updateUserData(user);
      
    } catch (err) {
      console.log(err);
    }
  }

  private updateUserData(user: any) {
    const data = {
      uid: user.uid,
      email: user.email || null,
      displayName: user.displayName || null,
      photoURL: user.photoURL || "https://goo.gl/7kz9qG"
    };

    return this.db.object(`users/${user.uid}/info`).set(data);
  }

  async logout(): Promise<any> {
    return this.afAuth.auth.signOut();
  }

  async isLoggedIn(): Promise<boolean> {
    const user = await this.getCurrentUser();
    return !!user;
  }

}
