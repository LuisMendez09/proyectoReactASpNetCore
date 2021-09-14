import { Form, Formik, FormikHelpers } from "formik";
import { cinesCreacionDTO } from "./Cines.mode";
import * as Yup from 'yup'
import FormGroupText from "../utils/FormGroupText";
import Button from "../utils/Button";
import { Link } from "react-router-dom";
import MapaFormulario from "../utils/MapaFormulario";
import { coordenadasDTO } from "../utils/Coordenadas.model";

export default function FormularioCines(props: formularioCinesProps){
    function transformarCoordenadas():coordenadasDTO[]|undefined{
        if(props.modelo.latitud && props.modelo.longitud){
            const respuesta: coordenadasDTO = {lat: props.modelo.latitud,
                                               lng: props.modelo.longitud}
            return [respuesta];
        }

        return undefined;
    }

    return(
        <Formik 
            initialValues={props.modelo}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                nombre: Yup.string().required('Este Campo es requerido').primeraLetraMayuscula()
            })}>

            {(formikProps)=>(
                <Form>
                    <FormGroupText label='Nombre' campo='nombre'/>
                    <div style={{marginBottom:'1rem'}}>
                        <MapaFormulario 
                            campoLat='latitud' 
                            campoLng='longitud'
                            coodenadas={transformarCoordenadas()}/>
                    </div>
                    
                    <Button disabled={formikProps.isSubmitting} type='submit'>Salvar</Button>
                    <Link className='btn btn-secondary' to='/cines'>Cancelar</Link>
                </Form>
            )}
            

        </Formik>
    )
}

interface formularioCinesProps{
    modelo: cinesCreacionDTO;
    onSubmit(valores: cinesCreacionDTO,acciones: FormikHelpers<cinesCreacionDTO>): void;

}