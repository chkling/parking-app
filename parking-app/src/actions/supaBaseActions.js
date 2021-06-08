import { createClient } from "@supabase/supabase-js";

const SUPABASE_KEY =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMzE3NzEyMCwiZXhwIjoxOTM4NzUzMTIwfQ.E30Wmx4NswOQwjrYMdyU_PPFoR15YWO_ol3A5fcKfgQ";

const supabaseUrl = "https://rxvletamokhgpmjpdosu.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export const sendToSupabase = async (
	e,
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
	e.preventDefault();

	const { data, error } = await supabase.from("Host").select([
		{
			firstName: firstName,
			lastName: lastName,
			emailAddress: emailAddress,
			streetAddress: streetAddress,
			aptSuiteNumber: aptSuiteNumber,
			city: city,
			state: state,
			zipCode: zipCode,
			parkingSpots: parkingSpots,
		},
	]);
	console.log(data, error);
};
