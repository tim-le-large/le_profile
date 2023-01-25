import {Component, OnInit} from '@angular/core';
import {Card} from "../shared/cardgrid/card";
import {faCloud, faKey} from "@fortawesome/free-solid-svg-icons";
import {faGitAlt} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-le-dashboard',
  templateUrl: './le-dashboard.component.html',
  styleUrls: ['./le-dashboard.component.scss']
})
export class LeDashboardComponent implements OnInit {

  config;
  fullpage_api: any;
  faGitAlt = faGitAlt;
  cards: Card[] = [
    new Card(faCloud, "le nextcloud", "https://cloud.lelar.ge", ""),
    new Card(faGitAlt, "le git", "https://git.lelar.ge", ""),
    new Card(faKey, "le bitwarden", "https://bitwarden.lelar.ge", ""),
  ]

  constructor() {

    this.config = {
      licenseKey: 'gplv3-license',
      anchors: ['dashboard'],
      menu: '#navigation'
    };
  }

  getRef(fullPageRef: any) {
    this.fullpage_api = fullPageRef;
  }

  ngOnInit(): void {
  }

}
