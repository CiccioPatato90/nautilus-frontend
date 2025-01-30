import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RequestPage } from './request-page.component';

describe('HomePage', () => {
  let component: RequestPage;
  let fixture: ComponentFixture<RequestPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
