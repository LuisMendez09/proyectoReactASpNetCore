import { Form, Formik, FormikHelpers } from "formik";
import { peliculaCreacionDTO } from "./Pelicula.model";
import  * as Yup from 'yup'
import FormGroupText from "../utils/FormGroupText";
import FromGroupCheckbox from "../utils/FormGroupCheckbox";
import FormGroupFecha from "../utils/FormGroupFecha";
import FormGroupImagen from "../utils/FormGroupImagen";
import Button from "../utils/Button";
import { Link } from "react-router-dom";
import SelectorMultiple, { selectorMultipleModel } from "../utils/SelectorMultiple";
import { generoDTO } from "../generos/generos.model";
import { useState } from "react";
import { cinesDTO } from "../cines/Cines.mode";
import TypeAheadActores from "../actores/TypeAheadActore";
import { actorPeliculaDTO } from "../actores/actores.model";
import FormGroupMarkdown from "../utils/FormGroupMarkdown";

export default function FormularioPeliculas(props: formularioPeliculasProps){
    const [generosSeleccionados, setGenerosSeleccionados] = 
    useState(maper(props.generosSeleccionados));

    const [generosNoSeleccionados, setGenerosNoSeleccionados] = 
    useState(maper(props.generosNoSeleccionados));

    const [cinesSeleccionados, setCinesSeleccionados] = 
    useState(maper(props.cinesSeleccionados));

    const [cinesNoSeleccionados, setCinesNoSeleccionados] = 
    useState(maper(props.cinesNoSeleccionados));

    const[actoresSeleccionados,setActoresSeleccionados] 
    = useState<actorPeliculaDTO[]>(props.actoresSeleccionados)

    function maper(arreglo:{id:number, nombre:string}[]):selectorMultipleModel[]{
        return arreglo.map(valor=>{
            return {llave:valor.id,valor:valor.nombre}
        })
    }

    return(
        <Formik
            initialValues={props.modelo}
            onSubmit={(valores,acciones)=>{
                valores.generosIds = generosSeleccionados.map(valor=>valor.llave)
                valores.cinesIds = cinesSeleccionados.map(valor=>valor.llave)
                valores.actores = actoresSeleccionados
                
                props.onSubmit(valores,acciones)
            }}
            validationSchema={Yup.object({
                titulo: Yup.string().required('Este campo es requerido').primeraLetraMayuscula()
            })}
        >
            {(formikProps)=>(
                <Form>
                    <FormGroupText label='Título' campo='titulo'/>
                    <FromGroupCheckbox label='En cines' campo='enCines'/>
                    <FormGroupText label='Trailer' campo='trailer'/>
                    <FormGroupFecha label='Fecha Lanzamineto' campo='fechaLanzamiento'/>
                    <FormGroupImagen label='poster' campo='poster' imagenURL={props.modelo.posterURL}/>
                    <FormGroupMarkdown label='Resumen' campo='resumen'/>

                    <div className='form-group'>
                        <label>Generos</label>
                        <SelectorMultiple
                            seleccionados={generosSeleccionados}
                            noSeleccionados={generosNoSeleccionados}
                            onChange={(seleccionados,noSeleccionados)=>{
                                setGenerosSeleccionados(seleccionados)
                                setGenerosNoSeleccionados(noSeleccionados)
                            }}
                        />
                    </div>

                    <div className='form-group'>
                        <label>Cines</label>
                        <SelectorMultiple
                            seleccionados={cinesSeleccionados}
                            noSeleccionados={cinesNoSeleccionados}
                            onChange={(seleccionados,noSeleccionados)=>{
                                setCinesSeleccionados(seleccionados)
                                setCinesNoSeleccionados(noSeleccionados)
                            }}
                        />
                    </div>

                    <div className='form-group'>
                        <TypeAheadActores
                            onAdd={actores=>{
                                setActoresSeleccionados(actores)
                            }}
                            onRemove={actor=>{
                                const actores = actoresSeleccionados
                                .filter(x=>x!==actor)
                                setActoresSeleccionados(actores)
                            }}
                            actores={actoresSeleccionados}
                            listadoUI={(actor:actorPeliculaDTO)=>
                            <>
                                {actor.nombre} / <input placeholder='Personaje'
                                type='text' value={actor.personaje?actor.personaje:""}
                                onChange={e=>{
                                    const indice = actoresSeleccionados
                                    .findIndex(x=>x.id===actor.id);

                                    const actores = [...actoresSeleccionados]
                                    actores[indice].personaje = e.currentTarget.value
                                    setActoresSeleccionados(actores)
                                }}    
                                />
                            </>}
                        />
                    </div>

                    <Button 
                        disabled={formikProps.isSubmitting}
                        type='submit'>Enviar</Button>
                        <Link className='btn btn-secondary' to='/'>Cancelar</Link>
                </Form>
            )}
        </Formik>
    )
}

interface formularioPeliculasProps{
    modelo: peliculaCreacionDTO;
    onSubmit(valores: peliculaCreacionDTO,acciones: FormikHelpers<peliculaCreacionDTO>):void
    generosSeleccionados: generoDTO[];
    generosNoSeleccionados: generoDTO[];
    cinesSeleccionados: cinesDTO[];
    cinesNoSeleccionados: cinesDTO[];
    actoresSeleccionados: actorPeliculaDTO[];
}