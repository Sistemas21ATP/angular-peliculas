import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MoviesListComponent } from "../../movies/movies-list/movies-list.component";
import { MovieFilter } from './movies_filter';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filtro',
  standalone: true,
  imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatSelectModule, MatCheckboxModule, MoviesListComponent],
  templateUrl: './filtro.component.html',
  styleUrl: './filtro.component.css'
})
export class FiltroComponent implements OnInit{
  ngOnInit(): void {
    this.readURL();
    this.searchMovie(this.form.value as MovieFilter);
    this.form.valueChanges.subscribe(values =>{
      this.moviesFiltered = this.moviesOriginal;
      this.searchMovie(values as MovieFilter);
      this.changeURL(values as MovieFilter);
    });
  }

  searchMovie(values:MovieFilter){
    if(values.titulo){
      this.moviesFiltered = this.moviesFiltered.filter(movie => movie.title.indexOf(values.titulo) !== -1);
    }
    if(values.generoID !== 0){
      this.moviesFiltered = this.moviesFiltered.filter(movie => movie.generos.indexOf(values.generoID) !== -1);
    }
    if(values.enCines){
      this.moviesFiltered = this.moviesFiltered.filter(movie => movie.enCines);
    }
    if(values.proximosEstrenos){
      this.moviesFiltered = this.moviesFiltered.filter(movie => movie.proximosEstrenos);
    }
  }

  cleanForm(){
    this.form.patchValue({titulo: '', generoID: 0, proximosEstrenos: false, enCines: false,});
  }

  changeURL(values:MovieFilter){
    let queryStrings = [];

    if(values.titulo){
      queryStrings.push(`titulo=${encodeURIComponent(values.titulo)}`);
    }
    if(values.generoID !== 0){
      queryStrings.push(`genero=${encodeURIComponent(values.generoID)}`);
    }
    if(values.enCines){
      queryStrings.push(`cines=${encodeURIComponent(values.enCines)}`);
    }
    if(values.proximosEstrenos){
      queryStrings.push(`estreno=${encodeURIComponent(values.proximosEstrenos)}`);
    }
    
    this.location.replaceState('peliculas/filtrar', queryStrings.join('&'));

  }

  readURL(){
    this.activatedRoute.queryParams.subscribe((params:any)=>{
      var objecto:any = {};

      if(params.titulo){
        objecto.titulo = params.titulo;
      }
      if(params.genero){
        objecto.genero = Number(params.genero);
      }
      if(params.cines){
        objecto.cines = params.cines;
      }
      if(params.estreno){
        objecto.estreno = params.estreno;
      }

      this.form.patchValue(objecto);
    });
  }

  private formbuilder = inject(FormBuilder);
  private location = inject(Location);
  private activatedRoute = inject(ActivatedRoute)

  moviesOriginal = [
    {
      title: 'Inside Out 2',
      date: new Date(),
      price: 1400.99,
      poster: 'https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_2_poster.jpg?20240514232832',
      generos: [1,2,3],
      enCines: true,
      proximosEstrenos: false
    },
    {
      title: 'Moana 2',
      date: new Date('2016-05-03'),
      price: 300.99,
      poster: 'https://upload.wikimedia.org/wikipedia/en/7/73/Moana_2_poster.jpg',
      generos: [1,5,9],
      enCines:false,
      proximosEstrenos: true
    },
    {
      title: 'Bad Boys: Ride or Die',
      date: new Date('2016-05-03'),
      price: 300.99,
      poster: 'https://upload.wikimedia.org/wikipedia/en/8/8b/Bad_Boys_Ride_or_Die_%282024%29_poster.jpg',
      generos: [1,2,4],
      enCines: true,
      proximosEstrenos: false
    },
    {
      title: 'Deadpool & Wolverine',
      date: new Date('2016-05-03'),
      price: 300.99,
      poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Deadpool_%26_Wolverine_poster.jpg/220px-Deadpool_%26_Wolverine_poster.jpg',
      generos: [2],
      enCines: true,
      proximosEstrenos: false
    },
    {
      title: 'Oppenheimer',
      date: new Date('2016-05-03'),
      price: 300.99,
      poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Oppenheimer_%28film%29.jpg/220px-Oppenheimer_%28film%29.jpg',
      generos: [2,3],
      enCines: false,
      proximosEstrenos: true
    },
    {
      title: 'The Flash',
      date: new Date('2016-05-03'),
      price: 300.99,
      poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/The_Flash_%28film%29_poster.jpg/220px-The_Flash_%28film%29_poster.jpg',
      generos: [1,2],
      enCines: true,
      proximosEstrenos: false
    }
  ];

  moviesFiltered = this.moviesOriginal;

  form = this.formbuilder.group({
    titulo: '',
    generoID: 0,
    proximosEstrenos: false,
    enCines: false,
  });

  generos = [
    {id:1, nombre:"Drama"},
    {id:2, nombre:"Acción"},
    {id:3, nombre:"Comedia"},
  ]
}
