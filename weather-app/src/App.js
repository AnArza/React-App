import React,{useState} from "react"
import './App.css';
const BASE_URL="https://api.openweathermap.org/data/2.5/weather" //?q={city name}&appid={API key}
const API_key="146edd99eacb5b2d73ff4da3ef72e661"

function App() {
  const [data,setData]=useState([{}])
  const [city,setCity]=useState('')
  const getWeather=()=>{
    fetch(`${BASE_URL}?q=${city}&appid=${API_key}`)
    .then(resp=>resp.json())
    .then(data=>{
     // console.log(data)
      setData(data)
      setCity("")
      })
  }
  let emoji=null;
  if(typeof data.main!="undefined"){
      switch (data.weather[0].main) {
        case "Clouds":
          emoji="fa fa-cloud"
          break;
        case "Clear":
          emoji="fa fa-smog"
          break;
        case "Snow":
          emoji="fa fa-snow-flake"
          break;
        case "Rain":
          emoji="fa fa-cloud-shower-heavy"
          break;
        default:
          break;
      }
  }
  return (
    <div className="App">
       <h1>Weather App</h1>
       <input className="input" value={city} placeholder="Enter the city name" onChange={e=>setCity(e.target.value)}/>
       <button onClick={getWeather}>Search</button>

       {/* <img src={`https://source.unsplash.com/600x900/?${data.weather[0].main}`} alt="a net a nyeeet"/> */}
     {typeof data.main==="undefined"?(
      <p>Welcome to weather app! Enter the name of the city to know the weather of it.</p>):
      (<div>
        <p>{data.name} , {data.sys.country}</p>
        <p>{Math.round(data.main.temp-273.15)}℃</p>
        <i className={emoji} ></i>
        <p>{data.weather[0].main}</p>
      </div>)}

      {data.cod==="404"?(
        <div>
            <p>City not found...</p>
        </div>
      ):(<></>)}
    
    </div>
  );
}

export default App;
