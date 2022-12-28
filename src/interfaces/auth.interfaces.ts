export interface iLogin{
    username: string,
    password: string 
}
export interface iResponse {
    status: boolean,
    data: iLoginResponse,
    error: any
}
export interface iLoginResponse{
    access_token: string,
    token_type: string,
    expires_in: number,
    scope: string,
    nombre: string,
    rol: iRol ,
    username: string,
    jti: string
}

export interface iAuthState {
    userInfo: iUserAuth | {},
    access_token: string,
    rol: iRol | [],
    isAuth: boolean,
    isLoading: boolean,
    errors: string | string []

}

interface iUserAuth {
    username: string,
    nombre: string,
}

 interface iRol{
    id: number,
    nombre: string,
    modulos: iModulo
}

interface iModulo {
    id: number,
    nombre: string,
    icon: string,
    pantallas : iPantallas
    estado: any
}

interface iPantallas {
    id: number,
    nombre: string,
    icon: string | null,
    link: string,
    estado: any
}