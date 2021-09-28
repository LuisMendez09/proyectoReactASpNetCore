import axios from "axios"
import Swal from "sweetalert2"
import Button from "../utils/Button"
import Confirmar from "../utils/Confirmar"
import { urlCuentas } from "../utils/endpoints"
import IndiceEntidad from "../utils/IndiceEntidad"
import { usuarioDTO } from "./auth.model"

export default function IndiceUsuario(){
    async function hacerAdmin(id:string) {
        await editarAdmin(`${urlCuentas}/haceradmin`,id)
    }

    async function removerAdmin(id:string) {
        await editarAdmin(`${urlCuentas}/removeradmin`,id)
    }

    async function editarAdmin(url:string,id:string) {
        await axios.post(url,JSON.stringify(id),{
            headers:{'content-Type':'application/json'}
        })

        Swal.fire({title:'Exito',text:'Opereacion realizada con exito',icon:'success'})
    }

    return(
        <IndiceEntidad<usuarioDTO>
            url={`${urlCuentas}/listadousuarios`}
            titulo="Usuarios">

            { usuarios =><>
                <thead>
                    <tr>
                        <th></th>
                        <th>Nombre</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios?.map(usuario=><tr key={usuario.id}>
                        <td>
                            <Button onClick={()=>
                                    Confirmar(()=>hacerAdmin(usuario.id),
                                                `¿Desea hacer a ${usuario.email} admin?`,'Realizar')}>
                                Hacer admin
                            </Button>
                            <Button className='btn btn-danger' style={{marginLeft:'1rem'}}
                                    onClick={()=>
                                    Confirmar(()=>removerAdmin(usuario.id),
                                                `¿Desea hacer a ${usuario.email} admin?`,'Realizar')}>
                                Remover admin
                            </Button>
                        </td>
                        <td>
                            {usuario.email}
                        </td>
                    </tr>)}
                </tbody>
            </>}
        
        </IndiceEntidad>
    )
}
