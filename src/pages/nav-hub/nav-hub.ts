import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the NavHubPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({ name: 'NavHubPage' })
@Component({
  selector: 'page-nav-hub',
  templateUrl: 'nav-hub.html',
})
export class NavHubPage {

  title: string;

  items: Array<{ title: string, img: string, link: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthProvider) {
    this.title = navParams.get('origin');

    this.items = [];

    if (this.title === 'Market') {
      this.items.push({ title: 'MyProducts', img: 'assets/imgs/logo.png', link:'#' })
      this.items.push({ title: 'Favorites', img: 'assets/imgs/logo.png', link:'#' })
      this.items.push({ title: 'Connections', img: 'assets/imgs/logo.png', link:'#' })
    } else if (this.title === 'Connections') {
      this.items.push({ title: 'MyConnections', img: 'assets/imgs/logo.png', link:'#' })
      this.items.push({ title: 'Requests Sent', img: 'assets/imgs/logo.png', link:'#' })
      this.items.push({ title: 'Requests Received', img: 'assets/imgs/logo.png', link:'#' })
    } else if (this.title === 'Orders') {
      this.items.push({ title: 'Drafted Orders', img: 'assets/imgs/logo.png', link:'#' })
      this.items.push({ title: 'Actual Orders', img: 'assets/imgs/logo.png', link:'#' })      
    }
  }

  ionViewDidLoad() {
    return this.auth.isLoggedIn();
  }

  back() {
    this.navCtrl.setRoot('HomePage');
  }

}
