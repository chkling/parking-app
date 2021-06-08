import { combineReducers } from "redux";
import { dataFromSupabase } from "../actions/supaBase";

const rootReducer = combineReducers({
	dataFromSupabase,
});

export default rootReducer;
