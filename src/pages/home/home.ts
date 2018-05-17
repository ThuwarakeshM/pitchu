import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage({
  name: 'HomePage'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public auth: AuthProvider) {

  }

  ionViewCanEnter() {
    return this.auth.isLoggedIn();
  }
  
  async logout () {
    await this.auth.logout();
    await this.navCtrl.setRoot('LoginPage');

  }

}
