import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the CirclesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({ name: 'CirclesPage' })
@Component({
  selector: 'page-circles',
  templateUrl: 'circles.html',
})
export class CirclesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthProvider) {
  }

  ionViewDidLoad() {
    return this.auth.isLoggedIn();
  }

}
