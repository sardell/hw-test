import { Component, OnInit } from '@angular/core';
import { SearchRepositoriesService } from './search-repositories.service';

import { Repository } from './repository';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ SearchRepositoriesService ]
})
export class SearchComponent implements OnInit {
  txtQuery: string = "";
  repositories: Repository[];
  repo: Repository;
  data: Object;

  constructor(private searchRepoService: SearchRepositoriesService) { }

  ngOnInit() {
  }

  doSearch() {
    if (this.txtQuery != null && this.txtQuery.length > 0) {
      this.searchRepoService.getRepositories(this.txtQuery).subscribe(
        data => this.repositories = data.items
      );
    }
  }

}
