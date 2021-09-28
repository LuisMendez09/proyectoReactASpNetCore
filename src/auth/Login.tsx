import axios from "axios";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { urlCuentas } from "../utils/endpoints";
import MostrarErrores from "../utils/MostrarErrores";
import AutentizacionContext from "./AutentizacionContext";
import { credencialesUsuario, respuetaAutenticacion } from "./auth.model";
import FormularioAuth from "./FormularioAuth";
import { guardarTokenLocalStore, obtenerClaims } from "./ManejadorJwt";

export default function Login(){

    const {actualizar} = useContext(AutentizacionContext)
    const[errores,setErrores] = useState<string[]>([])
    const history = useHistory()

    async function login(credenciales:credencialesUsuario) {
        try{
            const respuesta = await axios.post<respuetaAutenticacion>(`${urlCuentas}/login`,credenciales)
            
            guardarTokenLocalStore(respuesta.data)
            actualizar(obtenerClaims())

            history.push('/')
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