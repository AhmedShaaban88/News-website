import { Component, OnInit, OnDestroy } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';
import {Article} from '../../interfaces/article';
import {RequestService} from '../../services/request.service';
import {Observable, Subscription} from 'rxjs';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['../headlines/headlines.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  articles: Article[];
  error = false;
  loading = true;
  keywords: Subscription;
  noSearch = true;
  constructor(private translate: TranslateService, private title: Title,
              private route: ActivatedRoute, private request: RequestService) {

  }

  ngOnInit() {
    this.translate.get('routes.title').subscribe(value =>  this.title.setTitle(value));
    this.keywords = this.request.keyword.subscribe(value => {
      if (value) {
        this.loadSearchResults(value);
        this.noSearch = false;
      } else {
        this.noSearch = true;
      }
    });

  }
  loadSearchResults(keyword: string) {
    this.loading = true;
    this.error = false;
      this.request.searchArticles(keyword).subscribe(articles => this.articles = articles.articles,
        () => this.error = true,
        () => this.loading = false
      );
    }
    ngOnDestroy() {
    this.keywords.unsubscribe();
    }
}
