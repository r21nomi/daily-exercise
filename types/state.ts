import { Movie } from "~/types/entity"

export interface RootState {
    version: string
}

export interface MoviesState {
    items: Movie[]
}
