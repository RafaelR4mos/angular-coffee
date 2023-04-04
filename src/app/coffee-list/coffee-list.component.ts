import { Component } from '@angular/core';

import { coffees } from '../coffees';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.scss'],
})
export class CoffeeListComponent {
  coffees = coffees;

  share() {
    window.alert('Café adquirido com sucesso!');
  }
}
