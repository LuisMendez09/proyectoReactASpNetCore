import { useParams } from "react-router"
import FormularioGeneros from "./FormularioGeneros"

export default function EditarGeneros(){
    const {id}:any = useParams()

    return(
        <>
            <h3>editar generos</h3>
            <h4>El id es {id}</h4>

            <FormularioGeneros modelo={{nombre: 'Accion'}}
                onSubmit={async  valores=>{
                    await new Promise(r=>{setTimeout(r,1500)})
                    console.log(`1500 ${valores}`)
                }}
            />
        </>
    )
}