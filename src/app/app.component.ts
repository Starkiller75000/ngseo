import { Component } from '@angular/core';
import {SwPush} from '@angular/service-worker';
import {NewsletterService} from './services/newsletter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngseo';
  readonly VAPID_PUBLIC_KEY = 'BEoESFQSyZ-E2RRG16txCHsFcFWc2Xk7lrIb_pV2fVQlLtWOfSNPCKsorcktRt8Hr-QbyBeMsCO8L-T6femTtcs';

  constructor(private swPush: SwPush, private newletterService: NewsletterService) {
  }

  subscribeToNotifications(): void {
    this.swPush.requestSubscription({serverPublicKey: this.VAPID_PUBLIC_KEY})
      .then(sub => this.newletterService.addPushSubscriber(sub).subscribe())
      .catch(err => console.error('Could not subscribe to notifications', err));
  }
}
