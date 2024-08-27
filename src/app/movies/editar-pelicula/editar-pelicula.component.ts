import { Component, Input, numberAttribute } from '@angular/core';
import { FormMoviesComponent } from "../form-movies/form-movies.component";
import { PeliculaCreacionDTO, PeliculaDTO } from '../peliculas';

@Component({
  selector: 'app-editar-pelicula',
  standalone: true,
  imports: [FormMoviesComponent],
  templateUrl: './editar-pelicula.component.html',
  styleUrl: './editar-pelicula.component.css'
})
export class EditarPeliculaComponent {
  @Input({transform: numberAttribute})
  id!: number;

  movie:PeliculaDTO = {id:1, titulo:'Spider-man', trailer:'ABC', fechaLanzmiento:new Date('2018-07-25'), poster:'https://upload.wikimedia.org/wikipedia/en/8/8b/Bad_Boys_Ride_or_Die_%282024%29_poster.jpg'}; 

  saveMovie(movie: PeliculaCreacionDTO){
    console.log('Creando pelicula:', movie)
  }
}
