import { Field } from "formik";

export default function FromGroupCheckbox(props: fromGroupCheckboxProps){
    return(
        <div className='form-group form-check'>
            
            <Field id={props.campo} name={props.campo} type='checkbox' className='form-check-input'/>
            <label htmlFor={props.campo}>{props.label}</label>
          
        </div>

    )
}

interface fromGroupCheckboxProps{
    campo: string;
    label: string;
}