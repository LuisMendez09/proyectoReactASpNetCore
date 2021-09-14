import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import Button from "../utils/Button";
import FormGroupText from "../utils/FormGroupText";
import { actorCreacionDTO } from "./actores.model";
import * as Yup from 'yup'
import FormGroupFecha from "../utils/FormGroupFecha";
import FormGroupImagen from "../utils/FormGroupImagen";
import FormGroupMarkdown from "../utils/FormGroupMarkdown";

export default function FormularioActores(porps:formularioActoresProps){
    return(
        <Formik initialValues={porps.modelo}
        onSubmit={porps.onSubmit}
        validationSchema={Yup.object({
            nombre: Yup.string().required('Este campo es requerido').primeraLetraMayuscula(),
            fechaNacimiento: Yup.date().nullable().required('Este campo es requerido')
        })}
        >
            {(formikProps)=>(
                <Form>
                    <FormGroupText campo='nombre' label='Nombre'/>
                    <FormGroupFecha campo="fechaNacimiento" label='Fecha Nacimiento'/>
                    <FormGroupImagen campo='foto' label='Foto' imagenURL={porps.modelo.fotoURL}/>
                    <FormGroupMarkdown campo='biografia' label='Biobragia'/>

                    <Button disabled={formikProps.isSubmitting}
                        type='submit'>Salvar</Button>
                    <Link className='btn btn-secondary' to='/actores'>Cancelar</Link>
                </Form>
            )}
        </Formik>
    )
}

interface formularioActoresProps{
    modelo: actorCreacionDTO;
    onSubmit(valores: actorCreacionDTO,accion: FormikHelpers<actorCreacionDTO>):void;
}