import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormGenerosComponent } from "../form-generos/form-generos.component";
import { GeneroCreacionDTO } from '../generos';

@Component({
  selector: 'app-crear-generos',
  standalone: true,
  imports: [FormGenerosComponent],
  templateUrl: './crear-generos.component.html',
  styleUrl: './crear-generos.component.css'
})
export class CrearGenerosComponent {
  private router = inject(Router);

  saveChanges(genero: GeneroCreacionDTO){
    // save
    // this.router.navigate(['/gen']);
    console.log(genero);
  }
}
