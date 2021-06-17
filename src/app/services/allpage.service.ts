import { Injectable } from '@angular/core';
import {Allpage} from './allpage';

@Injectable({
  providedIn: 'root'
})
export class AllpageService {
  // tslint:disable-next-line:typedef
  public getAllpage(){
    let allpage: Allpage[];

    allpage = [
      new Allpage('https://i.ytimg.com/vi/LBPVJ07Ka68/maxresdefault.jpg', 'Yves isite', 20, 10, '416'),

    ];
    return allpage;
  }
}
