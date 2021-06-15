import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompetitionsComponent } from './components/competitions/competitions.component';
import { NavbarComponentComponent } from './components/navbar-component/navbar-component.component';
import { AllpageComponent } from './components/allpage/allpage.component';
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
    AllpageComponent,
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
        path: 'all',
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
