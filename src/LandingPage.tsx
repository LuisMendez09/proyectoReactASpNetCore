import { useEffect, useState } from "react"
import ListadoPeliculas from "./peliculas/ListadoPeliculas"
import { landingPageDTO } from "./peliculas/Pelicula.model"


export default function LandingPage(){
    const [peliculas,setPeliculas] = useState<landingPageDTO>({})

    useEffect(()=>{
        const timerId = setTimeout(()=>{
        setPeliculas({enCartelera:[
            {
            id:1, 
            titulo :"nombre pelicula 1", 
            poster : "https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg"
            },
            {
            id:2, 
            titulo :"nombre pelicula 2", 
            poster : "https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg"
            },
            {
            id:3, 
            titulo :"nombre pelicula 3", 
            poster : "https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg"
            }
        ],
        proximosEstrenos:[
            {
            id:4, 
            titulo :"nombre pelicula 4", 
            poster : "https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg"
            }
        ]})
        },2000)

        return ()=> clearTimeout(timerId)
    })
    
    return(
        <>
            <h3>En cartelera</h3>
            <ListadoPeliculas peliculas={peliculas.enCartelera}/>
            <h3>Proximamente</h3>
            <ListadoPeliculas peliculas={peliculas.proximosEstrenos}/>
        </>
    )
}