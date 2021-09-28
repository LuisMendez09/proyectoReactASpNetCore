import axios,{AxiosResponse} from "axios";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router"
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Cargando from "../utils/Cargando";
import { coordenadasDTO } from "../utils/Coordenadas.model";
import { urlPeliculas, urlRatings } from "../utils/endpoints";
import Mapa from "../utils/Mapa";
import Rating from "../utils/Rating";
import { peliculaDTO } from "./Pelicula.model";

export default function DetallePelicula(){
    const {id}:any = useParams();
    const [pelicula,setPelicula]= useState<peliculaDTO>()

    useEffect(()=>{
        axios.get(`${urlPeliculas}/${id}`)
        .then((respuesta: AxiosResponse<peliculaDTO>)=>{
            respuesta.data.fechaLanzamiento = new Date(respuesta.data.fechaLanzamiento);
            setPelicula(respuesta.data);
        })
    },[id])

    function transformarCoordenadas():coordenadasDTO[]{
        if(pelicula?.cines){
            const coordenadas = pelicula.cines.map(cine=>{
                return {lat: cine.latitud,lng:cine.longitud,nombre:cine.nombre} as coordenadasDTO
            })

            return coordenadas
        }
        return [];
    }

    function generarUrlYoutubeEmbebido(url:any):string{
        console.log(url)

        if(url && url!=='null'){
            var vide_id=url.split('v=')[1]
            var poosicionAmpersand = vide_id.indexOf('&')

            if(poosicionAmpersand !==-1){
                vide_id = vide_id.substring(0,poosicionAmpersand)
            }

            return `https://www.youtube.com/embed/${vide_id}`
           
        }
        return ''
    }

    async function onVoto(voto:number){
        await axios.post(urlRatings,{puntuacion:voto,peliculaId:id})
        
        Swal.fire({icon:'success', title:'Voto recibido'})
    }

    return(
        pelicula?
        <div style={{display:'flex'}}>
            <div>
            <h2>{pelicula.titulo} {pelicula.fechaLanzamiento.getFullYear()}</h2>

            {pelicula.generos.map(genero=> 
                <Link key={genero.id} style={{marginRight:'5px'}}
                    className='btn btn-primary btn-sm rounded-pill'
                    to={`/peliculas/filtrar?genero=${genero.id}`}>
                {genero.nombre}
                </Link>)}
                | {pelicula.fechaLanzamiento.toDateString()}
                | Voto promedio:{pelicula.promedioVoto}
                | Tu voto: <Rating maximoValor={5} valorSeleccionado={pelicula.votoUsuario!} onChange={onVoto}/>

                <div style={{display:'flex',marginRight:'1rem'}}>
                    <span style={{display:'inline-block',marginRight:'1rem'}}>
                        <img src={pelicula.poster} 
                        style={{width:'225px',height:'315px'}}
                        alt='poster'/>                        
                    </span>
                    {pelicula.trailer?
                        <div>
                            <iframe
                                title='youtube-trailer'
                                width='560'
                                height='315'
                                src={generarUrlYoutubeEmbebido(pelicula.trailer)}
                                frameBorder={0}
                                allow='accelerometer; autoplay; encrypted-media; gryoscope; picture-in-pinture'
                                allowFullScreen>

                            </iframe>
                        </div>
                    :null}
                </div>

                {pelicula.resumen?
                    <div style={{marginRight:'1rem'}}>
                        <h3>Resumen</h3>
                        <div>
                            <ReactMarkdown>
                                {pelicula.resumen}
                            </ReactMarkdown>
                        </div>
                    </div>
                :null}

                {pelicula.actores && pelicula.actores.length > 0 ? 
                    <div style={{marginTop:'1rem'}}>
                        <h3>Actores</h3>
                        <div style={{display:'flex', flexDirection:'column'}}>
                            {pelicula.actores?.map(actor=>
                            <div key={actor.id} style={{marginBottom:'2px'}}>
                                <img alt='foto' src={actor.foto} style={{width:'50px',verticalAlign:'middle'}}/>    
                                <span style={{display:'inline-block', width:'200px', marginLeft:'1rem'}}>
                                    {actor.nombre}
                                </span>
                                <span style={{display:'inline-block',width:'45px'}}>...</span>
                                <span>{actor.personaje}</span>
                            </div>
                                
                            )}
                        </div>
                    </div>
                :null}

                {pelicula.cines && pelicula.cines.length > 0 ? 
                    <div>
                        <h2>Cines</h2>
                        <Mapa soloLectura={true} coordenadas={transformarCoordenadas()}/>
                    </div>
                :null}
            </div>            
        </div>:<Cargando/>
    )
}