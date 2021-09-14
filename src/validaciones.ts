//se crear todas las validaciones personalizad que s van a utilizar en los formularios

import * as Yup from "yup"

export default function configurarValidaciones(){
    Yup.addMethod(Yup.string,'primeraLetraMayuscula',function(){
        return this.test('promera-letra-mayuscula',
                         'La primera letra debe de ser mayuscula',
                         function(valor){
                             if(valor && valor.length>0){
                                 const primeraLetra = valor.substring(0,1)
                                 return primeraLetra === primeraLetra.toUpperCase()
                             }

                             return true
                         })
    })
}