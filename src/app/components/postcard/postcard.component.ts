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
    @Input('likes') likes: string | undefined;
    // tslint:disable-next-line:no-input-rename
    @Input('unlikes') unlikes: string|undefined;
    // tslint:disable-next-line:no-input-rename
    @Input('postimg') postimg: string|undefined;
    // tslint:disable-next-line:no-input-rename
    @Input('profilepic') profilepic: string|undefined;
    // tslint:disable-next-line:no-input-rename
    // tslint:disable-next-line:no-input-rename
    @Input() isLiked: boolean | undefined;
  // tslint:disable-next-line:typedef
    reaction = {
    // likes: this.likes,
    // likes: this.unlikes,
    likes: 0,
    unlikes: 0,
    isLiked: false,
    isUnliked: false
  };
  constructor() { }

  ngOnInit(): void {

  }

}
