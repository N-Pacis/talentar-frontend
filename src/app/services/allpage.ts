export class Allpage{

    constructor(postimg: string, username: string, likes: number, unlikes: number, profilepic: string) {
      this.postimg = postimg;
      this.username = username;
      this.likes = likes;
      this.unlikes = unlikes;
      this.profilepic = profilepic;
    }

    postimg: string;
    username: string;
    likes: number;
    unlikes: number;
    profilepic: string;
  }
