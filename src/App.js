import React, { useState } from "react";
import cloudIcon from "./Assets/cloud.png"
import  clearIcon  from "./Assets/clear.png";
import  drizzle  from "./Assets/drizzle.png";
import rain from "./Assets/rain.png"
import snow from "./Assets/snow.png"
import humudity from "./Assets/humidity.png"
import windspeed from "./Assets/wind.png"
import axios from "axios"

function App() {

  
  const api = 'fb2a32ad5b3961ebc0f658c6cab5a545';
  const [weatherText, setText] = useState('')
  const [initialSearch, setInitialSearch] = useState(true)
  const [location,setLocation] = useState('')
  const [temp,setTemperature] = useState('')
  const [wind,setWind] = useState('')
  const [humid,setHumudity] = useState('')
  const [imgicon,setImage] = useState(cloudIcon)
 

  const handleInput = (e) => {
    setText(e.target.value)
  }


  const findWeather  = async() =>{
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${weatherText}&appid=${api}&units=metric`)
      console.log(response)
      setTemperature(response.data.main.temp)
      setLocation(response.data.name)
      setWind(response.data.wind.speed)
      setHumudity(response.data.main.humidity)
      
      if(response.data.weather[0].icon === "01d" || response.data.weather[0].icon === "01n"){
        setImage(clearIcon)
      }
      else if(response.data.weather[0].icon === "02d" || response.data.weather[0].icon === "02n"){
        setImage(cloudIcon)}
      else if(response.data.weather[0].icon === "03d" || response.data.weather[0].icon === "03n"){
        setImage(drizzle)  
      }
      else if(response.data.weather[0].icon === "04d" || response.data.weather[0].icon === "04n"){
        setImage(drizzle)  
      }
      else if(response.data.weather[0].icon === "09d" || response.data.weather[0].icon === "09n"){
      setImage(rain) 
      }
      else if(response.data.weather[0].icon === "10d" || response.data.weather[0].icon === "10n"){
      setImage(rain) 
      }
      else if(response.data.weather[0].icon === "13d" || response.data.weather[0].icon === "13n"){
      setImage(snow) 
      }
      else {
        setImage(clearIcon)
      }
    }

  const setInitial = () => {
    setInitialSearch(false)
  }


  return (

        initialSearch ? (
        <div className = "search-box" >
            <div className="search-field">
              <input type="text" name="seachbox" value={weatherText} placeholder="Enter the City" onChange={handleInput} />
              <button onClick={ () =>{
                findWeather()
                setInitial ()

              }}>Search</button>
            </div>
    </div>) :
    <div className="container">
      <div className="showWeather">
        <div className="weatherSearch">
          <input type="text" name="searchWeather" value={weatherText} onChange={handleInput} />
          <button onClick={findWeather}>Search</button>

          {/* showing current Weather Details  */}
          <div className="currentWeatherArea">
            <div className="weatherImg">
              <img src={imgicon} alt=""  />
              <h2>{temp} </h2>
              <h3 className="weatheLocation">{location}</h3>
            </div>
          </div>


        <div className="data-card">

          <div className="element1">
            <img src={humudity}  alt="humidityicon"/>
            <div className="data">
              <div className="humidity-present">{humid}</div>
              <div className="humidity">Humidity</div>
            </div>
          </div>

          <div className="element2">
            <img src={windspeed} alt="windicon" />
            <div className="data">
              <div className="humidity-present">{wind}</div>
              <div className="humidity">Wind Speed</div>
            </div>
          </div>

        </div>
        </div>


      </div>



    </div>

  );
}

export default App;





