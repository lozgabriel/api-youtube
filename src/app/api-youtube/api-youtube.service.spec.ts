import { TestBed, inject } from '@angular/core/testing';

import { ApiYoutubeService } from './api-youtube.service';

describe('ApiYoutubeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiYoutubeService]
    });
  });

  it('should be created', inject([ApiYoutubeService], (service: ApiYoutubeService) => {
    expect(service).toBeTruthy();
  }));
});
