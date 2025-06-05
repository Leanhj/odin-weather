export class FutureForecast {
    constructor(
        icon,
        precipitation,
        precipitationProbability,
        tempMax,
        tempMin,
    ) {
        this.icon = icon;
        this.precipitation = `${precipitation}mm`;
        this.precipitationProbability = `${precipitationProbability}%`;
        this.tempMax = `${tempMax}°C`;
        this.tempMin = `${tempMin}°C`;
    }
}

export default FutureForecast;
