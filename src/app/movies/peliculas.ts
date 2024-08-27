export interface PeliculaDTO{
    id:number;
    titulo:string;
    fechaLanzmiento:Date;
    trailer:string;
    poster?:string;
}

export interface PeliculaCreacionDTO{
    titulo:string;
    fechaLanzmiento:Date;
    trailer:string;
    poster?:File;
}