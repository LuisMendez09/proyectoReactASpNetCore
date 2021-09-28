import axios from "axios";
import { useContext, useState } from "react";
import { useHistory } from "react-router";
import { urlCuentas } from "../utils/endpoints";
import MostrarErrores from "../utils/MostrarErrores";
import AutentizacionContext from "./AutentizacionContext";
import { credencialesUsuario, respuetaAutenticacion } from "./auth.model";
import FormularioAuth from "./FormularioAuth";
import { guardarTokenLocalStore, obtenerClaims } from "./ManejadorJwt";

export default function Registro(){
    const {actualizar} = useContext(AutentizacionContext)
    const[errores,setErrores] = useState<string[]>([])
    const history = useHistory()

    async function registrar(credenciales:credencialesUsuario) {
        try{
            const respuesta = await axios.post<respuetaAutenticacion>(`${urlCuentas}/crear`,credenciales)
            
            guardarTokenLocalStore(respuesta.data)
            actualizar(obtenerClaims())

            history.push('/')
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
