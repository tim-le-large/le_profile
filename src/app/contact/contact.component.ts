import { Component, OnInit, } from '@angular/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Card } from '../cardgrid/card';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  faLinkedin = faLinkedin
  faGithub = faGithub


  cards: Card[] = [
    new Card(faEnvelope, "contact@lelar.ge", "mailto:contact@lelar.ge", ""),
    new Card(faGithub, "GitHub", "https://github.com/tim-le-large", ""),
    new Card(faLinkedin, "LinkedIn", "https://www.linkedin.com/in/tim-le-large", ""),
  ]


  ngOnInit(): void {
  }

}
