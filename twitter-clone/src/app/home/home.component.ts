import { Component, OnInit } from '@angular/core';
import { tweet } from '../shared/models/tweets.model';
import { TweetsService } from '../shared/service/tweets.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public tweets: tweet[] = [];
  constructor(private tweetservice: TweetsService) {

  }
  ngOnInit(): void {
    this.tweets = this.tweetservice.getTweets();
  }

}
