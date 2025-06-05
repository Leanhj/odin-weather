const divCurrentForecast = document.querySelector("#current-forecast");
const divFutureForecast = document.querySelector("#future-forecast");
divFutureForecast.classList = "future-forecast";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../icons', false, /\.(png|jpe?g|svg)$/));
console.log(images);

function createDiv() {
    return document.createElement("div");
}
export function renderCurrentForecast(aCurrentForecast) {
    divCurrentForecast.replaceChildren();
    const divMainInfo = createDiv();
    divMainInfo.classList = "main-info";

    const divIcon = createDiv();
    divIcon.classList = "main-icon-div";
    const icon = document.createElement("img");
    icon.src = images[`${aCurrentForecast.icon}.svg`];
    icon.classList = "main-icon";
    divIcon.appendChild(icon);

    const divInfo = createDiv();
    const divTemperature = createDiv();
    divTemperature.textContent = aCurrentForecast.temperature;
    const divPrecipitation = createDiv();
    divPrecipitation.textContent = aCurrentForecast.precipitation;
    const divPrecipitationProbability = createDiv();
    divPrecipitationProbability.textContent =
        aCurrentForecast.precipitationProbability;
    divInfo.appendChild(divTemperature);
    divInfo.appendChild(divPrecipitation);
    divInfo.appendChild(divPrecipitationProbability);

    divMainInfo.appendChild(divIcon);
    divMainInfo.appendChild(divInfo);

    const divAdditionalInfo = createDiv();
    const divCondition = createDiv();
    divCondition.textContent = aCurrentForecast.condition;
    const divFeelsLike = createDiv();
    divFeelsLike.textContent = aCurrentForecast.feelsLike;
    divAdditionalInfo.appendChild(divCondition);
    divAdditionalInfo.appendChild(divFeelsLike);

    divCurrentForecast.appendChild(divMainInfo);
    divCurrentForecast.appendChild(divAdditionalInfo);
}

export function renderFutureForecast(aFutureForecast) {
    divFutureForecast.replaceChildren();
    for (let i = 0; i < aFutureForecast.length; i += 1) {
        const divSingleDay = createDiv();
        divSingleDay.classList = "day-div";
        const divIcon = createDiv();
        divIcon.classList = "icon-div";
        const icon = document.createElement("img");
        icon.src = images[`${aFutureForecast[i].icon}.svg`];
        icon.classList = "future-icons";
        divIcon.appendChild(icon);
        const divTempMax = createDiv();
        divTempMax.textContent = aFutureForecast[i].tempMax;
        const divTempMin = createDiv();
        divTempMin.textContent = aFutureForecast[i].tempMin;
        const divPrecipitation = createDiv();
        divPrecipitation.textContent = aFutureForecast[i].precipitation;
        const divPrecipitationProbability = createDiv();
        divPrecipitationProbability.textContent =
            aFutureForecast[i].precipitationProbability;
        divSingleDay.appendChild(divIcon);
        divSingleDay.appendChild(divTempMax);
        divSingleDay.appendChild(divTempMin);
        divSingleDay.appendChild(divPrecipitation);
        divSingleDay.appendChild(divPrecipitationProbability);
        divFutureForecast.appendChild(divSingleDay);
    }
}
