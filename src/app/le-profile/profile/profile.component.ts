import {Component, Input, OnInit} from '@angular/core';
import {faRepeat} from '@fortawesome/free-solid-svg-icons';

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

  flipCard() {
    if ((('ontouchstart' in window) ||
      (navigator.maxTouchPoints > 0)
    )) {
      if (this.cardFlipped) {
        document.getElementById("inner")!.style.transform = "rotateY(0deg)"

      } else {
        document.getElementById("inner")!.style.transform = "rotateY(180deg)"
      }
      this.cardFlipped = !this.cardFlipped;
    }
  }
}
