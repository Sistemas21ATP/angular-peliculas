import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { CineCreacionDTO, CineDTO } from '../cines';
import { MapComponent } from "../../shared/components/map/map.component";
import { Coordenada } from '../../shared/components/map/Coordenada';

@Component({
  selector: 'app-form-cines',
  standalone: true,
  imports: [MatButtonModule, RouterLink, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MapComponent],
  templateUrl: './form-cines.component.html',
  styleUrl: './form-cines.component.css'
})
export class FormCinesComponent implements OnInit{
  ngOnInit(): void {
    if(this.model !== undefined){
      this.form.patchValue(this.model);
      this.startingCords.push({latitud:this.model.latitud, longitud:this.model.longitud});
    }
  }

  @Input()
  model: CineDTO | undefined;

  @Output()
  postForm = new EventEmitter<CineCreacionDTO>()

  startingCords:Coordenada[] = [];

  private formbuilder = inject(FormBuilder);

  form = this.formbuilder.group({
    name : ['', {validators:[Validators.required]}],
    latitud: new FormControl<number | null>(null, [Validators.required]),
    longitud: new FormControl<number | null>(null, [Validators.required]),
  })

  getNameError(){
    let field = this.form.controls.name
    if(field.hasError('required')){
      return "El nombre es requerido";
    }

    return "";
  }

  saveChanges(){
    if(!this.form.valid){
      return;
    }
    const cine = this.form.value as CineCreacionDTO;

    this.postForm.emit(cine);
  }

  selectCord(coordenada: Coordenada){
    this.form.patchValue(coordenada);
  }
}
