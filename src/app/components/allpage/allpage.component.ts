import { Component, OnInit } from '@angular/core';
import { Allpage } from '../../services/allpage';
import { AllpageService } from '../../services/allpage.service';

@Component({
  selector: 'app-allpage',
  templateUrl: './allpage.component.html',
  styleUrls: ['./allpage.component.css']
})
export class AllpageComponent implements OnInit {
  allpage: Allpage[] | undefined;
  AllpageService: any;

  constructor() {
    this.AllpageService = new AllpageService();
    this.allpage = this.AllpageService.getAllpage();
  }

  ngOnInit(): void {
  }

}
