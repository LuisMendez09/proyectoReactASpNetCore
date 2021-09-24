import { urlActores } from "../utils/endpoints";
import IndiceEntidad from "../utils/IndiceEntidad";
import { actorDTO } from "./actores.model";

export default function IndiceActores(){
    return(
        <>
            <IndiceEntidad<actorDTO>
            url={urlActores} urlCreacion='actores/crear' titulo="Actores" 
            nombreEntidad='actor'  >
                {(actores,botones)=><>
                    <thead>
                        <tr>
                            <th style={{width: '200px'}}></th>
                            <th>Nombre</th>
                        </tr>
                    </thead>
                    <tbody>
                        {actores?.map(actor=>
                            <tr key={actor.id}>
                                <td>
                                    {botones(`actores/editar/${actor.id}`,actor.id)}
                                </td>
                                <td>
                                    {actor.nombre}
                                </td>
                            </tr>)}
                    </tbody>
                </>}

            </IndiceEntidad>
        </>
        
    )
}