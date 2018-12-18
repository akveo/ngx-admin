import { Injectable } from '@angular/core';
import { of as observableOf,  Observable } from 'rxjs';

export class Review {
  avatar: string;
  firstName: string;
  lastName: string;
  socialIcon: string;
  review: string;
  link: string;
}

@Injectable()
export class ReviewsService {

  /* tslint:disable:max-line-length */
  private reviews: Review[] = [
    {
      avatar: 'assets/img/avatars/1.png',
      firstName: 'Marcin',
      lastName: 'Masiorski',
      socialIcon: 'facebook',
      review: 'Awesome template! You are doing great job! Regards.',
      link: 'https://www.facebook.com/pg/akveo/reviews/?ref=page_internal',
    },
    {
      avatar: 'assets/img/avatars/2.png',
      firstName: 'Rashid',
      lastName: 'Thompson',
      socialIcon: 'facebook',
      review: 'I just want to say you have the best admin template I have seen so far as a new developer (Trust me I have searched).',
      link: 'https://www.facebook.com/pg/akveo/reviews/?ref=page_internal',
    },
    {
      avatar: 'assets/img/avatars/3.png',
      firstName: 'Yuriy',
      lastName: 'Marshall',
      socialIcon: 'facebook',
      review: 'Thanks for free angular theme! Design and file/system structure is on high level! Love you, Akveo!)',
      link: 'https://www.facebook.com/pg/akveo/reviews/?ref=page_internal',
    },
    {
      avatar: 'assets/img/avatars/4.png',
      firstName: 'Kenneth',
      lastName: 'Reis',
      socialIcon: 'facebook',
      review: 'Nice people working hard for high quality projects. Love you guys!',
      link: 'https://www.facebook.com/pg/akveo/reviews/?ref=page_internal',
    },
    {
      avatar: 'assets/img/avatars/5.png',
      firstName: 'Renato',
      lastName: 'Oliveira Silva',
      socialIcon: 'facebook',
      review: 'Great company and great projects',
      link: 'https://www.facebook.com/pg/akveo/reviews/?ref=page_internal',
    },
    {
      avatar: 'assets/img/avatars/6.png',
      firstName: 'Mohammed',
      lastName: 'Benyakoub',
      socialIcon: 'facebook',
      review: 'That one of the best open source software - Product I have ever seen',
      link: 'https://www.facebook.com/pg/akveo/reviews/?ref=page_internal',
    },
  ];
  /* tslint:enable:max-line-length */

  getReviews(): Observable<Review[]> {
    return observableOf(this.reviews);
  }
}
