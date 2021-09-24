import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import Cargando from "../utils/Cargando";
import { urlPeliculas } from "../utils/endpoints";
import { convertirPeliculasAFormData } from "../utils/FormDate";
import MostrarErrores from "../utils/MostrarErrores";
import FormularioPeliculas from "./FormularioPeliculas";
import { peliculaCreacionDTO, peliculasPutGetDTO } from "./Pelicula.model";

export default function EditarPeliculas(){
    const [pelicula,setPelicula] = useState<peliculaCreacionDTO>()
    const [peliculaPutGet,setPeliculaPutGet] = useState<peliculasPutGetDTO>()
    const [errores,setError] = useState<string[]>([]);
    const {id}: any = useParams()
    const history = useHistory();

    useEffect(()=>{
        axios.get(`${urlPeliculas}/PutGet/${id}`)
        .then((respuesta:AxiosResponse<peliculasPutGetDTO>)=>{
            const modelo: peliculaCreacionDTO = {
                titulo:respuesta.data.pelicula.titulo,
                enCines:respuesta.data.pelicula.enCines,
                trailer:respuesta.data.pelicula.trailer,
                posterURL:respuesta.data.pelicula.poster,
                resumen:respuesta.data.pelicula.resumen,
                fechaLanzamiento: new Date(respuesta.data.pelicula.fechaLanzamiento),
            }  
            
            setPelicula(modelo)
            setPeliculaPutGet(respuesta.data);
        })
    },[id])

    async function editar(peliculaEditar:peliculaCreacionDTO){
   
        try{
            const formData = convertirPeliculasAFormData(peliculaEditar)
            
            await axios({
                method:'put',
                url:`${urlPeliculas}/${id}`,
                data: formData,
                headers: {'Content-Type':'multipart/form-data'}
            })
            history.push(`/peliculas/${id}`)
        }catch(error:any){
            setError(error.response.data)
        }
    }

    return(
        <>
            <h3>Editar Peliculas</h3>
            <MostrarErrores errores={errores}/>
            {pelicula && peliculaPutGet ? 
                <FormularioPeliculas
                    actoresSeleccionados={peliculaPutGet.actores}
                    cinesNoSeleccionados={peliculaPutGet.cinesNoSeleccionados}
                    cinesSeleccionados={peliculaPutGet.cinesSeleccionados}
                    generosNoSeleccionados={peliculaPutGet.generosNoSeleccionados}
                    generosSeleccionados={peliculaPutGet.generosSeleccionados}
                    modelo={pelicula}
                    onSubmit={async valor=> editar(valor)}/>
                :<Cargando/>}
            
        </>
    )
}