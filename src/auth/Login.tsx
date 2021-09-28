import axios from "axios";
import { useState } from "react";
import { urlCuentas } from "../utils/endpoints";
import MostrarErrores from "../utils/MostrarErrores";
import { credencialesUsuario, respuetaAutenticacion } from "./auth.model";
import FormularioAuth from "./FormularioAuth";

export default function Login(){
    const[errores,setErrores] = useState<string[]>([])

    async function login(credenciales:credencialesUsuario) {
        try{
            const respuesta = await axios.post<respuetaAutenticacion>(`${urlCuentas}/login`,credenciales)
            console.log(respuesta.data)
        }catch(error:any){
            setErrores(error.response.data)
        }
    }

    return(
        <>
            <h3>Login</h3>
            <MostrarErrores errores={errores}/>
            <FormularioAuth 
                modelo={{email:'',password:''}}
                onSubmit={async valores => await login(valores)}/>
        </>
        
    )
}