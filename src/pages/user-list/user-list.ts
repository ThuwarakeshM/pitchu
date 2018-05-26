import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { item } from '../../item';

/**
 * Generated class for the UserListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({ name: 'UserListPage' })
@Component({
  selector: 'page-user-list',
  templateUrl: 'user-list.html',
})
export class UserListPage {

  item_set: Array<{
    section_title: string,
    folded: boolean;
    items: Array<item>
  }>;

  title:  string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthProvider) {
    this.title = navParams.get('origin');

    this.item_set = [
      {
        section_title: 'Aperal',
        folded: true,
        items: [
          {
            id:'1',
            name:'User1',
            desc: 'User1 Desc',
            img: 'assets/imgs/logo.png'
          },
          {
            id:'2',
            name:'User2',
            desc: 'User2 Desc',
            img: 'assets/imgs/logo.png'
          },
          {
            id:'3',
            name:'User3',
            desc: 'User3 Desc',
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
            name:'User4',
            desc: 'User4 Desc',
            img: 'assets/imgs/logo.png'
          },
          {
            id:'5',
            name:'User5',
            desc: 'User5 Desc',
            img: 'assets/imgs/logo.png'
          },
          {
            id:'6',
            name:'User6',
            desc: 'User6 Desc',
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

  goToUser(item) {
    this.navCtrl.push('UserInfoPage', {item: item});
  }

}
