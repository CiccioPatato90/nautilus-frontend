import { Component, OnInit } from '@angular/core';
import {ProjectRequest, ProjectsControllerService, ProjectStatus} from "../../api";


@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements OnInit {

  protected readonly ProjectStatus = ProjectStatus;
  projectRequestList?: Array<ProjectRequest>;

  constructor(private projectsController: ProjectsControllerService) { }

  ngOnInit() {
    this.projectsController.apiProjectsListPost().subscribe(value => {
      this.projectRequestList = value.projectRequestList;
      console.log("projs", this.projectRequestList);
    })
  }

  onProjectClick(project: ProjectRequest) {

  }

}
