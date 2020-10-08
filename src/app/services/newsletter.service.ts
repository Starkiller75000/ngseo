import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  constructor(public http: HttpClient) {}

  addPushSubscriber(sub: any): Observable<any> {
    return this.http.post('https://www.votrebackendnode.com', sub);
  }
}
