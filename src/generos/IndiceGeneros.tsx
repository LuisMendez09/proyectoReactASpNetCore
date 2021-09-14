import { Link } from "react-router-dom";

export default function IndiceGeneros(){
    return(
        <>
            <h3>Indice generos</h3>
            <Link to='generos/crear'>Crear Genero</Link>
        </>
    )
}