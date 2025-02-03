import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemMgmtPage } from './item-mgmt.page';

describe('ItemMgmtPage', () => {
  let component: ItemMgmtPage;
  let fixture: ComponentFixture<ItemMgmtPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemMgmtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
