import axios, { AxiosResponse } from "axios"
import { useEffect, useState } from "react"
import ListadoPeliculas from "./peliculas/ListadoPeliculas"
import { landingPageDTO } from "./peliculas/Pelicula.model"
import AlertaContext from "./utils/AlertaContext"
import { urlPeliculas } from "./utils/endpoints"


export default function LandingPage(){
    const [peliculas,setPeliculas] = useState<landingPageDTO>({})

    useEffect(()=>{
        cargarDatos();
    },[])

    function cargarDatos(){
        axios.get(urlPeliculas)
        .then((respuesta: AxiosResponse<landingPageDTO>)=>{
            console.log(respuesta.data) 
            setPeliculas(respuesta.data);
        })
    }
    
    return(
        <>
            <AlertaContext.Provider value={() => cargarDatos()}>
                <h3>En cartelera</h3>
                <ListadoPeliculas peliculas={peliculas.enCines}/>
                <h3>Proximamente</h3>
                <ListadoPeliculas peliculas={peliculas.proximosEstrenos}/>
            </AlertaContext.Provider>
        </>
    )
}