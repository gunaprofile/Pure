import { Component, ViewChild } from '@angular/core';
import { IonicPage, Nav, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the DepositPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-deposit',
  templateUrl: 'deposit.html',
})
export class DepositPage {
  
  @ViewChild('content') nav: Nav;

  constructor(public navCtrl: Nav, public navParams: NavParams, public viewCtrl : ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DepositPage');
  }
  closeModal(){
    this.viewCtrl.dismiss();
  }
  openOrders(){
    this.navCtrl.push("OrdersPage");
  }

}
