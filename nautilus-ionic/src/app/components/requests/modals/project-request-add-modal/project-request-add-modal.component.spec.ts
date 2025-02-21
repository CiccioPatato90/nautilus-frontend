import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProjectRequestAddModalComponent } from './project-request-add-modal.component';

describe('RequestAddModalComponent', () => {
  let component: ProjectRequestAddModalComponent;
  let fixture: ComponentFixture<ProjectRequestAddModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectRequestAddModalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectRequestAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
