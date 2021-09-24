import CrearActores from "./actores/CrearActores";
import EditarActores from "./actores/EditarActores";
import IndiceActores from "./actores/IndiceActores";

import CrearCines from "./cines/CrearCines";
import EditarCines from "./cines/EditarCines";
import IndiceCines from "./cines/IndiceCines";

import CrearGeneros from "./generos/CrearGeneros";
import EditarGeneros from "./generos/EditarGenero";
import IndiceGeneros from "./generos/IndiceGeneros";

import LandingPage from "./LandingPage";

import CrearPeliculas from "./peliculas/CrearPeliculas";
import DetallePelicula from "./peliculas/DetallePelicula";
import EditarPeliculas from "./peliculas/EditarPeliculas";
import FiltroPeliculas from "./peliculas/FiltroPeliculas";
import RedireccionarALanding from "./utils/RedireccionarALanding";

const rutas = [
    {path:'/generos/crear', componente: CrearGeneros},
    {path:'/generos/editar/:id(\\d+)', componente: EditarGeneros},
    {path:'/generos', componente: IndiceGeneros, exact: true},

    {path:'/actores/crear', componente: CrearActores},
    {path:'/actores/editar/:id(\\d+)', componente: EditarActores},
    {path:'/actores', componente: IndiceActores, exact: true},

    {path:'/cines/crear', componente: CrearCines},
    {path:'/cines/editar/:id(\\d+)', componente: EditarCines},
    {path:'/cines', componente: IndiceCines, exact: true},

    {path:'/peliculas/:id(\\d+)', componente: DetallePelicula},
    {path:'/peliculas/crear', componente: CrearPeliculas},
    {path:'/peliculas/editar/:id(\\d+)', componente: EditarPeliculas},
    {path:'/peliculas/filtrar', componente: FiltroPeliculas},

    {path:'/', componente: LandingPage, exact: true},
    {path: '*',componente:RedireccionarALanding}
];

export default rutas;