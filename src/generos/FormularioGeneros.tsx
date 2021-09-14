import { Form, Formik, FormikHelpers } from "formik";//libreria para facilitar creacion de formularios
import { Link } from "react-router-dom";
import Button from "../utils/Button";
import * as Yup from "yup" //para utilizar validaciones en los formularios
import FormGroupText from "../utils/FormGroupText";
import { generoCreacionDTO } from "./generos.model";


export default function FormularioGeneros(props:formularioGenerosProps){
    return(
        <Formik 
            initialValues={props.modelo} 
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                nombre: Yup.string().required('Este campo es reqeido').primeraLetraMayuscula()
            })}
            >
                {(formikProps)=>(
                    <Form>
                        <FormGroupText campo="nombre" label="Nombre"/>
                        <Button disabled={formikProps.isSubmitting} type="submit">Salvar</Button>
                        <Link className='btn btn-secondary' to='/generos'>
                            Cancelar
                        </Link>
                    </Form>
                )}
            </Formik>
    )
}

interface formularioGenerosProps{
    modelo: generoCreacionDTO
    onSubmit(valores: generoCreacionDTO,accion: FormikHelpers<generoCreacionDTO>):void;
}