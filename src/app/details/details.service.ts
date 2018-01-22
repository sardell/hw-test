import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Repository } from '../search/repository';

@Injectable()
export class DetailsService {
  public details: Repository;
  public id: string;
  public fullName: string;

  constructor(private http: HttpClient) { }

  setDetails(repo) {
    this.details = repo;
    this.id = repo.id;
    this.fullName = repo.full_name;
  }

  getDetails(currentID: string) {
    const url = "https://api.github.com/repos/" + currentID;
    return this.http.get(url)
      .map((res:Response) => res)
      .catch(this.handleError);
  }

  getIssues(fullName: string) {
    const url = "https://api.github.com/repos/" + fullName + "/issues";
    return this.http.get(url)
      .map((res:Response) => res)
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    console.error(error);
    return Observable.throw(error);
  }


}
