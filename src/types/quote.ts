import { BooleanLiteral } from "typescript";

export interface QuoteState {
    quotes: QuоteType[];
    loading: boolean;
    error: null | string;
    likeFilter: boolean;
}

export interface QuоteType {
    quote: string;
    author: string;
    liked: boolean;
    deleted: boolean;
    id: string;
}

export enum QuoteActionTypes {
    FETCH_QUOTES = 'FETCH_QUOTES',
    FETCH_QUOTES_SUCCESS = 'FETCH_QUOTES_SUCCESS',
    FETCH_QUOTES_ERROR = 'FETCH_QUOTES_ERROR',
    SET_LIKE_FITER = 'SET_LIKE_FITER',
    SET_LIKE = 'SET_LIKE',
    DELETE_QUOTE = 'DELETE_QUOTE',
}

interface FetchQuotesAction {
    type: QuoteActionTypes.FETCH_QUOTES;
}

interface FetchQuotesSuccessAction {
    type: QuoteActionTypes.FETCH_QUOTES_SUCCESS;
    payload: QuоteType[];
}

interface FetchQuotesErrorAction {
    type: QuoteActionTypes.FETCH_QUOTES_ERROR;
    payload: string;
}

interface SetLikeFilterAction {
    type: QuoteActionTypes.SET_LIKE_FITER;
    payload: boolean;
}

interface SetLikeAction {
    type: QuoteActionTypes.SET_LIKE;
    payload: QuоteType[];
}

interface DeleteQuoteAction {
    type: QuoteActionTypes.DELETE_QUOTE;
    payload: QuоteType[];
}


export type QuoteAction = FetchQuotesAction
    | FetchQuotesSuccessAction
    | FetchQuotesErrorAction
    | SetLikeFilterAction
    | SetLikeAction
    | DeleteQuoteAction;