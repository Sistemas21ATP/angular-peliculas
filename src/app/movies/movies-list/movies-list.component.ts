import { Component, Input } from '@angular/core';
import { DatePipe, CurrencyPipe } from '@angular/common';
import { GenericListComponent } from "../../shared/components/generic-list/generic-list.component";
import { MatButtonModule } from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [DatePipe, CurrencyPipe, GenericListComponent, MatButtonModule, MatIconModule],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css'
})
export class MoviesListComponent {

  @Input({required: true})
  movies!: any[];
  defaultImage: string = 'default.jpg'
}
