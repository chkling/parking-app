import { combineReducers } from "redux";
import { dataFromSupabase } from "../actions/supaBaseData";
import supaBaseHostData from "./hostReducer"

const rootReducer = combineReducers({
	dataFromSupabase,
    supaBaseHostData
});

export default rootReducer;
