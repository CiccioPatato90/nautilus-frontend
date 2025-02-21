import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {Router} from "@angular/router";
import {AssociationDTO, AssociationSettingsControllerService} from "../../../api";
import {
  AddAssociationModalComponent
} from "../../../components/requests/modals/add-association-modal/add-association-modal.component";

@Component({
  selector: 'app-assoc-mgmt',
  templateUrl: './associations-settings-page.component.html',
  styleUrls: ['./associations-settings-page.component.scss'],
})
export class AssociationSettingsPage implements OnInit {

  associations: AssociationDTO[] = [];

  constructor(private associationControllerService: AssociationSettingsControllerService,
              private modalCtrl: ModalController, private router: Router) {}

  ngOnInit() {
    this.loadAssociations();
  }

  loadAssociations() {
    this.associationControllerService.apiSettingsAssocMgmtListGet().subscribe((data) => {
      console.log("received: ", data)
      this.associations = data;
    });
  }


  addAssociation(data: AssociationDTO) {
    this.associationControllerService.apiSettingsAssocMgmtAddPost(data).subscribe({
      next: (response) => {
        console.log('Added:', response);
        this.loadAssociations();
      },
      error: (err) => {
        console.error('Error:', err);

      }
    });
  }

  private editAssociation(data: AssociationDTO) {
    this.associationControllerService.apiSettingsAssocMgmtEditPost(data).subscribe({
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
      const result: AssociationDTO = data.association;
      this.addAssociation(result);
    }
  }

  async openEditModal(assoc: AssociationDTO) {
    const modal = await this.modalCtrl.create({
      component: AddAssociationModalComponent,
      componentProps: { assoc: assoc, isEdit: true }
    });
    await modal.present();

    const { data } = await modal.onDidDismiss();
    if (data) {
      const result: AssociationDTO = data.association;
      this.editAssociation(result);
    }
  }

  edit(id: number) {
    this.associationControllerService.apiSettingsAssocMgmtGetIdPost(id).subscribe({
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
    this.associationControllerService.apiSettingsAssocMgmtDeleteIdPost(id).subscribe({
      next: (response) => {
        console.log('Deleted:', response);
        this.loadAssociations();
      },
      error: (err) => {
        console.error('Error:', err);

      }
    });
  }


  getImage(assoc: AssociationDTO) {
    if(assoc.img64){
      return `data:image/png;base64,${assoc.img64}`
    }
    else{
      return null;
    }
  }

  goToDetail(id: number) {
    this.router.navigate(['/settings/assoc-mgmt/get', id]);
  }

}
