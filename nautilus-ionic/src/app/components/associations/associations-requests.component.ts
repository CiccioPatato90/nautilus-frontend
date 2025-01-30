import { Component, OnInit } from '@angular/core';
import {Association, AssociationControllerService} from "../../api";
import {ModalController} from "@ionic/angular";
import {AddAssociationModalComponent} from "../modals/add-association-modal/add-association-modal.component";
import axios from "axios";

@Component({
  selector: 'app-associations',
  templateUrl: './associations-requests.component.html',
  styleUrls: ['./associations-requests.component.scss'],
})
export class AssociationsRequestsComponent implements OnInit {
  associations: Association[] = [];

  constructor(private associationControllerService: AssociationControllerService,
              private modalCtrl: ModalController) {}

  ngOnInit() {
    this.loadAssociations();
  }

  loadAssociations() {
    this.associationControllerService.apiAssociationsListGet().subscribe((data) => {
      this.associations = data;
    });
  }


  addAssociation(data: Association) {
    this.associationControllerService.apiAssociationsAddPost(data).subscribe({
      next: (response) => {
        console.log('Added:', response);
        this.loadAssociations();
      },
      error: (err) => {
        console.error('Error:', err);

      }
    });
  }

  private editAssociation(data: Association) {
    this.associationControllerService.apiAssociationsEditPost(data).subscribe({
      next: (response) => {
        console.log('Edited:', response);
        this.loadAssociations();
      },
      error: (err) => {
        console.error('Error:', err);

      }
    });
  }

  async openAddModal() {
    const modal = await this.modalCtrl.create({
      component: AddAssociationModalComponent,
      componentProps: { assoc: {
          name: '',
          address: '',
          email: '',
          phone: '',
          website: '',
          remarks: '',
        }, isEdit: false }
    });
    await modal.present();

    const { data } = await modal.onDidDismiss();
    if (data) {
      const result: Association = data.association;
      this.addAssociation(result);
    }
  }

  async openEditModal(assoc: Association) {
    const modal = await this.modalCtrl.create({
      component: AddAssociationModalComponent,
      componentProps: { assoc: assoc, isEdit: true }
    });
    await modal.present();

    const { data } = await modal.onDidDismiss();
    if (data) {
      const result: Association= data.association;
      this.editAssociation(result);
    }
  }

  edit(id: number) {
    this.associationControllerService.apiAssociationsGetIdPost(id).subscribe({
      next: (assoc) => {
        console.log('get:', assoc);
        this.openEditModal(assoc)
        // Navigate to another page after successful login
      },
      error: (err) => {
        console.error('Error:', err);
      }
    });

  }

  delete(id: number) {
    this.associationControllerService.apiAssociationsDeleteIdPost(id).subscribe({
      next: (response) => {
        console.log('Deleted:', response);
        this.loadAssociations();
      },
      error: (err) => {
        console.error('Error:', err);

      }
    });
  }


  getImage(assoc: Association) {
    if(assoc.img64){
      return `data:image/png;base64,${assoc.img64}`
    }
    else{
      return null;
    }
  }
}
