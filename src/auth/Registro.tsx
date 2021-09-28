import axios from "axios";
import { useState } from "react";
import { urlCuentas } from "../utils/endpoints";
import MostrarErrores from "../utils/MostrarErrores";
import { credencialesUsuario, respuetaAutenticacion } from "./auth.model";
import FormularioAuth from "./FormularioAuth";

export default function Registro(){
    const[errores,setErrores] = useState<string[]>([])

    async function registrar(credenciales:credencialesUsuario) {
        try{
            const respuesta = await axios.post<respuetaAutenticacion>(`${urlCuentas}/crear`,credenciales)
            console.log(respuesta.data)
        }catch(error:any){
            setErrores(error.response.data)
        }
    }
    return(
        <>
            <h3>Registro</h3>
            <MostrarErrores errores={errores}/>
            <FormularioAuth modelo={{password:'',email:''}} onSubmit={async valores=> registrar(valores)}/>
        </>
        
    )
}
