import { Component, Input, OnInit } from '@angular/core';
import { Card } from './card';

@Component({
  selector: 'app-cardgrid',
  templateUrl: './cardgrid.component.html',
  styleUrls: ['./cardgrid.component.scss']
})
export class CardgridComponent implements OnInit {
  @Input() cards!: Card[];

  ngOnInit(): void {

  }


}
