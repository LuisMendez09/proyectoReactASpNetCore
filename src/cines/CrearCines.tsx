import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";
import { urlCines } from "../utils/endpoints";
import MostrarErrores from "../utils/MostrarErrores";
import { cinesCreacionDTO } from "./Cines.mode";
import FormularioCines from "./FormularioCines";

export default function CrearCines(){

    const history = useHistory();
    const [errores,setErrores] = useState<string[]>([]);
    
    async function crear(cine:cinesCreacionDTO) {
        try{
            await axios.post(urlCines,cine)
            history.push('/cines');
        }
        catch(error:any){
            setErrores(error.response.data)
        }
    }

    return(
        <>
            <h3>Crear cine</h3>
            <MostrarErrores errores={errores}/>
            <FormularioCines 
                modelo={{nombre:''}}
                onSubmit={async valor =>await crear(valor)}/>
        </>
    )
}