import { cinesDTO } from "../cines/Cines.mode";
import { generoDTO } from "../generos/generos.model";
import FormularioPeliculas from "./FormularioPeliculas";

export default function CrearPeliculas(){
    const generos: generoDTO[]=[{Id:1, nombre:'Accion'},
    {Id: 2, nombre:'Drama'},
    {Id: 3, nombre:'Comedia'}]

    const cines: cinesDTO[]=[{Id:1, nombre:'uno'},
    {Id: 2, nombre:'dos'},
    {Id: 3, nombre:'tres'}]

    return(
        <>
            <h3>Crear Peliculas</h3>
            <FormularioPeliculas 
                actoresSeleccionados ={[]}
                cinesNoSeleccionados={cines}
                cinesSeleccionados={[]}
                generosNoSeleccionados={generos}
                generosSeleccionados={[]}
                modelo={{titulo:'',enCines:false,trailer:''}}
                onSubmit={valor=> console.log(valor)}
            />
        </>
    )
}