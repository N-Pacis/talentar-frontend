import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompetitionsComponent } from './competitions/competitions.component';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';
import { CompetitionItemComponent } from './competition-item/competition-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CompetitionsComponent,
    NavbarComponentComponent,
    CompetitionItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path:'competitions',
        component: CompetitionsComponent
      }
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
