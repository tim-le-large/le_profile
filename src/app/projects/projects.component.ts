import { Component, OnInit } from '@angular/core';
import { faDocker } from '@fortawesome/free-brands-svg-icons';
import { faArrowDown91, faArrowsToCircle, faCircle, faGamepad, faMinus, faFan } from '@fortawesome/free-solid-svg-icons';
import { Card } from 'src/app/cardgrid/card';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {


  faDocker = faDocker
  cards: Card[] = [
    new Card(faGamepad, "Night Express", "https://night-express.lelar.ge", '"Escape-Room-Game" developed with Unity-3D.'),
    new Card(faMinus, "Pong", "https://pong.lelar.ge", 'Can you win against an AI?'),
    new Card(faFan, "Flower Classification", "https://github.com/tim-le-large/le_decision_iris", 'Classification of three iris species using a decision tree.'),
    // new Card(faDocker, "Dashboard", "dashboard", 'Overview of my docker-hosted services.'),

  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
