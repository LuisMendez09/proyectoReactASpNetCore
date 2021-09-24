import { urlGeneros } from "../utils/endpoints";
import IndiceEntidad from "../utils/IndiceEntidad";
import { generoDTO } from "./generos.model";

export default function IndiceGeneros(){
    return(
        <>
            <IndiceEntidad<generoDTO>
            url={urlGeneros} urlCreacion='generos/crear' titulo="Generos" 
            nombreEntidad='Genero'>
                {(generos,botones)=><>
                    <thead>
                        <tr>
                            <th style={{width: '200px'}}></th>
                            <th>Nombre</th>
                        </tr>
                    </thead>
                    <tbody>
                        {generos?.map(genero=>
                            <tr key={genero.id}>
                                <td>
                                    {botones(`generos/editar/${genero.id}`,genero.id)}
                                </td>
                                <td>
                                    {genero.nombre}
                                </td>
                            </tr>)}
                    </tbody>
                </>}
                
            </IndiceEntidad>
                
                    
        </>
    )
}