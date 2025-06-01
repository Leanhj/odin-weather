export class FutureForecast {
    constructor(
        condition,
        icon,
        precipitation,
        precipitationProbability,
        tempMax,
        tempMin,
    ) {
        this.condition = condition;
        this.icon = icon;
        this.precipitation = precipitation;
        this.precipitationProbability = precipitationProbability;
        this.tempMax = tempMax;
        this.tempMin = tempMin;
    }
}

export default FutureForecast;
