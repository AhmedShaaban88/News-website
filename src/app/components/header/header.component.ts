import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {Router} from '@angular/router';
import {RequestService} from '../../services/request.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private translate: TranslateService, private request: RequestService, private router: Router) { }

  ngOnInit() {
  }
  toggleLang() {
    const currentLang = localStorage.getItem('lang');
    if (currentLang === 'en') {
      localStorage.setItem('lang', 'ar');
      this.translate.use(localStorage.getItem('lang'));

    } else {
      localStorage.setItem('lang', 'en');
      this.translate.use(localStorage.getItem('lang'));
    }
    document.body.setAttribute('lang', localStorage.getItem('lang'));
    if (localStorage.getItem('lang') === 'ar') {
      document.body.setAttribute('dir', 'rtl');
    } else {
      document.body.setAttribute('dir', 'ltr');
    }

  }
  search(keyword) {
    if (keyword !== '') {
      if (this.router.url.indexOf('search-results') <= -1) {
        this.router.navigate([`/search-results`]);
      }
      this.request.keyword.next(keyword);
    }


  }

}
