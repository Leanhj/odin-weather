import { fetchWeatherData, createForecastWith, createFutureForecastWith } from "./fetch";
import { CurrentForecast } from "./currentForecast";
import { FutureForecast } from "./futureForecast";

const response = await fetchWeatherData("london");

const forecast = createForecastWith(response);
const futureForecast = createFutureForecastWith(response);
