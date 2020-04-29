import { MoviesState } from "~/types/state"
import { Movie } from "~/types/entity"

const LOCAL_STORAGE_KEY_MOVIES = "movies"

export const state = (): MoviesState => ({
    items: [
        {
            id: "id_1",
            title: "Day 1",
            url: "https://pridebody.jp/lp1/tvmw/",
            isChecked: false
        },
        {
            id: "id_2",
            title: "Day 2",
            url: "https://pridebody.jp/lp1/tvmw/",
            isChecked: false
        },
        {
            id: "id_3",
            title: "Day 3",
            url: "https://pridebody.jp/lp1/tvmw/",
            isChecked: false
        },
        {
            id: "id_4",
            title: "Day 4",
            url: "https://pridebody.jp/lp1/tvmw/",
            isChecked: false
        },
        {
            id: "id_5",
            title: "Day 5",
            url: "https://pridebody.jp/lp1/tvmw/",
            isChecked: false
        },
        {
            id: "id_6",
            title: "Day 6",
            url: "https://pridebody.jp/lp1/sblp/",
            isChecked: false
        },
        {
            id: "id_7",
            title: "Day 7",
            url: "https://pridebody.jp/lp1/sblp/",
            isChecked: false
        },
        {
            id: "id_8",
            title: "Day 8",
            url: "https://pridebody.jp/lp1/sblp/",
            isChecked: false
        },
        {
            id: "id_9",
            title: "Day 9",
            url: "https://pridebody.jp/lp1/sblp/",
            isChecked: false
        },
        {
            id: "id_10",
            title: "Day 10",
            url: "https://pridebody.jp/lp1/sblp/",
            isChecked: false
        },
        {
            id: "id_11",
            title: "Day 11",
            url: "https://pridebody.jp/lp1/rhas/",
            isChecked: false
        },
        {
            id: "id_12",
            title: "Day 12",
            url: "https://pridebody.jp/lp1/rhas/",
            isChecked: false
        },
        {
            id: "id_13",
            title: "Day 13",
            url: "https://pridebody.jp/lp1/rhas/",
            isChecked: false
        },
        {
            id: "id_14",
            title: "Day 14",
            url: "https://pridebody.jp/lp1/rhas/",
            isChecked: false
        },
        {
            id: "id_15",
            title: "Day 15",
            url: "https://pridebody.jp/lp1/rhas/",
            isChecked: false
        },
        {
            id: "id_16",
            title: "Day 16",
            url: "https://pridebody.jp/lp1/qxvm/",
            isChecked: false
        },
        {
            id: "id_17",
            title: "Day 17",
            url: "https://pridebody.jp/lp1/qxvm/",
            isChecked: false
        },
        {
            id: "id_18",
            title: "Day 18",
            url: "https://pridebody.jp/lp1/qxvm/",
            isChecked: false
        },
        {
            id: "id_19",
            title: "Day 19",
            url: "https://pridebody.jp/lp1/qxvm/",
            isChecked: false
        },
        {
            id: "id_20",
            title: "Day 20",
            url: "https://pridebody.jp/lp1/qxvm/",
            isChecked: false
        }
    ]
})

export const mutations = {
    setMovies(state: MoviesState, movies: Movie[]) {
        state.items = movies
    },
    setChecked(state: MoviesState, id: string) {
        const newList = state.items.map((movie: Movie) => {
            if (movie.id === id) {
                movie.isChecked = true
            }
            return movie
        })
        state.items = newList
    },
    deleteChecked(state: MoviesState, id: string) {
        const newList = state.items.map((movie: Movie) => {
            if (movie.id === id) {
                movie.isChecked = false
            }
            return movie
        })
        state.items = newList
    }
}

export const actions = {
    init({ commit }) {
        const cache: string =
            localStorage.getItem(LOCAL_STORAGE_KEY_MOVIES) || ""
        const movies: Movie[] = JSON.parse(cache)
        commit("setMovies", movies)
    },
    updateCheckState(
        { commit, state },
        payload: { id: string; isChecked: boolean }
    ) {
        if (payload.isChecked) {
            commit("setChecked", payload.id)
        } else {
            commit("deleteChecked", payload.id)
        }
        localStorage.setItem(
            LOCAL_STORAGE_KEY_MOVIES,
            JSON.stringify(state.items)
        )
    }
}
