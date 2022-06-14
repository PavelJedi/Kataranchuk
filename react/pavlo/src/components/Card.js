import React, {Component} from 'react';

class Card extends Component {

    render() {

        const imgURL = `owf owf-${this.props.weather.list[0].weather[0].id} owf-5x`
        return (
                <div className="card">
                    <p className="cityName">{this.props.weather.city.name}</p>
                    <p className="temp">{Math.round (this.props.weather.list[0].main.temp)} °С</p>
                    <i className='img-icon'>{imgURL}</i>
                    <p className="weather">{this.props.weather.list[0].weather[0].main}</p>
            </div>
        )
    }
}

export default Card;