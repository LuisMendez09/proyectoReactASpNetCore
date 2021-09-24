import { peliculaDTO } from "./Pelicula.model";
import PeliculaIndividual from "./PeliculaIndividual";
import css from './ListadoPeliculas.module.css'
import ListadoGenerico from "../utils/ListadoGenerico";

export default function ListadoPeliculas(props: listaPeliculasProps){
    return(
        <ListadoGenerico listado={props.peliculas}>
            <div className={css.div}>
                {props.peliculas?.map(pelicula =>  
                    <PeliculaIndividual pelicula={pelicula} key={pelicula.id}/>)
                }
            </div> 
        </ListadoGenerico>
    )
}

interface listaPeliculasProps{
    peliculas?: peliculaDTO[]
}