import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.css']
})
export class NavbarComponentComponent implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  following: boolean = false;

  // tslint:disable-next-line:typedef
  changeFollowing(){
      this.following = !this.following;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
