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

  items: Array<{
    id: string
    name: string,
    img: string,
    desc: string
  }>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthProvider) {
    this.title = navParams.get('origin');

    // The below is just a sample for dev purposes
    // This should be removed once the services are risen
    this.items = [
      {
        id:'1',
        name:'Product1',
        desc:'Product1 Desc',
        img:'assets/imgs/logo.png'
      },
      {
        id:'2',
        name:'Product2',
        desc:'Product2 Desc',
        img:'assets/imgs/logo.png'
      },
      {
        id:'3',
        name:'Product3',
        desc:'Product3 Desc',
        img:'assets/imgs/logo.png'
      },
      {
        id:'4',
        name:'Product4',
        desc:'Product4 Desc',
        img:'assets/imgs/logo.png'
      }
    ]
  }

  ionViewDidLoad() {
    return this.auth.isLoggedIn();
  }

}
