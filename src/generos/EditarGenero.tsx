import EditarEntidad from "../utils/EditarEntidad"
import { urlGeneros } from "../utils/endpoints"
import FormularioGeneros from "./FormularioGeneros"
import { generoCreacionDTO, generoDTO } from "./generos.model"

export default function EditarGeneros(){
   

    return(
        <EditarEntidad<generoCreacionDTO,generoDTO>
        url={urlGeneros} urlIndice='/generos' nombreEntidad='Generos'>
            {(entidad,editar)=>
                <FormularioGeneros 
                modelo={entidad}
                onSubmit={async  valores=>{
                    await editar(valores)
                }}/>
            
            }
        </EditarEntidad>
    )
}