import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Title} from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private translate: TranslateService, private title: Title) {
    const currentLang = localStorage.getItem('lang');
    if (!currentLang) {
      translate.setDefaultLang('en');
      translate.use('en');
      localStorage.setItem('lang', 'en');
    } else {
      translate.use(currentLang);
    }
    document.body.setAttribute('lang', localStorage.getItem('lang'));
    if (localStorage.getItem('lang') === 'ar') {
      document.body.setAttribute('dir', 'rtl');
    } else {
      document.body.setAttribute('dir', 'ltr');
    }
    translate.get('home.title').subscribe(value =>  this.title.setTitle(value));

  }
}
