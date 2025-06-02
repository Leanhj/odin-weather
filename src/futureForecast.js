export class FutureForecast {
    constructor(
        icon,
        precipitation,
        precipitationProbability,
        tempMax,
        tempMin,
    ) {
        this.icon = icon;
        this.precipitation = precipitation;
        this.precipitationProbability = precipitationProbability;
        this.tempMax = tempMax;
        this.tempMin = tempMin;
    }
}

export default FutureForecast;
