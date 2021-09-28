import { ErrorMessage, Field } from "formik";
import MostrarErrorCampo from "./MostrarErrorCampo";

export default function FormGroupText(props: formGroupText){
    return(
        <div className='form-group'>
            {props.label ? <label htmlFor={props.campo}>{props.label}</label> : null}
            {/*Field se usa para aregar un textfield al formulario */}
            <Field name={props.campo} placeholder={props.placeholder} className='form-control' type={props.type}/>
            {/*ErrorMessage se usa para mostar errores en los formularios*/}
            <ErrorMessage name={props.campo}>{mensaje =>
                <MostrarErrorCampo mensaje={mensaje}/>
            }
            </ErrorMessage>
        </div>

    )
}

interface formGroupText{
    campo: string;
    label?: string;
    placeholder?: string;
    type: 'text'|'password';
}

FormGroupText.defaultProps={
    type: 'text'
}