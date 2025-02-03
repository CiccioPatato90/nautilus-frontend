import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AssocMgmtPage } from './assoc-mgmt.page';

describe('AssocMgmtPage', () => {
  let component: AssocMgmtPage;
  let fixture: ComponentFixture<AssocMgmtPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AssocMgmtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
