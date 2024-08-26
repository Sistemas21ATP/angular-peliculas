import { Component, Input, numberAttribute } from '@angular/core';
import { FormGenerosComponent } from "../form-generos/form-generos.component";
import { GeneroCreacionDTO, GeneroDto } from '../generos';

@Component({
  selector: 'app-editar-genero',
  standalone: true,
  imports: [FormGenerosComponent],
  templateUrl: './editar-genero.component.html',
  styleUrl: './editar-genero.component.css'
})
export class EditarGeneroComponent {
  saveChanges(genero: GeneroCreacionDTO) {
    console.log(genero);
  } 
  @Input({transform: numberAttribute})
  id!: number;

  genero:GeneroDto = {id: 1, name:'Comedia'}

}
