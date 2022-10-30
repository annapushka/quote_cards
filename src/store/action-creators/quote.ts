import axios from "axios";
import { Dispatch } from "redux";
import { QuoteAction, QuoteActionTypes } from "../../types/quote";


const url: string = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

export const fetchQuotes = () => {
    return async (dispatch: Dispatch<QuoteAction>) => {
        try {
            dispatch({ type: QuoteActionTypes.FETCH_QUOTES });
            const response = await axios.get(url);
            dispatch({ type: QuoteActionTypes.FETCH_QUOTES_SUCCESS, payload: response.data.quotes, likeFilter: false })
        } catch (e) {
            dispatch({
                type: QuoteActionTypes.FETCH_QUOTES_ERROR,
                payload: "Error occurred while loading quotes"
            })
        }
    }
}

export const setLikeFilter = (likeFilter: boolean) => {
    return (dispatch: Dispatch<QuoteAction>) => {
        dispatch({
            type: QuoteActionTypes.SET_LIKE_FITER,
            payload: likeFilter
        })
    }
}