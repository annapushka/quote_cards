import { QuoteAction, QuoteActionTypes, QuoteState } from "../../types/quote"


const initialState: QuoteState = {
    quotes: [],
    loading: false,
    error: null,
    likeFilter: false
}

export const quoteReduser = (state = initialState, action: QuoteAction): QuoteState => {
    switch (action.type) {
        case QuoteActionTypes.FETCH_QUOTES:
            return { loading: true, error: null, quotes: [], likeFilter: false }
        case QuoteActionTypes.FETCH_QUOTES_SUCCESS:
            return { loading: false, error: null, quotes: action.payload, likeFilter: false }
        case QuoteActionTypes.FETCH_QUOTES_ERROR:
            return { loading: false, error: action.payload, quotes: [], likeFilter: false }
        case QuoteActionTypes.SET_LIKE_FITER:
            return { ...state, likeFilter: action.payload }
        default:
            return state
    }
}

