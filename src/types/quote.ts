import { BooleanLiteral } from "typescript";

export interface QuoteState {
    quotes: any[];
    loading: boolean;
    error: null | string;
    likeFilter: boolean;
}

export enum QuoteActionTypes {
    FETCH_QUOTES = 'FETCH_QUOTES',
    FETCH_QUOTES_SUCCESS = 'FETCH_QUOTES_SUCCESS',
    FETCH_QUOTES_ERROR = 'FETCH_QUOTES_ERROR',
    SET_LIKE_FITER = 'SET_LIKE_FITER',
}

interface FetchQuotesAction {
    type: QuoteActionTypes.FETCH_QUOTES;
}

interface FetchQuotesSuccessAction {
    type: QuoteActionTypes.FETCH_QUOTES_SUCCESS;
    payload: any[];
}

interface FetchQuotesErrorAction {
    type: QuoteActionTypes.FETCH_QUOTES_ERROR;
    payload: string;
}

interface SetLikeFilterAction {
    type: QuoteActionTypes.SET_LIKE_FITER;
    payload: boolean;
}

export type QuoteAction = FetchQuotesAction | FetchQuotesSuccessAction | FetchQuotesErrorAction | SetLikeFilterAction;