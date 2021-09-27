import { useContext, useEffect, useState } from "react";
import { ReactElement } from "react-markdown/lib/react-markdown";
import AutentizacionContext from "./AutentizacionContext";

export default function Autorizado(props:autorizadoProps){
    const [estaAutorizado,setEstaAutorizado] = useState(false)
    const {claims} = useContext(AutentizacionContext)

    useEffect(()=>{
        if(props.role){
            const indice = claims.findIndex(claim=>claim.nombre === 'role' && claim.valor === props.role)
            setEstaAutorizado(indice>-1)
        }else{
            setEstaAutorizado(claims.length > 0)
        }
    },[claims,props.role])

    return(
        <>
            {estaAutorizado?props.autorizado:props.noAutorizado}
        </>
    )
}

interface autorizadoProps{
    autorizado: ReactElement;
    noAutorizado?: ReactElement;
    role?: string;
}