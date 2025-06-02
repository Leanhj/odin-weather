import { CurrentForecast } from "./currentForecast";
import { FutureForecast } from "./futureForecast";

const apiKey = "FSR6ZDHUKEAXTV8RK7R7FYJPH";

export async function fetchWeatherData(query) {
    const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${query}?unitGroup=metric&key=${apiKey}&contentType=json`,
        { mode: "cors" },
    );
    const data = await response.json();
    return data;
}

export function createForecastWith(aJsonResponse) {
    const currentData = aJsonResponse.currentConditions;
    const aForecast = new CurrentForecast(
        currentData.conditions,
        currentData.feelslike,
        currentData.icon,
        currentData.precip,
        currentData.precipprob,
        currentData.temp,
    );
    return aForecast;
}

export function createFutureForecastWith(aJsonResponse) {
    const futureData = aJsonResponse.days;
    const futureForecast = [];
    for (let i = 0; i < futureData.length; i += 1) {
        const singleFutureData = futureData[i];
        const singleFutureForecast = new FutureForecast(
            singleFutureData.icon,
            singleFutureData.precip,
            singleFutureData.precipprob,
            singleFutureData.tempmax,
            singleFutureData.tempmin,
        );
        futureForecast.push(singleFutureForecast);
    }
    return futureForecast;
}
