import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from '@firebase/util';
import { switchMap, first } from "rxjs/operators";
import { AngularFireAuth } from 'angularfire2/auth';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  user: any;

  constructor(public http: HttpClient, afAuth: AngularFireAuth) {
    console.log('Hello AuthProvider Provider');

    this.user = afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return user;
        } else {
          return null;
        }
      })
    );
  }

  async getCurrentUser() {
    return this.user;
  }

}
