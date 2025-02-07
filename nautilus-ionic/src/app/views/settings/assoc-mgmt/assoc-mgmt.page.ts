import { Component, OnInit } from '@angular/core';
import {Association, AssociationMgmtControllerService} from "../../../api";
import {ModalController} from "@ionic/angular";
import {Router} from "@angular/router";
import {
  AddAssociationModalComponent
} from "../../../components/modals/add-association-modal/add-association-modal.component";

@Component({
  selector: 'app-assoc-mgmt',
  templateUrl: './assoc-mgmt.page.html',
  styleUrls: ['./assoc-mgmt.page.scss'],
})
export class AssocMgmtPage implements OnInit {

  associations: Association[] = [];

  constructor(private associationControllerService: AssociationMgmtControllerService,
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


  addAssociation(data: Association) {
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

  private editAssociation(data: Association) {
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


  getImage(assoc: Association) {
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
