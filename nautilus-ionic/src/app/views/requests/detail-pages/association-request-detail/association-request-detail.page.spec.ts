import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AssociationRequestDetailPage } from './association-request-detail.page';

describe('AssociationRequestDetailPage', () => {
  let component: AssociationRequestDetailPage;
  let fixture: ComponentFixture<AssociationRequestDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociationRequestDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
