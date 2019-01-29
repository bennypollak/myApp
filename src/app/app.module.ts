import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

 
import { WheelSelector } from '@ionic-native/wheel-selector';
import { HttpClientModule } from '@angular/common/http';
 
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { NewpagePage } from '../pages/newpage/newpage';
import { WhatsPage } from '../pages/whats/whats';
import { MultiPickerModule } from 'ion-multi-picker';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
, NewpagePage
, WhatsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
    , HttpClientModule
    , MultiPickerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
    , NewpagePage
    , WhatsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WheelSelector
  ]
})
export class AppModule {}
