import { Component } from '@angular/core';
import { FormCinesComponent } from "../form-cines/form-cines.component";
import { CineCreacionDTO } from '../cines';

@Component({
  selector: 'app-create-cinema',
  standalone: true,
  imports: [FormCinesComponent],
  templateUrl: './create-cinema.component.html',
  styleUrl: './create-cinema.component.css'
})
export class CreateCinemaComponent {
  saveCinema(cinema:CineCreacionDTO){
    console.log('Creando cine', cinema);
  }
}
