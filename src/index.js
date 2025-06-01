import {
    fetchWeatherData,
    createForecastWith,
    createFutureForecastWith,
} from "./fetch";
import { CurrentForecast } from "./currentForecast";
import { FutureForecast } from "./futureForecast";

const response = await fetchWeatherData("london");

const forecast = createForecastWith(response);
const futureForecast = createFutureForecastWith(response);
const resolvedAddress = response.resolvedAddress;

let inputValue = "london";
const inputSearchbar = document.querySelector("#search-input");
const buttonSearchbar = document.querySelector("#search-button");
buttonSearchbar.addEventListener("click", (e) => {
    e.preventDefault;
    inputValue = inputSearchbar.value;
});

const divAddress = document.querySelector("#address");
divAddress.textContent = resolvedAddress;
