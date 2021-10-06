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

export interface CrudRoom{
    ok: boolean,
    msg: string,
    roomData: Room,
    roomsData: Room[]
}

export interface Room{
    id: number,
    name: string,
    rows: number,
    seats: number,
    status: boolean
}

export interface CrudShow{
    ok: boolean,
    msg: string,
    movieShow: Show,
    movieShows: Show[]
}

export interface Show{
    id: number,
    price: number,
    start_time: string,
    end_time: string,
    day: string,
    status: boolean,
    id_room: number,
    id_movie: number
}

