import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Repository } from '../search/repository';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DetailsService {
  public details: Repository;
  public id: string;

  constructor(private http: HttpClient) { }

  setDetails(repo) {
    this.details = repo;
    this.id = repo.id
  }

  getDetails(currentID?: string) {
    const url = "https://api.github.com/repositories/" + currentID;
    return this.http.get(url)
      .map((res:Response) => res)
  }

}
