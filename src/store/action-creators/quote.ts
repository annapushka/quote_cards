import axios from "axios";
import { Dispatch } from "redux";
import shortid from 'shortid';
import { QuoteAction, QuoteActionTypes, QuоteType } from "../../types/quote";


const url: string = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
let quotes = [
    {
        quote: '',
        author: '',
        liked: false,
        deleted: false,
        id: ''
    }
];


export const fetchQuotes = () => {
    return async (dispatch: Dispatch<QuoteAction>) => {
        try {
            dispatch({ type: QuoteActionTypes.FETCH_QUOTES });
            const response = await axios.get(url);
            quotes = response.data.quotes.map((quote: QuоteType) => ({ ...quote, liked: false, deleted: false, id: shortid.generate() }));
            dispatch({ type: QuoteActionTypes.FETCH_QUOTES_SUCCESS, payload: quotes, likeFilter: false });
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

export const setLike = (quoteID: string, quoteLikeStatus: boolean) => {
    return (dispatch: Dispatch<QuoteAction>) => {
        quotes[quotes.findIndex(el => el.id === quoteID)].liked = quoteLikeStatus;
        dispatch({
            type: QuoteActionTypes.SET_LIKE,
            payload: quotes
        })
    }
}

export const deleteQuote = (quoteID: string, quoteShowStatus: boolean) => {
    return (dispatch: Dispatch<QuoteAction>) => {
        quotes[quotes.findIndex(el => el.id === quoteID)].deleted = quoteShowStatus;
        dispatch({
            type: QuoteActionTypes.DELETE_QUOTE,
            payload: quotes
        })
    }
}