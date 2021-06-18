export class TrendingCompetition{

  constructor(competitionImage:string,competitionName:string,competitionMembers:string,) {
    this.competitionName = competitionName;
    this.competitionImage = competitionImage;
    this.competitionMembers = competitionMembers;
  }

  competitionName:string;
  competitionImage:string;
  competitionMembers:string;
}
