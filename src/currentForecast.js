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
        this.feelsLike = `Feels like ${feelsLike}°C`;
        this.icon = icon;
        this.precipitation = `${precipitation}mm`;
        this.precipitationProbability = `${precipitationProbability}%`;
        this.temperature = `${temperature}°C`;
    }
}

export default CurrentForecast;
