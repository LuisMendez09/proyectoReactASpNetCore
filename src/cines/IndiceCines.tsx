import { urlCines } from "../utils/endpoints";
import IndiceEntidad from "../utils/IndiceEntidad";
import { cinesDTO } from "./Cines.mode";

export default function IndiceCines(){
    return(
        <>
            <IndiceEntidad<cinesDTO>
            url={urlCines} urlCreacion='cines/crear' titulo="Cines" 
            nombreEntidad='Cine'>
                {(cines,botones)=><>
                    <thead>
                        <tr>
                            <th style={{width: '200px'}}></th>
                            <th>Nombre</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cines?.map(cine=>
                            <tr key={cine.id}>
                                <td>
                                    {botones(`cines/editar/${cine.id}`,cine.id)}
                                </td>
                                <td>
                                    {cine.nombre}
                                </td>
                            </tr>)}
                    </tbody>
                </>}
                
            </IndiceEntidad>
        </>
    )
}