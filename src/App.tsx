import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import rutas from './route-config';
import configurarValidaciones from './validaciones';
import AutentizacionContext from './auth/AutentizacionContext';

import Menu from './utils/Menu';
import { useEffect, useState } from 'react';
import { claim } from './auth/auth.model';
import { obtenerClaims } from './auth/ManejadorJwt';

configurarValidaciones();

function App() {  
  const[claims,setClaims] = useState<claim[]>([])
  function actualizar(claims:claim[]){
    setClaims(claims)
  }

  useEffect(()=>{
    setClaims(obtenerClaims())
  },[])

  function esAdmin(){
    //funcion para validar si el usuario tiene el rol admin
    return claims.findIndex(claim=> claim.nombre==='role' && claim.valor === 'admin') > -1
  }

  return(
    <>
      <BrowserRouter>
        <AutentizacionContext.Provider value={{claims,actualizar}}>
          <Menu/>
          <div className="container">
            <Switch>
              {rutas.map(ruta =>
                <Route key={ruta.path} 
                path={ruta.path} 
                exact={ruta.exact}>
                  {ruta.esAdmin && !esAdmin()?//validar si el usuario tiene permisos para acceder a la ruta seleccionada
                    <>No tiene permiso para acceder a esta ruta</>
                    :<ruta.componente/>}
                </Route>)}
            </Switch>
          </div>
        </AutentizacionContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App;
