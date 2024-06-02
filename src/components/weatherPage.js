// AnotherPage.js
import React, { useState } from 'react';


import styles from './weatherPage.module.css'; // Import CSS module

const WeatherPage = ({ onButtonClick }) => {

  const  steps=()=>{
    window.location.href = '/steps'

}


    const [inputValues, setInputValues] = useState({ city: '', temp: '', humidity: '', windspeed: '' });

    
const weatherData = [
    {
        Name: "RainFall",
        Temperature: 25,
        Humidity: 70,
        WindSpeed: 15
    },

    {
        Name: "LightRainfall",
        Temperature: 30,
        Humidity: 35,
        WindSpeed: 10
    },
    {
        Name: "cloudy",
        Temperature: 23,
        Humidity: 55,
        WindSpeed: 10
    },
    {
        Name: "cold",
        Temperature: 18,
        Humidity: 30,
        WindSpeed: 5
    },
    {
        Name: "hot",
        Temperature: 33,
        Humidity: 25,
        WindSpeed: 10
    }
];


const handleInputChange = (event) => {
    setInputValues({ ...inputValues, [event.target.name]: event.target.value });
  };









    const  backhome=()=>{
        window.location.href = '/Home'

    }
  const handleClick = () => {

    
    const { temp, humidity, windspeed } = inputValues;
    const input = [parseFloat(temp), parseFloat(humidity), parseFloat(windspeed)];

    
    const distances = weatherData.map(({ Temperature, Humidity, WindSpeed }) => {
        return Math.sqrt(
          Math.pow(temp - Temperature, 2) + 
          Math.pow(humidity - Humidity, 2) + 
          Math.pow(windspeed - WindSpeed, 2)
        );
    });
    const minDistanceIndex = distances.indexOf(Math.min(...distances));
    const k=minDistanceIndex;
    const scenario = weatherData[k].Name;
    const city = inputValues.city;
    document.getElementById('out').innerText = `Today is ${scenario} in ${city}.`
  };










  return (

    
    <div>
        <header>
        <h1>Weather App</h1>
      </header>
    <div className={styles.container}>
        
      <div className={styles.heading}>
        <h1>Weather Prediction using KNN Algorithm</h1>
      </div>
      <div className={styles.form}>
        <div>
          <label htmlFor="city">Enter city:</label>
          <input type="text" placeholder="Enter city Name" id="city" name="city" value={inputValues.city} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="temp">Enter Temperature °C:</label>
          <input type="number" placeholder="Temperature" id="temp" name="temp" value={inputValues.temp} onChange={handleInputChange} />
          <label htmlFor="humidity">Enter Humidity %:</label>
          <input type="number" placeholder="Humidity" id="humidity" name="humidity" value={inputValues.humidity} onChange={handleInputChange} />
          <label htmlFor="windspeed">Enter Wind Speed km/h:</label>
          <input type="number" placeholder="Wind Speed" id="windspeed" name="windspeed" value={inputValues.windspeed} onChange={handleInputChange} />
        </div>
        <div className={styles.btn}>
          <div><button onClick={handleClick}>Show Result</button></div>
          
        </div>
      </div>
      <div className={styles.show}>
        <p id="out"></p>
      </div>
      <div className={styles.btn}>
        <div><button onClick={() => window.location.href = '/steps'}>Show steps</button></div>
        </div>
    </div>
    <footer>
    <div className={styles.btnh}>
        <div><button onClick={() => window.location.href = '/Home'}>Home</button></div>
        </div>

      </footer>
    </div>
  );

};



export default WeatherPage;

