import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NavHubPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({name: 'NavHubPage'})
@Component({
  selector: 'page-nav-hub',
  templateUrl: 'nav-hub.html',
})
export class NavHubPage {

  title: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = navParams.get('origin');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NavHubPage');
  }

  back() {
    this.navCtrl.setRoot('HomePage');
  }

}
