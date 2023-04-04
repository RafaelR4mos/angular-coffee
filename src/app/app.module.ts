import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';
import { CoffeeFormComponent } from './coffee-form/coffee-form.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{ path: '', component: CoffeeListComponent }]),
  ],
  declarations: [AppComponent, TopBarComponent, CoffeeListComponent, CoffeeFormComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
