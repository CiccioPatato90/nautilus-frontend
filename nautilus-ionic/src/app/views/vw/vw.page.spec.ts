import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VwPage } from './vw.page';

describe('VwPage', () => {
  let component: VwPage;
  let fixture: ComponentFixture<VwPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VwPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
