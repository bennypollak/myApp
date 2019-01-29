import { Component } from '@angular/core';
import { WheelSelector } from '@ionic-native/wheel-selector';
import { HttpClient } from '@angular/common/http';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';

import { NavController } from 'ionic-angular';
import {NewpagePage} from '../newpage/newpage';
import {WhatsPage} from '../whats/whats';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {  year: any
  placeholderDate: any
  customOptions: any = {
   min:"2019",  
   max:"12-31-2019",  
    buttons: [{
      text: 'Clear',
      handler: () => {
        this.placeholderDate = null;
      }
    }]
  } 
  
   clearDate() {
    this.placeholderDate = null
  }
  clickMe() {
    alert(this.placeholderDate)

  }
  
  
  dummyJson = {
    days: [
      {description: 'Mon'},
      {description: 'Tue'},
      {description: 'Wed'},
      {description: 'Thu'},
      {description: 'Fri'}
    ],
    people: [
      {description: 'Mike'},
      {description: 'Max'},
      {description: 'Adam'},
      {description: 'Brandy'},
      {description: 'Ben'}
    ]
  }
 constructor(public navCtrl: NavController, private selector: WheelSelector, private toastCtrl: ToastController, private http: HttpClient) { 
 //constructor(public navCtrl: NavController) {  }

  this.simpleColumns = [
    {
      name: 'what',
      options: [
        { text: 'MLB', value: 'MLB' },
        { text: 'NBA', value: 'NBA' }
      ]
    }
  ];
 }
openRemotePicker() {
  this.http.get('https://randomuser.me/api/?results=5').subscribe(res => {
    this.selector.show({
      title: 'Select Your Contact',
      items: [
        res['results']
      ],
      displayKey: 'email'
    }).then(
      result => {
        let msg = `Selected ${result[0].email}`;
        let toast = this.toastCtrl.create({
          message: msg,
          duration: 4000
        });
        toast.present();
      },
      err => console.log('Error: ', err)
      );
 
  });
}

  openPicker() {
    this.selector.show({
      title: 'Select Your Contact',
      items: [
        this.dummyJson.days,
        this.dummyJson.people
      ],
      positiveButtonText: 'Choose',
      negativeButtonText: 'Nah',
      defaultItems: [ 
        { index: 0, value: this.dummyJson.days[4].description },
        { index: 1, value: this.dummyJson.people[1].description}
      ]
    }).then(
      result => {
        let msg = `Selected ${result[0].description} with ${result[1].description}`;
        let toast = this.toastCtrl.create({
          message: msg,
          duration: 4000
        });
        toast.present();
      },
      err => console.log('Error: ', err)
      );
  }
  openFilters() {
        console.log('crap');
    }
    showProfilePage() {
        this.navCtrl.push(NewpagePage);
            console.log('newpage');
    }
    showWhatsPage() {
        this.navCtrl.push(WhatsPage);
            console.log('whats');
    }



}
