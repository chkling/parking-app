import { createClient } from "@supabase/supabase-js";
import { GET_DATA } from "../action-types/supaBase-action-types"

const supabaseUrl = "https://rxvletamokhgpmjpdosu.supabase.co";
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export const dataFromSupabase = async (
	dispatch,
	firstName,
	lastName,
	emailAddress,
	streetAddress,
	aptSuiteNumber,
	city,
	state,
	zipCode,
	parkingSpots
) => {
	const { data, error } = await supabase.from("Host").select();
	console.log(data, error);
	return dispatch({
		type: GET_DATA,
		payload: data
	});
};


