import { actorPeliculaDTO } from "../actores/actores.model";
import { cinesDTO } from "../cines/Cines.mode";
import { generoDTO } from "../generos/generos.model";

export interface peliculaDTO{
    id: number;
    titulo: string;
    poster: string;
    enCines: boolean;
    trailer: string;
    resumen?:string;
    fechaLanzamiento: Date;
    cines: cinesDTO[];
    generos: generoDTO[];
    actores: actorPeliculaDTO[];
    votoUsuario?: number;
    promedioVoto?: number;
}

export interface peliculaCreacionDTO{
    titulo: string;
    enCines: boolean;
    trailer: string;
    resumen?:string;
    fechaLanzamiento?: Date;
    poster?: File;
    posterURL?: string;
    generosIds?: number[];
    cinesIds?:number[];
    actores?: actorPeliculaDTO[];
}

export interface landingPageDTO{
    enCines?: peliculaDTO[];
    proximosEstrenos?: peliculaDTO[];
}

export interface PeliculaPostGet{
    generos: generoDTO[];
    cines: cinesDTO[];
}

export interface peliculasPutGetDTO{
    pelicula:peliculaDTO;
    generosSeleccionados:generoDTO[];
    generosNoSeleccionados:generoDTO[];
    cinesSeleccionados:cinesDTO[];
    cinesNoSeleccionados:cinesDTO[];
    actores: actorPeliculaDTO[];

}