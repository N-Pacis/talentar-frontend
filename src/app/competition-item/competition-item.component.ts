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


  changeStatus(status:any){
    console.log(status.innerText);
     if(status.innerText == 'Join'){
        this.status = 'Pending';
     }
     else if(status.innerText == 'Pending'){
       this.status = 'Join';
     }
     else if(status.innerText == 'Member'){
       this.status = 'Join';
     }
     else{
       this.status = 'Text';
     }
  }


  constructor() { }

  ngOnInit(): void {
  }

}
