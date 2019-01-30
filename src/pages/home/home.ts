import { Component } from '@angular/core';
import { WheelSelector } from '@ionic-native/wheel-selector';
import { HttpClient } from '@angular/common/http';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { NavController } from 'ionic-angular';

import { NewpagePage} from '../newpage/newpage';
import { WhatsPage} from '../whats/whats';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    minDate: any
    maxDate: any
    placeholderDate: any
    placeholderWhat: any
    placeholderGame: any
    whatList: any
    gamesList: any
    isenabled: boolean = false;
    
    customDateOptions: any = { min: "1-1-2020", buttons: [] }
    ngOnChanges(changeRecord) {
        alert(this.placeholderDate)
    }
    clearDate() {
        this.placeholderDate = null
    }
    clickMe() {
        alert(this.placeholderDate)
    }
    ngOnInit() {
        console.log('on init');
//        alert(this.name);
    }    
      
    check() {
//        alert(this.placeholderDate + " and " + this.placeholderWhat)
        this.isenabled =
            this.placeholderDate !== undefined &&
            this.placeholderWhat !== undefined

    }
    dateChanged() {
        this.check()
    }

    games = { "mlb": [{text:'soxs yanks', value:1}, 
            {text:'mets nats', value:2}]
            , "nba": [{text:'nicks nets', value:1}, 
            {text:'cavs nats', value:2}]}


    constructor(public navCtrl: NavController, 
        private selector: WheelSelector, 
        private toastCtrl: ToastController, private http: HttpClient) {
        //constructor(public navCtrl: NavController) {  }
        this.minDate = "2019"
        this.maxDate = "2020"

        this.whatList = [{
            name: 'what',
            options: [{ text: 'MLB', value: 'mlb' },
                { text: 'NBA', value: 'nba' }
            ]
        }];
        
        this.setGames([])
    }
    openRemotePicker() {
        this.http.get('https://randomuser.me/api/?results=5')
            .subscribe(res => {
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


    gameChanged() {
        console.log('game');
        this.check()
    }
    openFilters() {
        console.log('crap');
    }
    showProfilePage() {
        this.navCtrl.push(NewpagePage);
        console.log('newpage');
    }
    gameItems = [ { name: 'games', options: [] } ];
    setGames(list) {
//        this.navCtrl.push(WhatsPage);
       this.gameItems[0].options = list
       this.gamesList = this.gameItems   
    }
    
    whatChanged() {
        var what = this.placeholderWhat
        console.log('whats');
        this.setGames(this.games[what])
        this.check()
    }

    createBet() {
        this.navCtrl.push(WhatsPage);
    }

}
