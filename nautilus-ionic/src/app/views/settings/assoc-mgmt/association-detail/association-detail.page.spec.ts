import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AssociationDetailPage } from './association-detail.page';

describe('AssociationDetailPage', () => {
  let component: AssociationDetailPage;
  let fixture: ComponentFixture<AssociationDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociationDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
