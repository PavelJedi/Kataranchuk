import React, {Component} from "react";

class Week extends Component {
    render() {
        const dailyData = this.props.weather.list.filter(reading => {
                return reading.dt_txt.includes("18:00:00")
            }
        )

        console.log(dailyData);

        return (
            <div className="week">
                <div className="cardHolder">
                    <div className="cardTitle">
                        <p className="cardDesc">5-day forecast</p>
                    </div>
                    <div className="cardContent">
                        {dailyData.map((day) => (
                            <div className="day">
                                <ul className="day-list">
                                    <li className="day-item name" key={day.name}>
                                        {new Date((day.dt * 1000)).toLocaleString("en-US", {weekday: "short"})}
                                    </li>
                                    <li className="day-item" key={day.icon}>
                                    </li>
                                    <li className="day-item" key={day.temp}>
                                        <span className="day-temp">{Math.round(day.main.temp)} °С</span>
                                    </li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Week;




