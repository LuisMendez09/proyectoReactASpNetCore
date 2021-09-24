import EditarEntidad from "../utils/EditarEntidad";
import { urlCines } from "../utils/endpoints";
import { cinesCreacionDTO, cinesDTO } from "./Cines.mode";
import FormularioCines from "./FormularioCines";

export default function EditarCines(){
    return(
        <EditarEntidad<cinesCreacionDTO,cinesDTO>
        url={urlCines} urlIndice='/cines' nombreEntidad='Cines'>
            {(entidad,editar)=>
                <FormularioCines
                modelo={entidad}
                onSubmit={async  valores=>{
                    await editar(valores)
                }}/>
            
            }
        </EditarEntidad>
    )
}