import { pelicula } from "./Pelicula.model";

import css from './PeliculaIndividual.module.css'

export default function PeliculaIndividual(props: peliculaIndividualProps){

    const link = `/pelicula/${props.pelicula.id}`//() => `/pelicula/${props.pelicula.id}`

    return(
        <div className={css.div}>
            <a href={link}>
                <img src={props.pelicula.poster} alt="poster"/>
            </a>
            <p>
                <a href={link}>{props.pelicula.titulo}</a>
            </p>
        </div>
    )
}

interface peliculaIndividualProps{
    pelicula: pelicula
}
