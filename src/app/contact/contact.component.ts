import { Component, inject } from '@angular/core';
import { MessageService } from '../services/message.service';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatSnackBar} from '@angular/material/snack-bar'
import { SnackbarComponent } from '../snackbar/snackbar.component';

 
 

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule,],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  private _fb =  inject(FormBuilder);
  private _snackBar = inject(MatSnackBar)
  userForm = this._fb.group({
    'full_name': ['', Validators.required],
    'email': ['', [Validators.required, Validators.email]],
    'message': ['', Validators.required]
  })
  
  constructor(
    private _message: MessageService
  ) {}

  message = "please fill all the required field"
  contactMe () {
  
    console.log(this.userForm.value);
    if(this.userForm.valid ){
      this._snackBar.openFromComponent( SnackbarComponent, {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      })
    }else{
      this._snackBar.open( this.message)
    }
    
    this._message.messageMe(this.userForm.value).subscribe({
      next: (res) => {
        console.log(res);
       
        
      },
      error: (err) => {
        console.log(err);
       
      }
    })
  }

   
}
