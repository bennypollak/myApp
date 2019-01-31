import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WhatsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//https://www.joshmorony.com/an-introduction-to-lists-in-ionic-2/
/*
 * events [{title:'soxs yanks', value:1}, 
            {title:'mets nats', value:2}]
 */
@IonicPage()
@Component({
  selector: 'page-whats',
  templateUrl: 'whats.html',
})
export class WhatsPage {
    title: any = "hi"
    events: any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = navParams.get('title');
    this.events = navParams.get('events');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WhatsPage');
  }
bet(event) {
       console.log('bet: '+event.value);
 
}
}
