import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

import { SearchRepositoriesService } from './search-repositories.service';

describe('SearchRepositoriesService', () => {
  let repoSearchService: SearchRepositoriesService;
  let mockHttp: HttpTestingController;

  beforeEach(() => {
    // mockHttp = jasmine.createSpyObj('mockHttp', ['get']);
    // repoSearchService = new SearchRepositoriesService(mockHttp);
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientTestingModule],
      providers: [SearchRepositoriesService]
    });
    repoSearchService = TestBed.get(SearchRepositoriesService);
    mockHttp = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    mockHttp.verify();
  });
  
  it('should be created', () => {
    expect(SearchRepositoriesService).toBeTruthy();
  });
  
  describe('getRepositories', () => {
    it('should retrieve repositories from the GitHub API via GET', () => {
      const dummyRepos = [{
        html_url: 'https://github.com/twbs/bootstrap',
        description: 'The most popular HTML, CSS, and JavaScript framework for developing responsive, mobile first projects on the web.',
        stargazers_count: 121435,
        watchers_count: 7267,
        open_issues_count: 295,
        forks_count: 57484,
        full_name: 'twbs/bootstrap',
        subscribers_count: 121435
      }];
      repoSearchService.getRepositories('bootstrap').subscribe(repos => {
        expect(repos.length).toBe(1);
        expect(repos).toEqual(dummyRepos);
      });

      const request = mockHttp.expectOne('https://api.github.com/search/repositories?q=bootstrap');
      expect(request.request.method).toBe('GET');

      request.flush(dummyRepos);
    });
  });

});
