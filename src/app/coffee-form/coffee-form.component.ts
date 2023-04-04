import { Component } from '@angular/core';

@Component({
  selector: 'app-coffee-form',
  templateUrl: './coffee-form.component.html',
  styleUrls: ['./coffee-form.component.scss'],
})
export class CoffeeFormComponent {
  handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    window.alert('Interesse registrado com sucesso!');
  }
}
