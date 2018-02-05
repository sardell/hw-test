import { TestBed, inject } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';

import { DetailsService } from './details.service';

describe('DetailsService', () => {
  let detailsService: DetailsService;
  let mockHttp;

  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('mockHttp', ['get']);
    detailsService = new DetailsService(mockHttp);
    
    TestBed.configureTestingModule({
      providers: [DetailsService]
    });
  });

  it('should be created', () => {
    expect(DetailsService).toBeTruthy();
  });
  
  describe('getDetails', () => {
    it('should call http.get with the repo name selected', () => {
      mockHttp.get.and.returnValue(Observable.of(false));
      detailsService.getDetails('bootstrap');
      expect(mockHttp.get).toHaveBeenCalledWith('https://api.github.com/repos/bootstrap');
    });
  });

});
