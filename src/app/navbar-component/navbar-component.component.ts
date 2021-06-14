import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.css']
})
export class NavbarComponentComponent implements OnInit {

  following:boolean = false;

  changeFollowing(){
      this.following = !this.following;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
