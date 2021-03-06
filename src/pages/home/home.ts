import { Component } from '@angular/core';
import { WheelSelector } from '@ionic-native/wheel-selector';
import { AlertController } from 'ionic-angular';
import { ToastController } 
    from 'ionic-angular/components/toast/toast-controller';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ActionSheetController } from 'ionic-angular';

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

    games = { "mlb": [{title:'soxs yanks', value:1}, 
            {title:'mets nats', value:2}]
            , "nba": [{title:'nicks nets', value:1}, 
            {title:'cavs nats', value:2}]}


    constructor(public navCtrl: NavController, 
        private selector: WheelSelector, 
        public actionSheetController: ActionSheetController,
        public alertController: AlertController,
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

    createList() {
        var what = 'mlb' // this.placeholderWhat
        this.navCtrl.push(WhatsPage, {title: "Matches",
            events: this.games[what]});
    }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'arrow-dropright-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }


}
