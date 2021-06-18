import { Component, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent{
  @Input()
  likes!: number;
  @Input() isLiked: boolean | undefined;
  // tslint:disable-next-line:typedef
  onClick(){
    this.likes += (this.isLiked ? -1 : 1);
    this.isLiked = !this.isLiked;
  }

}
