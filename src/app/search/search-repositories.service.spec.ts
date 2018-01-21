import { TestBed, inject } from '@angular/core/testing';

import { SearchRepositoriesService } from './search-repositories.service';

describe('SearchRepositoriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchRepositoriesService]
    });
  });

  it('should be created', inject([SearchRepositoriesService], (service: SearchRepositoriesService) => {
    expect(service).toBeTruthy();
  }));
});
