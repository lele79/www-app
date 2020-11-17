import {Component, OnInit} from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Browser } = Plugins;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor() {
    Browser.addListener('browserPageLoaded', () => {
      console.log('pagina caricata')
    });
    Browser.addListener('browserFinished', () => {
      console.log('pagina chiusa')
    })
    Browser.prefetch({
      urls: ['https://platform.sardcoin.eu/prealpha/#/showcase']
    })
  }

  async ngOnInit(): Promise<any> {
    console.log('Browser', Browser)

    const bs = await Browser.open({url: 'https://platform.sardcoin.eu/prealpha/#/showcase'});
    console.log('Browser dopo', Browser)

    console.log('bs', bs)
  }

}
