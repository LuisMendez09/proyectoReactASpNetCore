import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";
import { urlActores } from "../utils/endpoints";
import { convertirActorAFormData } from "../utils/FormDate";
import MostrarErrores from "../utils/MostrarErrores";
import { actorCreacionDTO } from "./actores.model";
import FormularioActores from "./FormularioActores";

export default function CrearActores(){
    const[errores,setErrores] = useState<string[]>([])
    const history = useHistory()

    async function crear(actor:actorCreacionDTO) {
        try{
            const formData = convertirActorAFormData(actor)
            await axios({
                method:'post',
                url:urlActores,
                data:formData,
                headers:{'Content-Type':'multipart/form-data'}
            });
            history.push('/actores')
        }catch(error:any){
           setErrores(error.response.data)
        }
    }

    return(
        <>
            <h3>Crear actores</h3>
            <MostrarErrores errores={errores}/>
            <FormularioActores 
            modelo={{nombre:"", fechaNacimiento:undefined}}
            onSubmit={async valores=> await crear(valores)} />
        </>
        
       
    )
}