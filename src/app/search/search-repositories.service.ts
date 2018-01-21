import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Repository } from './repository';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SearchRepositoriesService {
  public repositories: Repository[];

  constructor(private http: HttpClient) { }

  setRepositories(repositories) {
    this.repositories = repositories;
  }

  getRepositories(searchTerm: string) {
    const url = 'https://api.github.com/search/repositories?q=' + searchTerm;
    return this.http.get(url)
      .map((res:Response) => res)
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
