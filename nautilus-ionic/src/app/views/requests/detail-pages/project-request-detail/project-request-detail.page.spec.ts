import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectRequestDetailPage } from './project-request-detail.page';

describe('ProjectRequestDetailPage', () => {
  let component: ProjectRequestDetailPage;
  let fixture: ComponentFixture<ProjectRequestDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectRequestDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
