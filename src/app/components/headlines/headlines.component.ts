import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Title} from '@angular/platform-browser';
import {RequestService} from '../../services/request.service';

import {Article} from '../../interfaces/article';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.scss']
})
export class HeadlinesComponent implements OnInit {
  articles: Article[];
  error = false;
  loading = true;
  constructor(private translate: TranslateService,  private title: Title, private request: RequestService) { }

  ngOnInit() {
    const currentLang = this.translate.currentLang === 'ar' ? 'ar' : 'us';
    this.loadAllArticles(currentLang);
  }
  loadAllArticles(currentLang) {
    this.request.latestHeadlines(currentLang).subscribe(headlines => this.articles = headlines.articles,
      () => this.error = true,
      () => this.loading = false
    );
  }

}
