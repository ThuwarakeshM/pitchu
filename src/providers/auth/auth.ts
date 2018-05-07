import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { switchMap, first } from "rxjs/operators";
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { of } from 'rxjs/observable/of';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  user: Observable<any>;

  constructor(public http: HttpClient, afAuth: AngularFireAuth, db: AngularFireDatabase) {
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

}
