import Swal from 'sweetalert2'

export default function Confirmar(
    onConfirm: any,
    titulo: string = '¿desea borrar el registro?',
    textoBotonConfirmacion:string = "Borrar"
){
    Swal.fire({
        title : titulo,
        confirmButtonText : textoBotonConfirmacion,
        icon:'warning',
        showCancelButton:true,
        confirmButtonColor:'#3085d6',
        cancelButtonColor:'#d33'
    }).then(result=>{
        if(result.isConfirmed){
            onConfirm();
        }
    })
}