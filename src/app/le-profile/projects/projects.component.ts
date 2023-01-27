import {Component, OnInit} from '@angular/core';
import {faDocker} from '@fortawesome/free-brands-svg-icons';
import {faArrowDown91, faArrowsToCircle, faCircle, faGamepad, faMinus} from '@fortawesome/free-solid-svg-icons';
import {Card} from 'src/app/shared/cardgrid/card';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {


  faDocker = faDocker
  cards: Card[] = [
    new Card(faMinus, "Pong", "https://pong.lelar.ge", 'Play against an AI trained with reinforcement-learning.'),
    new Card(faArrowDown91, "Classification", "https://github.com/tim-le-large/number_classification.git", 'Classification of hand written numbers.'),
    new Card(faCircle, "Unit circle", "https://github.com/tim-le-large/nn_circle.git", 'Neuronal network to draw a unit circle.'),
    new Card(faArrowsToCircle, "Spiral problem", "https://github.com/tim-le-large/spiral_problem.git", 'Classification of two spirals.'),
    new Card(faGamepad, "Night Express", "https://night-express.lelar.ge", '"Escape-Room-Game" developed with Unity-3D.'),
    new Card(faDocker, "Dashboard", "dashboard", 'Overview of my docker-hosted services.'),


  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
