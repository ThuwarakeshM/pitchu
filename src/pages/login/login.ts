import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'LoginPage'
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email: string;
  password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async loginWithFacebook() {
    await this.auth.FacebookLogin();
    await this.navCtrl.setRoot('HomePage')

  }

  async loginWithGoogle() {
    await this.auth.GoogleLogin();
    await this.navCtrl.setRoot('HomePage');
  }

  async loginWithEmail() {
    await this.auth.EmailLogin(this.email, this.password);
    await this.navCtrl.setRoot('HomePage');
  }

  async signUp() {
    await this.auth.EmailSignUp(this.email, this.password);
    await this.navCtrl.setRoot('HomePage');
  }
}
