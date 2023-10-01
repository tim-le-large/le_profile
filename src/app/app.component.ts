import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  config;
  fullpage_api: any;


  constructor() {

    this.config = {
      licenseKey: 'gplv3-license',
      anchors: ['profile', 'projects', 'playground', 'contact'],
      menu: '#navigation',
      navigation: true,
    };
  }

  ngOnInit() {
  }

  getRef(fullPageRef: any) {
    this.fullpage_api = fullPageRef;
  }

}
