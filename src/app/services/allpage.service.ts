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
      new Allpage('https://i.pinimg.com/originals/26/1f/b9/261fb9e940d99340ef5abbb675975e93.jpg', 'Yvesisite', '20', '10', 'https://www.thestatesman.com/wp-content/uploads/2019/12/snake.jpg'),
      new Allpage('https://ichef.bbci.co.uk/news/976/cpsprodpb/C173/production/_117832594_066549055.jpg', 'Yvesisite', '20', '10', 'https://www.thestatesman.com/wp-content/uploads/2019/12/snake.jpg'),
      new Allpage('https://cdn.mos.cms.futurecdn.net/gvQ9NhQP8wbbM32jXy4V3j-970-80.jpg', 'Yvesisite', '20', '10', 'https://www.thestatesman.com/wp-content/uploads/2019/12/snake.jpg'),

    ];
    return allpage;
  }
}
