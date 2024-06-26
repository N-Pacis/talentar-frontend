import { Injectable } from '@angular/core';
import {TopCompetitor} from './topCompetitors';
import {TrendingCompetition} from './trendingCompetitions'

@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class CompetitionStatsService {
  public getTopCompetitors(){
    let topCompetitors:TopCompetitor[];

    topCompetitors = [
      new TopCompetitor('https://www.heysaturday.co/wp-content/uploads/2016/11/best-dating-profile-pics-men.jpg','John Smith','8'),
      new TopCompetitor('http://itechway.net/wp-content/uploads/2017/07/iron-man-dp.jpg','Janet Mondragen','6'),
      new TopCompetitor('https://www.imagediamond.com/blog/wp-content/uploads/2020/06/cartoon-boy-images-21.jpg','Tom Parker','5'),
      new TopCompetitor('https://cdn.wallpapersafari.com/42/12/G9xp6d.jpg','Alison Bright','4'),
      new TopCompetitor('https://tricksmaze.org/wp-content/uploads/2017/04/Stylish-Girls-Profile-Pictures-6.jpg','Sasha Dane','4'),
    ]
    return topCompetitors
  }

  public getTrendingCompetitions(){
    let trendingCompetitions:TrendingCompetition[];

    trendingCompetitions = [
      new TrendingCompetition('https://media.istockphoto.com/vectors/hand-holding-retro-mic-microphone-in-front-of-huge-crowd-vector-id546015598?k=6&m=546015598&s=612x612&w=0&h=BdNCzrBTEJ8nMGP0X81LNh5qtFkQgftUfkZRR7OTaMQ=',"Singing Competition","2000"),
      new TrendingCompetition('https://wallpaperaccess.com/full/782147.jpg',"Deejay Competition","1500"),
    ]
    return trendingCompetitions
  }
}
