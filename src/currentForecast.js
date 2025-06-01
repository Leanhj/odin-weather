export class CurrentForecast {
    constructor(
        condition,
        feelsLike,
        icon,
        precipitation,
        precipitationProbability,
        temperature,
    ) {
        this.condition = condition;
        this.feelsLike = feelsLike;
        this.icon = icon;
        this.precipitation = precipitation;
        this.precipitationProbability = precipitationProbability;
        this.temperature = temperature;
    }
}

export default CurrentForecast;
