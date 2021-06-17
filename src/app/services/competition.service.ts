import { Injectable } from '@angular/core';
import {Competition} from './competition';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {
  // tslint:disable-next-line:typedef
  public getCompetitions(){
    let competitions: Competition[];

    competitions = [
      new Competition('Singing Competition', 'https://media.istockphoto.com/vectors/hand-holding-retro-mic-microphone-in-front-of-huge-crowd-vector-id546015598?k=6&m=546015598&s=612x612&w=0&h=BdNCzrBTEJ8nMGP0X81LNh5qtFkQgftUfkZRR7OTaMQ=', '2000', 'Member'),
      new Competition('Drawing Competition', 'https://dthezntil550i.cloudfront.net/00resources/images/contests/135/en/contest_banner_set_1820_9ff4267a-1ff5-4ece-aec2-140fad935a68.jpg', '3000', 'Join'),
      new Competition('Design Competition', 'https://img.freepik.com/vecteurs-libre/etapes-concours-medias-sociaux-design-plat_23-2147895144.jpg?size=338&ext=jpg', '367', 'Pending'),
      new Competition('Kigali Got Talent', 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/talent-show-ad-template-design-ca80bb1f0a83709f3e9afed661c0cde9.jpg?ts=1590685030', '5423', 'Member'),
      new Competition('Showcase your drawing', 'https://i.ytimg.com/vi/LBPVJ07Ka68/maxresdefault.jpg', '416', 'Pending'),
      new Competition('Showcase your drawing', 'https://i.ytimg.com/vi/LBPVJ07Ka68/maxresdefault.jpg', '416', 'Pending'),
      new Competition('Showcase your drawing', 'https://i.ytimg.com/vi/LBPVJ07Ka68/maxresdefault.jpg', '416', 'Pending'),
      new Competition('Showcase your drawing', 'https://i.ytimg.com/vi/LBPVJ07Ka68/maxresdefault.jpg', '416', 'Pending'),
      new Competition('Showcase your drawing', 'https://i.ytimg.com/vi/LBPVJ07Ka68/maxresdefault.jpg', '416', 'Pending'),
      new Competition('Showcase your drawing', 'https://i.ytimg.com/vi/LBPVJ07Ka68/maxresdefault.jpg', '416', 'Pending'),
      new Competition('Showcase your drawing', 'https://i.ytimg.com/vi/LBPVJ07Ka68/maxresdefault.jpg', '416', 'Pending'),
      new Competition('Showcase your drawing', 'https://i.ytimg.com/vi/LBPVJ07Ka68/maxresdefault.jpg', '416', 'Pending'),
      new Competition('Showcase your drawing', 'https://i.ytimg.com/vi/LBPVJ07Ka68/maxresdefault.jpg', '416', 'Pending'),
      new Competition('Showcase your drawing', 'https://i.ytimg.com/vi/LBPVJ07Ka68/maxresdefault.jpg', '416', 'Pending'),
      new Competition('Showcase your drawing', 'https://i.ytimg.com/vi/LBPVJ07Ka68/maxresdefault.jpg', '416', 'Pending'),

    ];
    return competitions;
  }
}
