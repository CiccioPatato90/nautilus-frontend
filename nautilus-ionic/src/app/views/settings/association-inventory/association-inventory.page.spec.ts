import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AssociationInventoryPage } from './association-inventory.page';

describe('AssociationInventoryPage', () => {
  let component: AssociationInventoryPage;
  let fixture: ComponentFixture<AssociationInventoryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociationInventoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
