import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompetitionsComponent } from './components/COMPETITION/competitions/competitions.component';
import {CompetitionItemComponent} from './components/COMPETITION/competition-item/competition-item.component';
import { NavbarComponentComponent } from './components/navbar-component/navbar-component.component';
import { AllpageComponent } from './components/allpage/allpage.component';
<<<<<<< HEAD
import { CompetitionStatsPanelComponent } from './components/COMPETITION/competition-stats-panel/competition-stats-panel.component';
import { TopCompetitorsComponent } from './components/COMPETITION/top-competitors/top-competitors.component';
=======
>>>>>>> 7e3ef624b428f7e39ae4bdc147e45cfd56e8c1be
import { PhotographyComponent } from './components/photography/photography.component';
import { ArtComponent } from './components/art/art.component';
import { DesignComponent } from './components/design/design.component';
import { SingingComponent } from './components/singing/singing.component';
import { PostcardComponent } from './components/postcard/postcard.component';

@NgModule({
  declarations: [
    AppComponent,
    CompetitionsComponent,
    NavbarComponentComponent,
<<<<<<< HEAD
    CompetitionItemComponent,
    AllpageComponent,
    CompetitionStatsPanelComponent,
    TopCompetitorsComponent,
=======
    AllpageComponent,
>>>>>>> 7e3ef624b428f7e39ae4bdc147e45cfd56e8c1be
    PhotographyComponent,
    ArtComponent,
    DesignComponent,
    SingingComponent,
    PostcardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: 'competitions',
        component: CompetitionsComponent
      },
      {
<<<<<<< HEAD
        path:'all',
=======
        path: 'all',
>>>>>>> 7e3ef624b428f7e39ae4bdc147e45cfd56e8c1be
        component: AllpageComponent
      },
      {
        path: 'photography',
        component: PhotographyComponent
      },
      {
        path: 'art',
        component: ArtComponent
      },
      {
        path: 'design',
        component: DesignComponent
      },
      {
        path: 'singing',
        component: SingingComponent
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
