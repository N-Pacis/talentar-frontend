import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompetitionsComponent } from './components/COMPETITION/competitions/competitions.component';
import {CompetitionItemComponent} from './components/COMPETITION/competition-item/competition-item.component';
import { NavbarComponentComponent } from './components/navbar-component/navbar-component.component';
import { AllpageComponent } from './components/allpage/allpage.component';
import { CompetitionStatsPanelComponent } from './components/COMPETITION/competition-stats-panel/competition-stats-panel.component';
import { TopCompetitorsComponent } from './components/COMPETITION/top-competitors/top-competitors.component';

@NgModule({
  declarations: [
    AppComponent,
    CompetitionsComponent,
    NavbarComponentComponent,
    CompetitionItemComponent,
    AllpageComponent,
    CompetitionStatsPanelComponent,
    TopCompetitorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path:'competitions',
        component: CompetitionsComponent
      },
      {
        path:'all',
        component: AllpageComponent
      }
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
