import { combineReducers } from "redux";
import { quoteReduser } from "./quoteReducer";

export const rootReducer = combineReducers({
    quote: quoteReduser,
});


export type RootState = ReturnType<typeof rootReducer>;