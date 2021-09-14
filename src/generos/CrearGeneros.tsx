import FormularioGeneros from "./FormularioGeneros";

export default function CrearGeneros(){


    return(
        <>
            <h3>Crear generos</h3>
            <FormularioGeneros modelo={{nombre: ''}}
                onSubmit={async  valores=>{
                    await new Promise(r=>{setTimeout(r,3000)})
                    console.log(`3000 ${valores.nombre}`)
                }}
            />
            
        </>
    )
}