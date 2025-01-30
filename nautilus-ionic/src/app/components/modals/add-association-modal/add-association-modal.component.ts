import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {Association} from "../../../api";
import {DynamicFormService} from "../../../utils/dynamic-form.service";
import {FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-association-modal',
  templateUrl: './add-association-modal.component.html',
  styleUrls: ['./add-association-modal.component.scss'],
})
export class AddAssociationModalComponent  implements OnInit {

  @Input() assoc: Association = {} as Association;
  @Input() isEdit: boolean = false;
  associationForm!: FormGroup;
  formFields: string[] = [];
  selectedImage: any;

  constructor(
    private dynamicFormService: DynamicFormService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {

    if(!this.isEdit){
      this.assoc = {
        name: '',
        address: '',
        email: '',
        phone: '',
        website: '',
        remarks: '',
      };
    }else{
      this.selectedImage = `data:image/png;base64,${this.assoc.img64}`
    }

    const customValidators = {
      // email: [Validators.required, Validators.email],
      // phone: [Validators.required, Validators.pattern(/^\d{10}$/)]
      remarks: [Validators.maxLength(1024)]
    };

    this.associationForm = this.dynamicFormService.createFormFromModel(this.assoc, ["img64"], customValidators);
    this.formFields = Object.keys(this.associationForm.controls);
  }

  confirm() {
    if (this.associationForm.valid) {
      const result: Association = {
        ...this.associationForm.value,
        img64: this.selectedImage,
      };

      this.modalCtrl.dismiss({
        association: result,
      });

    }else{
      var invalidFields = this.dynamicFormService.getInvalidFields(this.associationForm);
      console.log("errors:", invalidFields);
    }

  }

  isFieldInvalid(field: string): boolean {
    const invalidFields = this.dynamicFormService.getInvalidFields(this.associationForm);
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
