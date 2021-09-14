import FormularioActores from "./FormularioActores";

export default function CrearActores(){
    return(
        <>
            <h3>Crear actores</h3>
            <FormularioActores 
            modelo={{nombre:"", fechaNacimiento:undefined}}
            onSubmit={valores=>console.log(valores)} />
        </>
        
       
    )
}