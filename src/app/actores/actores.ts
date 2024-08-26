export interface ActorDTO{
    id:number;
    name:string;
    birthDate: Date;
    photo?:string;
}

export interface ActorCreacionDTO{
    name:string;
    birthDate: Date;
    photo?:File;
}