/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { YourTripsComponent } from './your-trips.component';

describe('YourTripsComponent', () => {
  let component: YourTripsComponent;
  let fixture: ComponentFixture<YourTripsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourTripsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
