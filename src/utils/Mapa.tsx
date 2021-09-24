import { MapContainer, Marker, Popup, TileLayer, useMapEvent } from "react-leaflet"
import L from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import 'leaflet/dist/leaflet.css'
import { coordenadasDTO } from "./Coordenadas.model"
import { useState } from "react"

let defaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor:[16,37]
})

L.Marker.prototype.options.icon = defaultIcon;

export default function Mapa(props: mapaProps){
    const [coordenadas,setCoordenadas] = useState<coordenadasDTO[]>(props.coordenadas)

    return(
        <MapContainer
            center={[30.507977, -115.925567]}
            zoom={14}
            style={{height: props.height}}
        >
            <TileLayer attribution='React Peliculas'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
            
            {props.soloLectura?null:<ClickMapa setPunto={coordenadas=>{
                setCoordenadas([coordenadas])
                props.manejarClikMapa(coordenadas)
            }}/>
}
            {coordenadas.map(coordenada=>
                <Marcador key={coordenada.lat+coordenada.lng} {...coordenada}/>)}
        </MapContainer>
    )
}

function ClickMapa(props: clickMapaProps){
    useMapEvent('click',e=>{
        props.setPunto({lat:e.latlng.lat, lng: e.latlng.lng})
    })
    return null;
}

interface clickMapaProps{
    setPunto(coordenadas: coordenadasDTO): void
}

function Marcador(props: coordenadasDTO){
    return(
        <Marker position={[props.lat,props.lng]}>
            {props.nombre?
                <Popup>{props.nombre}</Popup>
            :null}
        </Marker>
    )
}

interface mapaProps{
    height: string;
    coordenadas: coordenadasDTO[];
    manejarClikMapa(coordenadas: coordenadasDTO):void
    soloLectura:boolean;
}

Mapa.defaultProps = {
    height: '500px',
    soloLectura:false,
    manejarClikMapa:()=>{}
}