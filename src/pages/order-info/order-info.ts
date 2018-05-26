import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { item } from '../../item';

/**
 * Generated class for the OrderInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({ name: 'OrderInfoPage' })
@Component({
  selector: 'page-order-info',
  templateUrl: 'order-info.html',
})
export class OrderInfoPage {

  item: item;

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthProvider) {
    this.item = navParams.get('item');
  }

  ionViewDidLoad() {
    return this.auth.isLoggedIn();
  }

}
