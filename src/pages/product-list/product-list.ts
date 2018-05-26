import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the ProductListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({ name: 'ProductListPage' })
@Component({
  selector: 'page-product-list',
  templateUrl: 'product-list.html',
})
export class ProductListPage {

  title: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthProvider) {
    this.title = navParams.get('origin');
  }

  ionViewDidLoad() {
    return this.auth.isLoggedIn();
  }

}
