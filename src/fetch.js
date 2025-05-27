const apiKey = "FSR6ZDHUKEAXTV8RK7R7FYJPH";

export function fetchWeatherData(query) {
	const weatherDataAsJson = fetch(
		`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${query}?unitGroup=us&key=${apiKey}&contentType=json`,
		{ mode: "cors" },
	).then((response) => response.json());
	return weatherDataAsJson;
}

export default fetchWeatherData;
