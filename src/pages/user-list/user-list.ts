import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

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

  items: Array<{
    id: string
    name: string,
    img: string,
    desc: string
  }>;

  title:  string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthProvider) {
    this.title = navParams.get('origin');

    this.items = [
      {
        id:'1',
        name:'User1',
        desc:'User1 Desc',
        img:'assets/imgs/logo.png'
      },
      {
        id:'2',
        name:'User2',
        desc:'User2 Desc',
        img:'assets/imgs/logo.png'
      },
      {
        id:'3',
        name:'User3',
        desc:'User3 Desc',
        img:'assets/imgs/logo.png'
      },
      {
        id:'4',
        name:'User4',
        desc:'User4 Desc',
        img:'assets/imgs/logo.png'
      }
    ]
  }

  ionViewDidLoad() {
    return this.auth.isLoggedIn();
  }

}
