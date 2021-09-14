import FormularioActores from "./FormularioActores";

export default function EditarActores(){
    return(
        <>
            <h3>Editar actores</h3>
            <FormularioActores 
            modelo={{
                nombre:"Tomy", 
                biografia: `# titulo
elstro esa en **negritas**`,
                fechaNacimiento:new Date('1996-06-01T00:00:00'),
                fotoURL: 'https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg'}}
            onSubmit={valores=>console.log(valores)} />
        </>
    )
}