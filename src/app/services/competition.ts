export class Competition{

  constructor(competitionName:string,competitionImage:string,members:string,status:string) {
    this.competitionName = competitionName;
    this.competitionImage = competitionImage;
    this.members = members;
    this.status = status;
  }

  competitionName:string;
  competitionImage:string;
  members:string;
  status:string;
}
