import { Component, OnInit } from '@angular/core';
import {TrendingCompetition} from '../../../services/trendingCompetitions';
import {CompetitionStatsService} from "../../../services/competition-stats.service";

@Component({
  selector: 'trending-competitions',
  templateUrl: './trending-competitions.component.html',
  styleUrls: ['./trending-competitions.component.css']
})
export class TrendingCompetitionsComponent implements OnInit {
  trendingCompetitions:TrendingCompetition[];
  trendingCompetitonService:any;

  constructor() {
    this.trendingCompetitonService =  new CompetitionStatsService()
    this.trendingCompetitions = this.trendingCompetitonService.getTrendingCompetitions()
  }

  ngOnInit(): void {
  }

}
