import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { ActorCreacionDTO, ActorDTO } from '../actores';
import moment from 'moment';
import { dateIsInTheFuture } from '../../shared/functions/validators';
import { InputImgComponent } from "../../shared/components/input-img/input-img.component";

@Component({
  selector: 'app-form-actores',
  standalone: true,
  imports: [MatButtonModule, RouterLink, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatDatepickerModule, InputImgComponent],
  templateUrl: './form-actores.component.html',
  styleUrl: './form-actores.component.css'
})
export class FormActoresComponent implements OnInit{
  ngOnInit(): void {
    if(this.model !== undefined){
      this.form.patchValue(this.model);
    }
  }

  @Input()
  model: ActorDTO | undefined;

  @Output()
  postForm = new EventEmitter<ActorCreacionDTO>()

  private formbuilder = inject(FormBuilder);

  form = this.formbuilder.group({
    name: ['', {validators: [Validators.required]}],
    birthDate: new FormControl<Date | null>(null, {validators:[Validators.required, dateIsInTheFuture()]}),
    photo: new FormControl<File | string |null>(null)
  });

  saveChanges(){
    if(!this.form.valid){
      return;
    }
    const actor = this.form.value as ActorCreacionDTO;
    actor.birthDate = moment(actor.birthDate).toDate();

    if(typeof actor.photo === "string"){
      actor.photo = undefined;
    }

    this.postForm.emit(actor);
  }

  getBirthDateError(){
    let field = this.form.controls.birthDate
    if(field.hasError('required')){
      return "La fecha es requerida";
    }

    if(field.hasError('dateIsInTheFuture')){
      return field.getError('dateIsInTheFuture').message;
    }
    return "";
  }

  getNameError(){
    let field = this.form.controls.birthDate
    if(field.hasError('required')){
      return "El nombre es requerido";
    }

    return "";
  }

  selectedFile(file:File){
    this.form.controls.photo.setValue(file);
  }
}
