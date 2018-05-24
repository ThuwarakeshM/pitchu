import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoProvider } from '../providers/user-info/user-info';

export const firebaseConfig = {
    apiKey: "AIzaSyCvFcbhRfgr-94Gnl3Ck5-dh6oSFd4d7Fc",
    authDomain: "oray-42ecb.firebaseapp.com",
    databaseURL: "https://oray-42ecb.firebaseio.com",
    projectId: "oray-42ecb",
    storageBucket: "oray-42ecb.appspot.com",
    messagingSenderId: "418246721169"
};

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    UserInfoProvider
  ]
})
export class AppModule {}
