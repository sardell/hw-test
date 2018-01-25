import { TestBed, inject } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

import { SearchRepositoriesService } from './search-repositories.service';

describe('SearchRepositoriesService', () => {
  let repoSearchService: SearchRepositoriesService;
  let mockHttp;

  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('mockHttp', ['get']);
    repoSearchService = new SearchRepositoriesService(mockHttp);
    TestBed.configureTestingModule({
      imports: [FormsModule],
      providers: [SearchRepositoriesService]
    });
  });
  
  it('should be created', () => {
    expect(SearchRepositoriesService).toBeTruthy();
  });
  
  describe('getRepositories', () => {
    it('should call http.get with the search term included', () => {
      mockHttp.get.and.returnValue(Observable.of(false));
      repoSearchService.getRepositories('bootstrap');
      expect(mockHttp.get).toHaveBeenCalledWith('https://api.github.com/search/repositories?q=bootstrap');
    });
  });

});
