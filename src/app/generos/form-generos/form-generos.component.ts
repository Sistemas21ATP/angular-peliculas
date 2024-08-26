import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { firstUppercase } from '../../shared/functions/validators';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { GeneroCreacionDTO, GeneroDto } from '../generos';

@Component({
  selector: 'app-form-generos',
  standalone: true,
  imports: [MatButtonModule, RouterLink, MatFormFieldModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './form-generos.component.html',
  styleUrl: './form-generos.component.css'
})
export class FormGenerosComponent implements OnInit {
  ngOnInit(): void {
    if(this.model !== undefined){
      this.form.patchValue(this.model);
    }
  }

  @Input()
  model: GeneroDto | undefined;

  @Output()
  formulario = new EventEmitter<GeneroCreacionDTO>();

  private formbuilder = inject(FormBuilder);
  
  form = this.formbuilder.group({
    name:['', {validators:[Validators.required, firstUppercase()]}]
  });


  nameError():string{
    let nombre = this.form.controls.name;
    if(nombre.hasError('required')){
      return "Nombre es requerido";
    }
    if(nombre.hasError('firstUppercase')){
      return nombre.getError('firstUppercase').message;
    }
    return "";
  }

  saveInfo(){
    if(!this.form.valid){
      return;
    }
    const genero = this.form.value as GeneroCreacionDTO;
    this.formulario.emit(genero);
  }

}
