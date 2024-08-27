import { Component, Input, numberAttribute } from '@angular/core';
import { CineCreacionDTO, CineDTO } from '../cines';
import { FormCinesComponent } from "../form-cines/form-cines.component";

@Component({
  selector: 'app-editar-cine',
  standalone: true,
  imports: [FormCinesComponent],
  templateUrl: './editar-cine.component.html',
  styleUrl: './editar-cine.component.css'
})
export class EditarCineComponent {
  @Input({transform: numberAttribute})
  id!: number;

  cinema:CineDTO ={id:1, name:"Cine 1", latitud:28.663380588428574, longitud:-106.12553470473654} 

  saveCinema(cinema:CineCreacionDTO){
    console.log('Actualizando cine', cinema);
  }
}
