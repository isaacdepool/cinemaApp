export interface CrudUser{
    ok: boolean,
    msg: string,
    id?: string,
    name?: string,
    email?: string,
    token?:string,
    userData?: User,
    usersData?: User[]
}

export interface User{
    id: string,
    name: string,
    last_name?: string,
    date_birth?: string,
    email: string,
    password?: string,
    direction?: string,
    phone?: string,
    status?: boolean
}