import { Component } from '@angular/core';
import { district } from 'src/assets/district';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  data=district
}
