import React, {Component} from 'react';

class Hourly extends Component {
    render() {
        const copyWeather = [].concat(this.props.weather.list);

        const hourData = copyWeather.splice(0, 3)
        console.log(hourData)

        return (
            <div className="hour">
                <div className="cardHolder">
                    <div className="hourTitle">
                        <p className="hourDesc">Hourly forecast</p>
                    </div>
                    <div className="hourContainer">
                        {hourData.map((hour) => (
                            <ul className="hour-list">
                                <li className="hour-item" key={hour.dt.name}>
                                    {new Date((hour.dt * 1000)).toLocaleString("en-US", {hour: 'numeric'})}
                                </li>
                                <li className="hour-item" key={hour.temp}>
                                    <span className="hour-temp">{Math.round(hour.main.temp)} °С</span>
                                </li>
                            </ul>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default Hourly;

