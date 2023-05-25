export class tweet {

    displayname: string;
    username: string;
    img: string;
    content: string;
    likes: number;
    retweet: number;
    comments: tweet[];

    constructor(username: string, displayname: string, img: string, content: string, likes: number, retweet: number) {
        this.username = username;
        this.displayname = displayname;
        this.img = img;
        this.content = content;
        this.likes = likes;
        this.retweet = retweet;
        this.comments = [];
    }

}