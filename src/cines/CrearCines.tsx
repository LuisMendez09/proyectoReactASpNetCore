import FormularioCines from "./FormularioCines";

export default function CrearCines(){
    return(
        <>
            <h3>Crear cine</h3>
            <FormularioCines 
                modelo={{nombre:''}}
                onSubmit={valor => console.log(valor)}/>
        </>
    )
}