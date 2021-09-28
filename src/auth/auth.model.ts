export interface claim{
    nombre:string;
    valor:string;
}

export interface credencialesUsuario{
    email:string;
    password:string;
}

export interface respuetaAutenticacion{
    token:string;
    expiracion:Date,
}

export interface usuarioDTO{
    id:string;
    email:string;
}