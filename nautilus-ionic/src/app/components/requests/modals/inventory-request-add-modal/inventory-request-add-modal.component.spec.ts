import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InventoryRequestAddModalComponent } from './inventory-request-add-modal.component';

describe('InventoryRequestAddModalComponent', () => {
  let component: InventoryRequestAddModalComponent;
  let fixture: ComponentFixture<InventoryRequestAddModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryRequestAddModalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InventoryRequestAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
