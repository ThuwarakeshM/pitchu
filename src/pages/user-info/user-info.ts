import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { item } from '../../item';

/**
 * Generated class for the UserInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({ name: 'UserInfoPage' })
@Component({
  selector: 'page-user-info',
  templateUrl: 'user-info.html',
})
export class UserInfoPage {

  item: item;

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthProvider) {
    this.item = navParams.get('item');

  }

  ionViewDidLoad() {
    return this.auth.isLoggedIn();
  }

  back() {
    this.navCtrl.setRoot('HomePage');
  }

}
