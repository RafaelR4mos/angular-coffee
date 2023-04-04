import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';
import { CoffeeFormComponent } from './coffee-form/coffee-form.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  imports: [
    MatGridListModule,
    MatButtonModule,
    BrowserModule,
    ReactiveFormsModule,
    MatIconModule,
    RouterModule.forRoot([
      { path: '', component: CoffeeListComponent },
      { path: 'sobre', component: AboutComponent },
      { path: 'contato', component: ContactComponent },
      { path: '**', component: NotFoundComponent },
    ]),
    BrowserAnimationsModule,
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    CoffeeListComponent,
    CoffeeFormComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    NotFoundComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
