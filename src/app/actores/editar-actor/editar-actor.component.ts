import { Component, Input, numberAttribute } from '@angular/core';
import { ActorCreacionDTO, ActorDTO } from '../actores';
import { FormActoresComponent } from "../form-actores/form-actores.component";

@Component({
  selector: 'app-editar-actor',
  standalone: true,
  imports: [FormActoresComponent],
  templateUrl: './editar-actor.component.html',
  styleUrl: './editar-actor.component.css'
})
export class EditarActorComponent {
  @Input({transform: numberAttribute})
  id!: number;

  actor: ActorDTO = {id:1, name: "owo", birthDate:new Date('1991-01-25')};

  saveActor(actor: ActorCreacionDTO){
    console.log('Editar actor:', actor)
  }
}
