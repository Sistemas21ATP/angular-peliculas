import { Component } from '@angular/core';
import { PeliculaCreacionDTO } from '../peliculas';
import { FormMoviesComponent } from "../form-movies/form-movies.component";

@Component({
  selector: 'app-create-movie',
  standalone: true,
  imports: [FormMoviesComponent],
  templateUrl: './create-movie.component.html',
  styleUrl: './create-movie.component.css'
})
export class CreateMovieComponent {
  saveMovie(movie: PeliculaCreacionDTO){
    console.log('Creando pelicula:', movie)
  }
}
