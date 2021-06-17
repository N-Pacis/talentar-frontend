import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'postcard',
  templateUrl: './postcard.component.html',
  styleUrls: ['./postcard.component.css']
})
export class PostcardComponent implements OnInit {
    // tslint:disable-next-line:no-input-rename
    @Input('username') username: string|undefined;
    // tslint:disable-next-line:no-input-rename
    @Input('likes') likes: number|undefined;
    // tslint:disable-next-line:no-input-rename
    @Input('unlikes') unlikes: number|undefined;
    // tslint:disable-next-line:no-input-rename
    @Input('postimg') postimg: string|undefined;
    // tslint:disable-next-line:no-input-rename
    @Input('profilepic') profilepic: string|undefined;
  constructor() { }

  ngOnInit(): void {

  }

}
