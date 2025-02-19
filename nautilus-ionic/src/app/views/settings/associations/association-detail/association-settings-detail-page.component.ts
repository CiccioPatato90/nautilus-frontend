import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {AssociationDTO, AssociationSettingsControllerService} from "../../../../api";

@Component({
  selector: 'app-association-detail',
  templateUrl: './association-settings-detail-page.component.html',
  styleUrls: ['./association-settings-detail-page.component.scss'],
})
export class AssociationSettingsDetailPage implements OnInit {

  associationId: string | null = null;
  association: AssociationDTO = {} as AssociationDTO;
  form!: FormGroup;


  constructor(private associationController: AssociationSettingsControllerService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.associationId = this.activatedRoute.snapshot.paramMap.get('id'); // Get ID from URL

    if (this.associationId !== null){
      this.associationController.apiSettingsAssocMgmtGetIdPost(parseInt(this.associationId)).subscribe(result => {
        this.association = result;
        this.fromModelToForm();
      });

    }

    console.log("Loaded Association ID:", this.associationId);
  }

  fromModelToForm() {
    this.form = new FormGroup({
      name: new FormControl(this.association?.name || ''),
      address: new FormControl(this.association?.address || ''),
      email: new FormControl(this.association?.email || ''),
      phone: new FormControl(this.association?.phone || ''),
      website: new FormControl(this.association?.website || ''),
      remarks: new FormControl(this.association?.remarks || ''),
      img64: new FormControl(this.association?.img64 || ''),
    });

    console.log("form ", this.form, this.association);
  }

  fromFormToModel() {
    return Object.assign({} as AssociationDTO, {
      id: this.association?.id,
      name: this.form.get('name')?.value,
      address: this.form.get('address')?.value,
      email: this.form.get('email')?.value,
      phone: this.form.get('phone')?.value,
      website: this.form.get('website')?.value,
      remarks: this.form.get('remarks')?.value,
      img64: this.form.get('img64')?.value,
    } as AssociationDTO);

  }


  submitForm() {
    if (this.form.valid) {
      const assoc = this.fromFormToModel();  // Update the model with form data
      console.log('Final Model to Submit:', this.association);
      this.associationController.apiSettingsAssocMgmtEditPost(assoc).subscribe(value => {
        console.log("edit correctly!")
        // this.router
      })
    }
  }

}
