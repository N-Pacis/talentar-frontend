import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompetitionsComponent } from './components/competitions/competitions.component';
import { NavbarComponentComponent } from './components/navbar-component/navbar-component.component';
import { AllpageComponent } from './components/allpage/allpage.component';

@NgModule({
  declarations: [
    AppComponent,
    CompetitionsComponent,
    NavbarComponentComponent,
    AllpageComponent
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
