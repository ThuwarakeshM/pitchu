import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { item } from '../../item';

/**
 * Generated class for the OrderListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({ name: 'OrderListPage' })
@Component({
  selector: 'page-order-list',
  templateUrl: 'order-list.html',
})
export class OrderListPage {

  title: string;

  item_set: Array<{
    section_title: string,
    folded: boolean;
    items: Array<item>
  }>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthProvider) {
    this.title = navParams.get('origin');
    this.item_set = [
      {
        section_title: 'Aperal',
        folded:true,
        items: [
          {
            id:'1',
            name:'Order1',
            desc: 'Order1 Desc',
            img: 'assets/imgs/logo.png'
          },
          {
            id:'2',
            name:'Order2',
            desc: 'Order2 Desc',
            img: 'assets/imgs/logo.png'
          },
          {
            id:'3',
            name:'Order3',
            desc: 'Order3 Desc',
            img: 'assets/imgs/logo.png'
          }
        ]
      },
      {
        section_title: 'Cosmetics',
        folded: true,
        items: [
          {
            id:'4',
            name:'Order4',
            desc: 'Order4 Desc',
            img: 'assets/imgs/logo.png'
          },
          {
            id:'5',
            name:'Order5',
            desc: 'Order5 Desc',
            img: 'assets/imgs/logo.png'
          },
          {
            id:'6',
            name:'Order6',
            desc: 'Order6 Desc',
            img: 'assets/imgs/logo.png'
          }
        ]
      }
    ];
  }

  ionViewDidLoad() {
    return this.auth.isLoggedIn();
  }

  foldToggler(sec) {
    sec.folded = sec.folded ? false : true;
  }

  goToOrder(item) {
    this.navCtrl.push('OrderInfoPage', {item: item});
  }

}
