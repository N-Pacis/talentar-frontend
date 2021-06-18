export class Allpage{

    constructor(postimg: string, username: string, likes: string, unlikes: string, profilepic: string) {
      this.postimg = postimg;
      this.username = username;
      this.likes = likes;
      this.unlikes = unlikes;
      this.profilepic = profilepic;
    }

    postimg: string;
    username: string;
    likes: string;
    unlikes: string;
    profilepic: string;
  }
