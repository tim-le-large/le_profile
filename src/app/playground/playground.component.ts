import { Component, OnInit } from '@angular/core';
import { faDocker } from '@fortawesome/free-brands-svg-icons';
import { faArrowDown91, faArrowsToCircle, faCircle, faGamepad, faMinus } from '@fortawesome/free-solid-svg-icons';
import { Card } from 'src/app/cardgrid/card';


@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {


  faDocker = faDocker
  cards: Card[] = [
    new Card(faMinus, "Pong", "https://pong.lelar.ge", 'Can you win against an AI?'),
    new Card(faGamepad, "Night Express", "https://night-express.lelar.ge", '"Escape-Room-Game" developed with Unity-3D.'),
    new Card(faArrowDown91, "Flappy Bird", "https://flappy.lelar.ge", ''),
    new Card(faCircle, "Pacman", "https://pacman.lelar.ge", ''),



  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
