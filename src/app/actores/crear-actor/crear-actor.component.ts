import { Component } from '@angular/core';
import { FormActoresComponent } from "../form-actores/form-actores.component";
import { ActorCreacionDTO } from '../actores';

@Component({
  selector: 'app-crear-actor',
  standalone: true,
  imports: [FormActoresComponent],
  templateUrl: './crear-actor.component.html',
  styleUrl: './crear-actor.component.css'
})
export class CrearActorComponent {
  saveActor(actor: ActorCreacionDTO){
    console.log('Creando actor:', actor)
  }
}
