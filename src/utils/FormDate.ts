import { actorCreacionDTO } from "../actores/actores.model";
import { peliculaCreacionDTO } from "../peliculas/Pelicula.model";

export function convertirActorAFormData(actor:actorCreacionDTO):FormData{
    const formaData = new FormData();

    formaData.append('nombre',actor.nombre);
    if(actor.biografia){
        formaData.append('biografia',actor.biografia)
    }
    if(actor.fechaNacimiento){
        formaData.append('fechaNacimiento',formatearFecha(actor.fechaNacimiento))
    }
    if(actor.foto){
        formaData.append('foto',actor.foto)
    }

    return formaData
}

export function convertirPeliculasAFormData(pelicula:peliculaCreacionDTO):FormData{
    const formaData = new FormData();

    formaData.append('titulo',pelicula.titulo)
    formaData.append('trailer',pelicula.trailer)
    formaData.append('enCines',String(pelicula.enCines))
    if(pelicula.resumen){
        formaData.append('resumen',pelicula.resumen)
    }
    if(pelicula.fechaLanzamiento){
        formaData.append('fechaLanzamiento',formatearFecha(pelicula.fechaLanzamiento))
    }
    if(pelicula.poster){
        formaData.append('poster',pelicula.poster)
    }

    formaData.append('generosIds',JSON.stringify(pelicula.generosIds))
    formaData.append('cinesIds',JSON.stringify(pelicula.cinesIds))
    formaData.append('actores',JSON.stringify(pelicula.actores))

    return formaData
}

function formatearFecha(date:Date){
    date = new Date(date)
    const formato = new Intl.DateTimeFormat('en',{
        year: 'numeric',
        month:'2-digit',
        day: '2-digit'
    })

    const[
        {value:month},,
        {value:day},,
        {value:year}
    ] = formato.formatToParts(date)

    return `${year}-${month}-${day}`
}