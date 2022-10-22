import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as QuoteActionCreators from "../store/action-creators/quote"


export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(QuoteActionCreators, dispatch);
}