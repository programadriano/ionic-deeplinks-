import { Component } from '@angular/core';
import { Deeplinks } from '@ionic-native/deeplinks/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private deeplinks: Deeplinks) {
    this.deeplinks.route({
      // '/about-us': AboutPage,
      // '/universal-links-test': AboutPage,
      // '/products/:productId': ProductPage
    }).subscribe(match => {
      // match.$route - the route we matched, which is the matched entry from the arguments to route()
      // match.$args - the args passed in the link
      // match.$link - the full link data
      alert(JSON.stringify(match));
      console.log('Successfully matched route', JSON.stringify(match));
    }, nomatch => {
      // nomatch.$link - the full link data
      alert(JSON.stringify(JSON.stringify(nomatch)));
      console.error('Got a deeplink that didn\'t match', JSON.stringify(nomatch));
    });
  }
}
