import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'unlike',
  templateUrl: './unlike.component.html',
  styleUrls: ['./unlike.component.css']
})
export class UnlikeComponent implements OnInit {
  @Input()
  unlikes!: number;
  @Input() isUnliked: boolean | undefined;
  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  onClick(){
    this.unlikes += (this.isUnliked ? -1 : 1);
    this.isUnliked = !this.isUnliked;
  }

}
