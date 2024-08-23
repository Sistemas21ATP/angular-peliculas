import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cinemas',
  standalone: true,
  imports: [RouterLink, MatButtonModule],
  templateUrl: './cinemas.component.html',
  styleUrl: './cinemas.component.css'
})
export class CinemasComponent {

}
