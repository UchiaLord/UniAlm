import { TestBed } from '@angular/core/testing';

import { SiteContent } from './site-content';

describe('SiteContent', () => {
  let service: SiteContent;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiteContent);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
