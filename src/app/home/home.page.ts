import { Component } from '@angular/core';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  browser: any;
  constructor(private iab: InAppBrowser) {
    //this.browser = this.iab.create('http://accion.coop', '_self');
    
  }


  verPagina(){
  }



}
