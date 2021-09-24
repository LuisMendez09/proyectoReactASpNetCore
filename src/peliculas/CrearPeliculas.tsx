import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { generoDTO } from "../generos/generos.model";
import Cargando from "../utils/Cargando";
import { urlPeliculas } from "../utils/endpoints";
import { convertirPeliculasAFormData } from "../utils/FormDate";
import MostrarErrores from "../utils/MostrarErrores";
import FormularioPeliculas from "./FormularioPeliculas";
import { peliculaCreacionDTO, PeliculaPostGet } from "./Pelicula.model";

export default function CrearPeliculas(){
    const history = useHistory()

    const [generosNoSeleccionados,setGenerosNoSeleccionados] = useState<generoDTO[]>([])
    const [cinesNoSeleccionados,setcinesNoSeleccionados] = useState<generoDTO[]>([])
    const [cargado,setCargado] = useState(false)
    const [errores,setErrores] = useState<string[]>([]) 

    useEffect(()=>{
        axios.get(`${urlPeliculas}/postget`)
        .then((respuesta:AxiosResponse<PeliculaPostGet>)=>{
            setGenerosNoSeleccionados(respuesta.data.generos)
            setcinesNoSeleccionados(respuesta.data.cines)
            setCargado(true);
        })
    },[])

    async function  crear(pelicula:peliculaCreacionDTO) {
        try{
            const formData = convertirPeliculasAFormData(pelicula);
            await axios({
                 method : 'post',
                 url:urlPeliculas,
                 data:formData,
                 headers:{'Content-Type':'multipart/form-data'}
            }).then((respuesta:AxiosResponse<number>)=>{
                console.log(`/peliculas/${respuesta.data}`)
                history.push(`/peliculas/${respuesta.data}`)
            })
        }catch(error:any){
            setErrores(error)
        }
    }

    return(
        <>
            <h3>Crear Peliculas</h3>
            <MostrarErrores errores={errores}/>
            {cargado?
                <FormularioPeliculas 
                actoresSeleccionados ={[]}
                cinesNoSeleccionados={cinesNoSeleccionados}
                cinesSeleccionados={[]}
                generosNoSeleccionados={generosNoSeleccionados}
                generosSeleccionados={[]}
                modelo={{titulo:'',enCines:false,trailer:''}}
                onSubmit={async valor=> crear(valor)}/>
            :<Cargando/>}
            
        </>
    )
}