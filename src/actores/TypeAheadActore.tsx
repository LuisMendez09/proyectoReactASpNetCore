import { useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import { ReactElement } from "react-markdown/lib/react-markdown";
import { actorPeliculaDTO } from "./actores.model";

export default function TypeAheadActores(props: typeAheadActoresProps){
    const actores:actorPeliculaDTO[] =[
        {Id:1, nombre:'Tomy',personaje:'',foto:'https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg'},
        {Id:2, nombre:'Roberto',personaje:'',foto:'https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg'},
        {Id:3, nombre:'Paco',personaje:'',foto:'https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg'},
    ]

    const seleccion:actorPeliculaDTO[]=[];

    const[elementoArrastrado,setElementoArrastrado]=
    useState<actorPeliculaDTO|undefined>(undefined)
    function manejarDragStart(actor:actorPeliculaDTO){
        setElementoArrastrado(actor)
    }

    function manejarDragOver(actor:actorPeliculaDTO){
        if(!elementoArrastrado){
            return;
        }

        if(actor.Id!== elementoArrastrado.Id){
            const elementoArrastradoIndice = 
                props.actores.findIndex(x=>x.Id === elementoArrastrado.Id)
            const actorIndice = 
                props.actores.findIndex(x=>x.Id === actor.Id)

            const actores = [...props.actores]
            actores[actorIndice] = elementoArrastrado
            actores[elementoArrastradoIndice] = actor
            props.onAdd(actores)
        }
    }

    return(
       <>
        <label>Actores</label>
        <Typeahead
            id='typeAhead'
            onChange={actores=>{
                if(props.actores.findIndex(x=>x.Id === actores[0].Id)===-1){
                    props.onAdd([...props.actores,actores[0]])
                }
            }}
            options={actores}
            labelKey={actor=>actor.nombre}
            filterBy={['nombre']}
            placeholder='Escriba el nombre del actor...'
            minLength={2}
            flip={true}
            selected={seleccion}
            renderMenuItemChildren={actor=>(
                <>
                    <img alt='imagen actor' src={actor.foto}
                    style={{
                        height:'64px',
                        marginRight:'10px',
                        width:'64px'
                    }}/>
                    <span>{actor.nombre}</span>
                </>
            )}
        />

        <ul className='list-group'>
            {props.actores.map(actor => 
                <li 
                draggable={true}
                onDragStart={()=>manejarDragStart(actor)}
                onDragOver={()=>manejarDragOver(actor)}
                className='list-group-item list-group-item-action'
                key={actor.Id}>
                    {props.listadoUI(actor)}
                    <span className='badge badge-primary badge-pill pointer'
                    style={{marginLeft: '0.5rem'}}
                    onClick={()=>props.onRemove(actor)}
                    >
                        X
                    </span>
                </li>)}
        </ul>
       </>
    )
}

interface typeAheadActoresProps{
    actores: actorPeliculaDTO[];
    onAdd(actores:actorPeliculaDTO[]):void;
    listadoUI(actor:actorPeliculaDTO):ReactElement;
    onRemove(actor:actorPeliculaDTO):void;
}