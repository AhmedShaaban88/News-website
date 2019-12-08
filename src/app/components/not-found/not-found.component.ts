import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Title} from '@angular/platform-browser';
@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html'
})
export class NotFoundComponent implements OnInit {

  constructor(private translate: TranslateService,  private title: Title) { }

  ngOnInit() {
    this.translate.get('routes.not-found.title').subscribe(value =>  this.title.setTitle(value));

  }

}
