import { Form, Formik, FormikHelpers } from "formik";
import { credencialesUsuario } from "./auth.model";
import * as Yup from 'yup';
import FormGroupText from "../utils/FormGroupText";
import Button from "../utils/Button";
import { Link } from "react-router-dom";

export default function FormularioAuth(props:formularioAuthProps){
    return(
        <Formik initialValues={props.modelo}
        onSubmit={props.onSubmit}
        validationSchema={Yup.object({
            email:Yup.string().required('Esta campo es requerido')
            .email('Debe de colocar un email valido'),

            password:Yup.string().required('Esta campo es requerido')            
        })}>
            {formikProps =>(
                <Form>
                    <FormGroupText label="Email" campo='email'/>
                    <FormGroupText label="Password" campo='password' type='password'/>

                    <Button disable={formikProps.isSubmitting} type='submit'>Enviar</Button>
                    <Link className='btn btn-secondary' to='/'>Cancelar</Link>
                </Form>
            )}

        </Formik>
    )
}

interface formularioAuthProps{
    modelo:credencialesUsuario;
    onSubmit(valores:credencialesUsuario,accion:FormikHelpers<credencialesUsuario>):void
    
}
