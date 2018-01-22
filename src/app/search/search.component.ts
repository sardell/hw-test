import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SearchRepositoriesService } from './search-repositories.service';
import { DetailsService } from '../details/details.service';
import { Repository } from './repository';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {
  private data: Object;
  public txtQuery: string = "";
  public repositories: Repository[];

  constructor(private searchRepoService: SearchRepositoriesService,
              private detailsService: DetailsService,
              private router: Router) { }

  ngOnInit() {
    this.repositories = this.searchRepoService.checkRepositories();
  }

  doSearch() {
    if (this.txtQuery != null && this.txtQuery.length > 1) {
      this.searchRepoService.getRepositories(this.txtQuery).subscribe(
        data => { this.repositories = data.items;
        this.searchRepoService.setRepositories(this.repositories); }
      );
    }
  }

}
