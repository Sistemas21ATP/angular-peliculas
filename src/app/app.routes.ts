import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IndiceGenerosComponent } from './generos/indice-generos/indice-generos.component';
import { CrearGenerosComponent } from './generos/crear-generos/crear-generos.component';
import { IndiceActoresComponent } from './actores/indice-actores/indice-actores.component';
import { CrearActorComponent } from './actores/crear-actor/crear-actor.component';
import { CinemasComponent } from './cinema/cinemas/cinemas.component';
import { CreateCinemaComponent } from './cinema/create-cinema/create-cinema.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { EditarGeneroComponent } from './generos/editar-genero/editar-genero.component';
import { EditarActorComponent } from './actores/editar-actor/editar-actor.component';
import { EditarCineComponent } from './cinema/editar-cine/editar-cine.component';
import { EditarPeliculaComponent } from './movies/editar-pelicula/editar-pelicula.component';
import { FiltroComponent } from './cinema/filtro/filtro.component';

export const routes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'gen', component: IndiceGenerosComponent},
    {path: 'gen/crear', component: CrearGenerosComponent},
    {path: 'gen/editar/:id', component: EditarGeneroComponent},
    {path: 'actores', component: IndiceActoresComponent},
    {path: 'actores/crear', component: CrearActorComponent},
    {path: 'actores/editar/:id', component: EditarActorComponent},
    {path: 'cines', component: CinemasComponent},
    {path: 'cines/crear', component: CreateCinemaComponent},
    {path: 'cines/editar/:id', component: EditarCineComponent},
    {path: 'peliculas/crear', component: CreateMovieComponent},
    {path: 'peliculas/editar/:id', component: EditarPeliculaComponent},
    {path: 'peliculas/filtrar', component: FiltroComponent},
    {path: '**', redirectTo:''}
];
