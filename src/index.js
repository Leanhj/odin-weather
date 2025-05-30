import { fetchWeatherData } from "./fetch";
import { CurrentForecast } from "./currentForecast";
import { FutureForecast } from "./futureForecast";

const response = await fetchWeatherData("london");

console.log(response);

const currentData = response.currentConditions;
const aForecast = new CurrentForecast(
    currentData.conditions,
    currentData.feelslike,
    currentData.icon,
    currentData.precip,
    currentData.precipprob,
    currentData.temp
);

const futureData = response.days;
let futureForecast = [];
for (let i = 0; i < futureData.length; i++) {
    const singleFutureData = futureData[i];
    const singleFutureForecast = new FutureForecast(
        singleFutureData.conditions,
        singleFutureData.icon,
        singleFutureData.precip,
        singleFutureData.precipprob,
        singleFutureData.tempmax,
        singleFutureData.tempmin
    );
    futureForecast.push(singleFutureForecast);
}
console.log(futureForecast);
