/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AppDescriptorService } from './app-descriptor.service';

describe('AppDescriptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppDescriptorService]
    });
  });

  it('should ...', inject([AppDescriptorService], (service: AppDescriptorService) => {
    expect(service).toBeTruthy();
  }));
});
