import { useFormikContext } from "formik";
import { coordenadasDTO } from "./Coordenadas.model";
import Mapa from "./Mapa";

export default function MapaFormulario(props: mapaFormularioProps){
    const{values} = useFormikContext<any>()

    function actualziarMapa(coordenadas: coordenadasDTO){
        values[props.campoLat] = coordenadas.lat;
        values[props.campoLng] = coordenadas.lng;
    }

    return(
        <Mapa
            coordenadas={props.coodenadas}
            manejarClikMapa={actualziarMapa}
        />
    )
}

interface mapaFormularioProps{
    coodenadas: coordenadasDTO[];
    campoLat: string;
    campoLng: string;
}

MapaFormulario.defaultProps={
    coodenadas:[]
}