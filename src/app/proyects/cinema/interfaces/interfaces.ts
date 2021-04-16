export interface Menu{

    label: string,
    redirecTo: string,
}

export interface CrudMovie{
    ok: boolean,
    msg: string,
    movieData?: Movie,
    moviesData?: Movie[]
}

export interface Movie{
    id: number,
    name: string,
    synopsis: string,
    premiere: string,
    vertical_poster: string,
    horizontal_poster: string,
    actors: string,
    directors: string,
    genre: string,
    rating: string,
    duration: number,
    role: string,
    status: boolean
}