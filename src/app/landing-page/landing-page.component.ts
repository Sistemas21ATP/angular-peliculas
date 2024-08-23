import { Component, OnInit } from '@angular/core';
import { MoviesListComponent } from "../movies/movies-list/movies-list.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [MoviesListComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit{
  moviesOnCinema!: any[];
  comingSoon!: any[];
  
  ngOnInit(): void {
    setTimeout(()=>{
      this.moviesOnCinema =  [{
        title: 'Inside Out 2',
        date: new Date(),
        price: 1400.99,
        poster: 'https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_2_poster.jpg?20240514232832'
      },
      {
        title: 'Moana 2',
        date: new Date('2016-05-03'),
        price: 300.99,
        poster: 'https://upload.wikimedia.org/wikipedia/en/7/73/Moana_2_poster.jpg'
      },
      {
        title: 'Bad Boys: Ride or Die',
        date: new Date('2016-05-03'),
        price: 300.99,
        poster: 'https://upload.wikimedia.org/wikipedia/en/8/8b/Bad_Boys_Ride_or_Die_%282024%29_poster.jpg'
      }
    ];
      this.comingSoon = [
        {
          title: 'Deadpool & Wolverine',
          date: new Date('2016-05-03'),
          price: 300.99,
          poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Deadpool_%26_Wolverine_poster.jpg/220px-Deadpool_%26_Wolverine_poster.jpg'
        },
        {
          title: 'Oppenheimer',
          date: new Date('2016-05-03'),
          price: 300.99,
          poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Oppenheimer_%28film%29.jpg/220px-Oppenheimer_%28film%29.jpg'
        },
        {
          title: 'The Flash',
          date: new Date('2016-05-03'),
          price: 300.99,
          poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/The_Flash_%28film%29_poster.jpg/220px-The_Flash_%28film%29_poster.jpg'
        }
      ];
    }, 500)
  }

  
  handleVow(vow:number){
    
  }
}
