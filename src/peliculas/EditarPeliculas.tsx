import { actorPeliculaDTO } from "../actores/actores.model";
import { cinesDTO } from "../cines/Cines.mode";
import { generoDTO } from "../generos/generos.model";
import FormularioPeliculas from "./FormularioPeliculas";

export default function EditarPeliculas(){

        const generos: generoDTO[]=[{Id: 2, nombre:'Drama'},
        {Id: 3, nombre:'Comedia'}]

        const generosSelect: generoDTO[]=[{Id:1, nombre:'Accion'}]

        const cines: cinesDTO[]=[{Id: 2, nombre:'dos'},
        {Id: 3, nombre:'tres'}]

        const cinesSelect: generoDTO[]=[{Id:1, nombre:'unos'}]

        const actoresSeleccionados:actorPeliculaDTO[] =[
            {Id:1, nombre:'Tomy',personaje:'pp',foto:'https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg'},
            {Id:3, nombre:'Paco',personaje:'aa',foto:'https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg'},
        ]

    return(
        <>
            <h3>Editar Peliculas</h3>
            <FormularioPeliculas
                actoresSeleccionados={actoresSeleccionados}
                cinesNoSeleccionados={cines}
                cinesSeleccionados={cinesSelect}
                generosNoSeleccionados={generos}
                generosSeleccionados={generosSelect}
                modelo={{titulo:'Spiner Man',enCines:true,trailer:'URL',fechaLanzamiento:new Date("2021-01-01T00:00:00")}}
                onSubmit={valor=> console.log(valor)}
            />
        </>
    )
}