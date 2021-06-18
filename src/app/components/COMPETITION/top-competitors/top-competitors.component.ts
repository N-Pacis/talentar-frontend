import { Component, OnInit } from '@angular/core';
import {TopCompetitor} from "../../../services/topCompetitors";
import {CompetitionStatsService} from "../../../services/competition-stats.service";

@Component({
  selector: 'top-competitors',
  templateUrl: './top-competitors.component.html',
  styleUrls: ['./top-competitors.component.css']
})
export class TopCompetitorsComponent implements OnInit {
  topCompetitors:TopCompetitor[];
  topCompetitorsService:any;

  constructor() {
    this.topCompetitorsService =  new CompetitionStatsService()
    this.topCompetitors = this.topCompetitorsService.getTopCompetitors()
  }

  ngOnInit(): void {
  }

}
