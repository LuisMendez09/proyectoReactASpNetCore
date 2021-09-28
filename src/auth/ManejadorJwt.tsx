import { claim, respuetaAutenticacion } from "./auth.model";

const llaveToken = 'token'
const llaveExpiracion = 'token-expiracion'

export function guardarTokenLocalStore(autenticacion:respuetaAutenticacion){
    localStorage.setItem(llaveToken,autenticacion.token)
    localStorage.setItem(llaveExpiracion,autenticacion.expiracion.toString())
}

export function obtenerClaims():claim[]{
    const token = localStorage.getItem(llaveToken)

    if(!token){
        return []
    }

    const expiracion = localStorage.getItem(llaveExpiracion)!
    const expiracionFecha = new Date(expiracion)

    if(expiracionFecha<= new Date()){
        logout()
        return [];
    }

    const dataToken = JSON.parse(atob(token.split('.')[1])) //obtencion de los claims
    const respuesta: claim[]=[]
    for(const propiedad in dataToken){
        respuesta.push({nombre:propiedad,valor:dataToken[propiedad]})
    }

    return respuesta;
}

export function logout(){
    localStorage.removeItem(llaveToken)
    localStorage.removeItem(llaveExpiracion)
}