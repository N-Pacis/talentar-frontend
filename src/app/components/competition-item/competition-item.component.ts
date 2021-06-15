import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'competition-item',
  templateUrl: './competition-item.component.html',
  styleUrls: ['./competition-item.component.css']
})
export class CompetitionItemComponent implements OnInit {

  @Input('competitionImage') competitionImage:string|undefined;
  @Input('competitionName') competitionName:string|undefined;
  @Input('members') members:string|undefined;
  @Input('status') status:string|undefined;
  svgClass:string = "bi-person-plus-fill";

  changeStatus(status:any){
     if(status.innerText.trim() == 'Join'){
        this.status = 'Pending';
        this.svgClass = "fas fa-paper-plane";
     }
     else if(status.innerText.trim()  == 'Pending'){
       this.status = 'Join';
       this.svgClass= "bi-person-plus-fill";
     }
     else if(status.innerText.trim()  == 'Member'){
       this.status = 'Join';
       this.svgClass= "bi-person-plus-fill";
     }
     else{
       this.status = status.innerText.trim() ;
     }
  }


  constructor() {
  }

  ngOnInit(): void {
    if(this.status== 'Member'){
       this.svgClass= "far fa-check-circle";
    }
    else if(this.status== 'Pending'){
       this.svgClass= "fas fa-paper-plane";
    }
  }

}
