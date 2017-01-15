import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { MenuTestPage } from '../pages/menu-test/menu-test';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  pages: Array<{component: any, title:string, icon:string}>;
  rootPage = HomePage;
  menuTestPage = MenuTestPage;

  constructor(platform: Platform) {

    this.pages = [
      { component: this.rootPage, title: "Home", icon:"home"},
      { component: this.menuTestPage, title:"Menu Teste", icon: "menu"}
  ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page:any) : void {
    this.rootPage = page.component;
  }
}
