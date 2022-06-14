import React, {useState} from 'react'
import Week from './components/Week'
import Card from './components/Card'
import Hourly from './components/Hourly'
import './App.scss'


const api = {
    key: 'e4c7ec694adf6c249b709933ae4efb77',
    main: 'https://api.openweathermap.org/data/2.5/'
};

function App() {
    const [data, setData] = useState('')
    const [weather, setWeather] = useState({})

    const searchLocation = event => {
        if (event.key === 'Enter') {
            fetch(`${api.main}forecast?q=${data}&units=metric&APPID=${api.key}`)
                .then(response => response.json())
                .then(result => {
                    setWeather(result)
                    setData('')
                    console.log(result)
                })
        }

    }

    return (
        <div className="app">
            <div className="search">
                <input
                    type="text"
                    value={data}
                    onChange={event => setData(event.target.value)}
                    onKeyPress={searchLocation}
                    placeholder='Enter Location'/>
            </div>
            <div className="container">
                <div className="dayHolder">
                    <Card weather={weather}/>
                    <Hourly weather={weather}/>
                </div>
                <Week weather={weather}/>
            </div>
        </div>
    );
}

export default App;