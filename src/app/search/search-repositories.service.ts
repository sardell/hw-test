import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Repository } from './repository';

@Injectable()
export class SearchRepositoriesService {
  public repositories: Repository[];
  private url = 'https://api.github.com/search/repositories?q=';

  constructor(private http: HttpClient) { }
  
  checkRepositories() {
    if (this.repositories !== null) return this.repositories;
  }
  
  setRepositories(repositories) {
    this.repositories = repositories;
  }

  getRepositories(searchTerm: string): Observable<Repository[]> {
    if (!searchTerm) {
      return Observable.throw('invalid');
    }

    return this.http.get<Repository[]>(this.url + searchTerm);
  }

  private handleError(error: Response | any) {
    console.error(error);
    return Observable.throw(error); // <= B
  }

}
