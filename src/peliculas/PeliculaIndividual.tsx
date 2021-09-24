import axios from 'axios'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import AlertaContext from '../utils/AlertaContext'
import Button from '../utils/Button'
import Confirmar from '../utils/Confirmar'
import { urlPeliculas } from '../utils/endpoints'
import { peliculaDTO } from './Pelicula.model'
import css from './PeliculaIndividual.module.css'

export default function PeliculaIndividual(props: peliculaIndividualProps){

    const link = `/peliculas/${props.pelicula.id}`
    const alerta = useContext(AlertaContext)

    function borrarPelicula(){
        axios.delete(`${urlPeliculas}/${props.pelicula.id}`)
        .then(()=>{
            alerta();
        })

    }

    return(
        <div className={css.div}>
            <a href={link}>
                <img src={props.pelicula.poster} alt="poster"/>
            </a>
            <p>
                <a href={link}>{props.pelicula.titulo}</a>
            </p>
            <div>
                <Link style={{marginRight:'1rem'}} className='btn btn-info'
                to={`/peliculas/editar/${props.pelicula.id}`}>Editar</Link>
                <Button 
                onClick={()=>Confirmar(()=>borrarPelicula())}
                className='btn btn-danger'>Borran</Button>
            </div>
        </div>
    )
}

interface peliculaIndividualProps{
    pelicula: peliculaDTO
}