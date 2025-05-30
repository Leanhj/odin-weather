const apiKey = "FSR6ZDHUKEAXTV8RK7R7FYJPH";

export async function fetchWeatherData(query) {
	const response = await fetch(
		`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${query}?unitGroup=metric&key=${apiKey}&contentType=json`,
		{ mode: "cors" },
	);
	const data = await response.json();
	return data;
}

export default fetchWeatherData;
