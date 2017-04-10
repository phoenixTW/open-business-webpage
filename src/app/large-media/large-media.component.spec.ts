/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LargeMediaComponent } from './large-media.component';

describe('LargeMediaComponent', () => {
  let component: LargeMediaComponent;
  let fixture: ComponentFixture<LargeMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LargeMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LargeMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
