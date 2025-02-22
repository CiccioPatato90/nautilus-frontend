import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InventoryRequestDetailPage } from './inventory-request-detail.page';

describe('InventoryRequestDetailPage', () => {
  let component: InventoryRequestDetailPage;
  let fixture: ComponentFixture<InventoryRequestDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryRequestDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
