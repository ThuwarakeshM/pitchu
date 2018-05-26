import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { item } from '../../item';

/**
 * Generated class for the ProductInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({ name: 'ProductInfoPage' })
@Component({
  selector: 'page-product-info',
  templateUrl: 'product-info.html',
})
export class ProductInfoPage {

  item: item;

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthProvider) {
    this.item = navParams.get('item');
  }

  ionViewDidLoad() {
    return this.auth.isLoggedIn();
  }

}
