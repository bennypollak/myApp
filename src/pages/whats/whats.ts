import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { ToastController } from 'ionic-angular';
//import { ToastController, Toast } from '@ionic/angular';
//import { ToastController, Toast } from 'ionic-angular';
//import { ToastController } from 'ionic-angular';
import { Toast }           from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { HttpClient } from '@angular/common/http';

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
    toast: Toast
    constructor(public navCtrl: NavController, public navParams: NavParams,
        public toastController: ToastController, private http: HttpClient) {
        this.title = navParams.get('title');
        this.events = navParams.get('events');
        this.presentToastWithOptions()
    }
    async presentToastWithOptions() {
        this.toast = await this.toastController.create({
            message: 'Loading...',
            showCloseButton: false,
            position: 'middle',
            duration: 5000,

            closeButtonText: 'Done'
        });
        this.toast.present();
        this.loadEvents() 
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad WhatsPage');
    }
    loadEvents() {
        this.http.get('https://randomuser.me/api/?results=50')
            .subscribe(res => {
                let results = res['results']
                let msg = `Selected ${results[0].email}`
                console.log(msg)
                this.events = results
                this.toast.dismiss()

        });
          
    }
    bet(event) {
        console.log('bet: ' + event.name.first);

    }
}
