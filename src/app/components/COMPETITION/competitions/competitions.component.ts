import { Component, OnInit } from '@angular/core';
import {Competition} from '../../../services/competition';
import {CompetitionService} from "../../../services/competition.service";

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.css']
})
export class CompetitionsComponent implements OnInit {
  competitions:Competition[]|undefined;
  CompetitionService:any;

  constructor() {
    this.CompetitionService = new CompetitionService();
    this.competitions = this.CompetitionService.getCompetitions();
  }

  ngOnInit(): void {
  }

}
