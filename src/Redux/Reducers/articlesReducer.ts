import { element } from "prop-types"

const initialState: any = []

export const articlesReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'SET_ARTICLES':
            return [...state, action.payload]
            break
        default: break
    }
    return state
}
