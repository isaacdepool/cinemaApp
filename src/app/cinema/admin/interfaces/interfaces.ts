
export interface CrudAdmin{
    ok: boolean,
    msg: string,
    id?: string,
    username?: string,
    type?: string,
    token: string,
    adminData?: Admin,
    adminsData?: Admin[],
}

export interface Admin{
    id: string,
    username: string,
    password?: string,
    type: string,
    status?: boolean
}