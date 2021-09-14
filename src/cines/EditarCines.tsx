import FormularioCines from "./FormularioCines";

export default function EditarCines(){
    return(
        <>
           <h3>Editar cines</h3>
           <FormularioCines 
                modelo={{nombre:'Editar cines',
                latitud:30.50663751338264,
                longitud:-115.92919349670412}}
                onSubmit={valor => console.log(valor)}/>
        </>
    )
}