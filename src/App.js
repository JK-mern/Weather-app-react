import React, { useState } from "react";
import cloudIcon from "./Assets/cloud.png"
import humudity from "./Assets/humidity.png"
import windspeed from "./Assets/wind.png"

function App() {

  const [weatherText, setText] = useState('')
  const [initialSearch, setInitialSearch] = useState(true)

  const handleInput = (e) => {
    setText(e.target.value)
  }

  const setInitial = () => {
    setInitialSearch(false)
  }


  return (

        initialSearch ? (
        <div className = "search-box" >
            <div className="search-field">
              <input type="text" name="seachbox" value={weatherText} placeholder="Enter the City" onChange={handleInput} />
              <button onClick={ setInitial}>Search</button>
            </div>
    </div>) :
    <div className="container">
      <div className="showWeather">
        <div className="weatherSearch">
          <input type="text" name="searchWeather" value={weatherText} onChange={handleInput} />
          <button >Search</button>

          {/* showing current Weather Details  */}
          <div className="currentWeatherArea">
            <div className="weatherImg">
              <img src={cloudIcon} alt="" srcset="" />
              <h2>24°c </h2>
              <h3 className="weatheLocation">London</h3>
            </div>
          </div>


        <div className="data-card">

          <div className="element1">
            <img src={humudity}  alt=""/>
            <div className="data">
              <div className="humidity-present">64%</div>
              <div className="humidity">Humidity</div>
            </div>
          </div>

          <div className="element2">
            <img src={windspeed} alt="" />
            <div className="data">
              <div className="humidity-present">18 km/Hr</div>
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





