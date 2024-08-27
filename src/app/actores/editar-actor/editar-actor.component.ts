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

  actor: ActorDTO = {id:1, name: "owo", birthDate:new Date('1991-01-25'), photo:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQBDgMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAQIDBQQH/8QANBABAQACAQIDBAcHBQAAAAAAAAECEQMEEiExQRRRUnEFExUyYaGiIjRTcoGRsSMlMzVi/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APogAAAAAAABpICNGkpgK6NLJBTR2r6SDPRppo0DPRppo0DPRpfQCmjSwCuhZUAAAAAAAAAAAAAAACgmJREgRImQCGlpEgrpMi0i0gKaNL9poGehppGgZ6RpppXQKIXs0rQRUJRQQAAAAAAAAAAAAAAUKCYtFYtICZFtIi8gEi0hF5ARImYpkXkBTRqa22w4ss7rHG16eLocvPPKSe6A5/bv0R2uj1fTcePBMuOeV8a8VgMrFLG1ilgM7FbGlilBSxWr5KUEAAAAAAAAAAAAAAFCgmLxSNJAWkWkRF5ATJu+TSY+Op5vZwdBNd3Ln4fg3wy6fizxw45O63XgDy8XScuetzsn/p6cem4eKb5LL83oz15XPt/qxvBw27yztv45Arl1WGM1xY7/AMMOTl5M7456nuj0fUcOtd36k+z8PxfmCvTX6zgy4/6PFnj25XG+cdHj4+Pju8c/zRycXDyZbuXjfPWQOXYpY6XN0vFOHLPC3cm/Nz6DLKKWNazyBlkpWmTOggAAAAAAAAAAAAAAoUExpGcaQF40nozi4Or0uXtHSXC/en7Ly9NP9XCevd4rfR3L2c3bfLJryYdnW430yuwX677+PyV4+DLLDc1J6Ldd/wAmHyW4OoxxwmOW/DyBhZ23VnjELcmXfnll71uHjvJnr0nmDOz3qV7ubg77LPD0eLklwzuN9AerH9wy+Vc7L1dHH9wy+Vc6+oM6zyXyUyBnkzrTJnQRAAAAAAAAAAAAAAChQTGkZxeAvF4zi8oNePK43c854x1sp9dhxcmPpZXHldL6M5d4Zcdv3fGAnr/v4/JhxzLPKY4+da/SF1nh8leDqMOKanHblfO7Btn01k/Yu7+L0cXH2YSevrXm9vn8P9Sfbsfg/MHrvk8PX46zxz98W9vn8P8AUy6jqZzYa7NePhdg2xv+35fy1zbXRx/67L+WuZsEVSpyqtBTJnV8lKCAAAAAAAAAAAAAAChQTForFoC0WlUidg0lb9LzfU8sz1ueVnveeVMoOt9o8Xw5J+0OP4MnJlWlB1Pb+L4Mj2/i+DL+zmbNg6ft/H8FR9ocXwZObtXYOhzdfx58OeExym5rxc60uSuwLVaWq2gVSpRQQAAAAAAAAAAAAAAACYlAC0ERMBaVMqiZQabO5TZsGmzuU2bBe1G1do2C20bV2jYJtQIAqE3yVAAAAAAAAAAAAAAAABIggJSgBKYqbBYRs2Cdp2rs2Cdm0bNgnaDaASIAPRCUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//9k="};

  saveActor(actor: ActorCreacionDTO){
    console.log('Editar actor:', actor)
  }
}
