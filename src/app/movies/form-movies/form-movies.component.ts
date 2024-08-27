import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { InputImgComponent } from '../../shared/components/input-img/input-img.component';
import { PeliculaCreacionDTO, PeliculaDTO } from '../peliculas';
import moment from 'moment';

@Component({
  selector: 'app-form-movies',
  standalone: true,
  imports: [MatButtonModule, RouterLink, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatDatepickerModule, InputImgComponent],
  templateUrl: './form-movies.component.html',
  styleUrl: './form-movies.component.css'
})
export class FormMoviesComponent implements OnInit {
  ngOnInit(): void {
    if(this.model !== undefined){
      this.form.patchValue(this.model);
    }
  }

  @Input()
  model: PeliculaDTO | undefined;

  @Output()
  postForm = new EventEmitter<PeliculaCreacionDTO>()

  private formbuilder = inject(FormBuilder);

  form = this.formbuilder.group({
    titulo:['', {validators: [Validators.required]}],
    fechaLanzmiento: new FormControl<Date |null>(null, {validators:[Validators.required]}),
    trailer: '',
    poster: new FormControl<File | string |null>(null)
  });

  selectedFile(file:File){
    this.form.controls.poster.setValue(file);
  }

  saveChanges() {
    if(!this.form.valid){
      return;
    }
    const pelicula = this.form.value as PeliculaCreacionDTO;
    pelicula.fechaLanzmiento = moment(pelicula.fechaLanzmiento).toDate();

    if(typeof pelicula.poster === "string"){
      pelicula.poster = undefined;
    }

    this.postForm.emit(pelicula);
  }
  getTitleError():string{
    let field = this.form.controls.titulo
    if(field.hasError('required')){
      return "El titulo es requerido";
    }
    return "";
  }
  getFechaLanzamientoError():string{
    let field = this.form.controls.fechaLanzmiento
    if(field.hasError('required')){
      return "La fecha de lanzamiento es requerida";
    }
    return "";
  }
}
