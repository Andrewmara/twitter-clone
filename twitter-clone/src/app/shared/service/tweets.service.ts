import { Injectable } from '@angular/core';
import { tweet } from '../models/tweets.model';

@Injectable({
  providedIn: 'root'
})
export class TweetsService {

  tweets: tweet[] = [
    new tweet("r0tsana", "r0t", "img", "ciaooo", 143, 23),
    new tweet("r0tsana", "r0t", "img", "ciaooo", 143, 23),
    new tweet("r0tsana", "r0t", "img", "ciaooo", 143, 23),
    new tweet("r0tsana", "r0t", "img", "ciaooo", 143, 23),
    new tweet("r0tsana", "r0t", "img", "ciaooo", 143, 23),
    new tweet("r0tsana", "r0t", "img", "ciaooo", 143, 23),
    new tweet("r0tsana", "r0t", "img", "ciaooo", 143, 23),
    new tweet("r0tsana", "r0t", "img", "ciaooo", 143, 23),
    new tweet("r0tsana", "r0t", "img", "ciaooo", 143, 23),
    new tweet("r0tsana", "r0t", "img", "ciaooo", 143, 23),
    new tweet("r0tsana", "r0t", "img", "ciaooo", 143, 23),
    new tweet("r0tsana", "r0t", "img", "ciaooo", 143, 23),
  ]
  constructor() { }

  getTweets(): tweet[] {
    return this.tweets
  }
}
