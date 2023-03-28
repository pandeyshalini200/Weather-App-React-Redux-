import { useState } from "react";
import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchWeather } from "./actions/fetchWeather";
import './App.css';
import bg from './images/bg.jpeg';

function App() {

  const [city, setCity] = useState("");

  const weatherSelector = useSelector((state) => state.weatherInfo)
  const dispatch = useDispatch();
  const getWeatherInfoAction = (city) => dispatch(fetchWeather(city));

  // useEffect(() => {
  //   getWeatherInfoAction();
  // },)

  const getWeatherInfo = (e) => {
    e.preventDefault();
    if (city === "") {
      alert("Please Enter City");
      console.log("no city to search for");
    } else {
      getWeatherInfoAction(city);
      console.log(weatherSelector.weatherinfo)
    }
  }

  let details = "";
  if (weatherSelector.weatherinfo) {
    details = <div className='bg-dark bg-opacity-50 py-3'>
      <div className="details">
      <h2 className="card-title">{weatherSelector.weatherinfo.name}</h2>
      <hr />
      <i className='fas fa-cloud fa-4'></i>
      <h1 className='fw-border mb-5'>{weatherSelector.weatherinfo.main.temp}°C</h1>
      <p className='lead fw-border mb-0'>cloud</p>
      <p className="lead">Min : {weatherSelector.weatherinfo.main.temp_min}°Cel | Max : {weatherSelector.weatherinfo.main.temp_max}°Cel </p>
    </div>
    </div>
  } else {
    details = <p className='errorMsg'>No Data Found</p>
  }

return (
  <>
    <div className="App">
      <header>
        <h1> React Redux Weather App</h1>
        <p>powered by React</p>
      </header>
      <main>
        <div className='container mt-4 m-0-auto' style={{backgroundImage:`url(${bg})`}}>
          <div className='row justify-content-center'>
            <div className="col-md-4 bg-primary">
              <div className="card text-white text-center border-0 bg-primary">
                <div className="card-img-overlay">
                  <form onSubmit={getWeatherInfo}>
                    <div className="input-group mb-4 w-75 mx-auto">
                      <input type="text"
                        value={city}
                        className="form-control"
                        aria-label="search city" aria-describedby="basic-addon2" onChange={(e) => setCity(e.target.value)} />
                      <button type='submit' className="input-group-text" id="basic-addon2"><i className='fas fa-search'></i></button>
                    </div>
                  </form>
                  
                    {details}
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    </>
  );
}

export default App;
