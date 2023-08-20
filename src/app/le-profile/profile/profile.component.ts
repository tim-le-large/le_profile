import { Component, Input, OnInit } from '@angular/core';
import { faRepeat } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input() showPrivateSearch!: boolean;
  faRepeat = faRepeat;
  cardFlipped = false;

  constructor() {
  }

  ngOnInit(): void {
    if (!this.showPrivateSearch)
      document.getElementById("duckduckgo")!.style.display = "None";

    window.onload = function () {
      document.getElementById("duckduckgo-input")!.focus({
        preventScroll: true
      });
    }
  }

}
