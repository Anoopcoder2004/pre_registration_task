import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepperModule, MatStepper } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './pre-registration-task.component.html',
  styleUrls: ['./pre-registration-task.component.css']
})
export class PreRegistrationTaskComponent {
  @ViewChild('stepper') stepper!: MatStepper;

  fileName: string = '';
  inputGroups: number[] = [];
  startDate: string='';
  endDate: string='';

  firstStepperForm!: FormGroup;
  secondStepperForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.firstStepperForm = this.fb.group({
      // Visitor Details
      visitorId: ['', Validators.required],
      visitorName: ['', Validators.required],
      visitorNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      organization: ['', Validators.required],
      designation: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      nationality: ['', Validators.required],
      visitorIdProofType: ['', Validators.required],
      visitorIdProofNo: ['', Validators.required],
      visitorType: ['', Validators.required],
      hostDetails: ['', Validators.required],

      // Vehicle Details
      vehicleRegistrationNo: ['', Validators.required],
      vehicleType: ['', Validators.required],
      vehicleDescription: ['']
    });
    this.secondStepperForm = this.fb.group({
  visitPurpose: ['', Validators.required],
  entryTime: ['', Validators.required],
  exitTime: ['', Validators.required]
});

  }

  handleFile(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.fileName = file.name;
    }
  }

  onAddClick() {
    this.inputGroups.push(this.inputGroups.length);
  }

  onDeleteClick(index: number) {
    this.inputGroups.splice(index, 1);
  }

  goToNextStep() {
   
      this.stepper.next();
    
  }

  goToPreviousStep() {
    if (this.stepper) {
      this.stepper.previous();
    }
  }

  onSubmit() {
    if (this.secondStepperForm.valid) {
      console.log('Form Submitted:', this.secondStepperForm.value);
    } else {
      this.secondStepperForm.markAllAsTouched();
    }
  }

showRecurrenceDialog() {
  const dialog = document.getElementById('recurrenceDialog') as HTMLDialogElement;
  if (dialog) {
    dialog.showModal(); // Show the dialog
  }
}

onRepeatChange(event: Event) {
  const selectedValue = (event.target as HTMLSelectElement).value;
  if (selectedValue === 'daily') {
    this.showRecurrenceDialog();
  }
}

closeDialog() {
  const dialog = document.getElementById('recurrenceDialog') as HTMLDialogElement;
  if (dialog) {
    dialog.close();
  }
}

saveDates() {
  console.log("Start Date:", this.startDate);
  console.log("End Date:", this.endDate);
  this.closeDialog();
}

}
