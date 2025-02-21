import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AssociationRequestAddModalComponent } from './association-request-add-modal.component';

describe('AssociationRequestAddModalComponent', () => {
  let component: AssociationRequestAddModalComponent;
  let fixture: ComponentFixture<AssociationRequestAddModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociationRequestAddModalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AssociationRequestAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
