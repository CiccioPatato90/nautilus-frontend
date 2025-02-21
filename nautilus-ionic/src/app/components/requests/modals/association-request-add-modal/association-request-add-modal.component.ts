import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators} from "@angular/forms";
import {DynamicFormService} from "../../../../utils/dynamic-form.service";
import {ModalController} from "@ionic/angular";
import {AssociationDTO, AssociationRequestDTO, ContactInfo, RequestStatus} from "../../../../api";

@Component({
  selector: 'app-association-request-add-modal',
  templateUrl: './association-request-add-modal.component.html',
  styleUrls: ['./association-request-add-modal.component.scss'],
})
export class AssociationRequestAddModalComponent implements OnInit {

  form!: FormGroup;
  formFields: string[] = [];
  selectedImage: any;
  req: AssociationRequestDTO = {} as AssociationRequestDTO;

  constructor(
    private dynamicFormService: DynamicFormService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.req = {
      associationName:"",
      location: "",
      motivation:""
    } as AssociationRequestDTO

    const customValidators = {
      // email: [Validators.required, Validators.email],
      // phone: [Validators.required, Validators.pattern(/^\d{10}$/)]
      remarks: [Validators.maxLength(1024)]
    };

    this.form = this.dynamicFormService.createFormFromModel(this.req,["email"],
      ["associationConfirmed","attachments","associationSQLId", "status","updatedAt", "createdAt"], customValidators);
    this.formFields = Object.keys(this.form.controls);
  }

  fromFormToModel() {
    return Object.assign({} as AssociationRequestDTO, {
      associationName: this.form.get('associationName')?.value,
      contactInfo: {
        email: this.form.get('email')?.value,
      } as ContactInfo,
      location: this.form.get('location')?.value,
      status: RequestStatus.Pending,
      motivation: this.form.get('motivation')?.value,
    } as AssociationRequestDTO);
  }

  confirm() {
    if (this.form.valid) {
      // const result: AssociationRequestDTO = {
      //   ...this.form.value
      // };

      const result = this.fromFormToModel();

      console.log("requestDTO", result);

      this.modalCtrl.dismiss({
        request: result,
      });

    }else{
      var invalidFields = this.dynamicFormService.getInvalidFields(this.form);
      console.log("errors:", invalidFields);
    }

  }

  isFieldInvalid(field: string): boolean {
    const invalidFields = this.dynamicFormService.getInvalidFields(this.form);
    return invalidFields.includes(field);
  }


  cancel() {
    this.modalCtrl.dismiss();
  }

  extractImage(base64String: string){
    // Remove the prefix (e.g., "data:image/png;base64,")
    this.selectedImage = base64String.split(',')[1]; // Only the Base64 image data
  }

  onImageSelected($event: Event) {
    const file = ($event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result as string;
        this.extractImage(base64String);
      };
      reader.readAsDataURL(file);
    }
  }

}
