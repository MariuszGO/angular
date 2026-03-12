import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, ValidationErrors, AbstractControl } from '@angular/forms';
import { CommonModule } from '@angular/common'; 


function data_a_pesel(control: AbstractControl): ValidationErrors | null {
  const pesel = control.value;
  const wiek = control.root.get('wiek')?.value; //wiek z formularza
  const dzis = new Date(); 
  let rok_dzis = dzis.getFullYear();
  
  
  console.log(rok_dzis);
    let rokPesel = parseInt(pesel.substring(0, 2), 10);
    let miesiacPesel = parseInt(pesel.substring(2, 4), 10);
  if(miesiacPesel < 13){    
    rokPesel = 1900 + rokPesel;
  }
  else if(miesiacPesel > 20 && miesiacPesel < 33){
    rokPesel = 2000 + rokPesel;
  }

    rok_dzis = rok_dzis - rokPesel;
    const wiekINT = parseInt(wiek, 10);
    console.log(rok_dzis);
    console.log(wiekINT);
    if(rok_dzis == wiekINT){
       console.log("OK");
    return null;
   
    }

  
  return { invalidPeselAge: true };
}


function peselValidator(control: AbstractControl): ValidationErrors | null {
  const pesel = control.value;

  if (!pesel) return null; // Puste pole – niech inne walidatory (np. required) to obsłużą
  if (!/^\d{11}$/.test(pesel)) {
    return { invalidPeselFormat: true }; // nie ma dokładnie 11 cyfr
  }

  const weights = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    sum += weights[i] * parseInt(pesel.charAt(i), 10);
  }

  const controlDigit = (10 - (sum % 10)) % 10;

  if (controlDigit !== parseInt(pesel.charAt(10), 10)) {
    return { invalidPeselChecksum: true };
  }

  return null; // wszystko OK
}


@Component({
  selector: 'app-root', 
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: 'app.html', 
  styleUrls: ['app.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class App implements OnInit {
  osobaForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
      this.osobaForm = this.fb.group({
          imie: ['JAN', [
                      Validators.required, 
                      Validators.minLength(2),
                      Validators.pattern(/^[A-Za-z\u0100-\u017F\s-]+$/),
                      Validators.maxLength(15)
                      
                   
            ]],
             nazwisko: ['Kowalski', [
                      Validators.required, 
                      Validators.minLength(2),
                      Validators.pattern(/^[A-Za-z\u0100-\u017F\s-]+$/) 
            ]],
       wiek: ['26', [Validators.required, Validators.min(18), Validators.max(120), Validators.pattern(/^[0-9]+$/)]],
      
       pesel: ['00210196939', [
      Validators.required,
      peselValidator, 
      data_a_pesel
    ]],      
       email: ['jan.kowlaski@gmail.com', [Validators.required, Validators.email]],
      
        kodPocztowy: ['12-123', [
        Validators.required,
          Validators.pattern(/^\d{2}-\d{3}$/)
      ]],
    });
  }

  onSubmit() {
    if (this.osobaForm.valid) {
      console.log('Form is valid. Data:', this.osobaForm.value);
      alert('Formularz wysłany pomyślnie!');
      this.osobaForm.reset();
      
    } else {
      console.warn('Form is invalid. Please correct the errors.');
      
      this.osobaForm.markAllAsTouched(); 
    }
  }
    get f() {
    return this.osobaForm.controls;
  }
}