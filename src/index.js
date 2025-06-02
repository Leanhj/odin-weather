import {
    fetchWeatherData,
    createForecastWith,
    createFutureForecastWith,
} from "./fetch";
import { CurrentForecast } from "./currentForecast";
import { FutureForecast } from "./futureForecast";
import {
    renderCurrentForecast,
    renderFutureForecast,
} from "./render";

const response = await fetchWeatherData("london");

const forecast = createForecastWith(response);
renderCurrentForecast(forecast);
const futureForecast = createFutureForecastWith(response);
renderFutureForecast(futureForecast);
const resolvedAddress = response.resolvedAddress;
const divAddress = document.querySelector("#address");
divAddress.textContent = resolvedAddress;

let inputValue = "london";
const inputSearchbar = document.querySelector("#search-input");
const buttonSearchbar = document.querySelector("#search-button");
buttonSearchbar.addEventListener("click", async (e) => {
    e.preventDefault;
    inputValue = inputSearchbar.value;
    const response = await fetchWeatherData(inputValue);
    const forecast = createForecastWith(response);
    const futureForecast = createFutureForecastWith(response);
    divAddress.textContent = response.resolvedAddress;
    renderCurrentForecast(forecast);
    renderFutureForecast(futureForecast);
});
