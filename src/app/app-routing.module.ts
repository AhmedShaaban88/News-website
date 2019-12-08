import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeadlinesComponent} from './components/headlines/headlines.component';
import {SearchComponent} from './components/search/search.component';
import {NotFoundComponent} from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HeadlinesComponent
  },
  {
    path: 'search-results',
    component: SearchComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
