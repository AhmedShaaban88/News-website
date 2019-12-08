import {Article} from './article';

export interface Results {
  status: string;
  totalResults: number;
  articles: Array<Article>;
}

