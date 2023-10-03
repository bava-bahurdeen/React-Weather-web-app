import { useState } from "react"
import "./index.css"

function Weather() {
    const [value,Setvalue]=useState("")
    const [temp,Settemp]=useState("")
    const [main ,Setmain]=useState("")
    const [desc,Setdesc]=useState("")
    var handle=(e)=>{
Setvalue(e.target.value)

    }
    var change=()=>{
var fetchdata=fetch("https://api.openweathermap.org/data/2.5/weather?q="+value+"&appid=ef5cb3fafb0823d1dc8024b378568cfd").then((res)=>{
  return res.json()
})
fetchdata.then(
  (data)=>{
var f=data.main.temp
var c=f-273.15
Settemp(Math.floor(c)+"°C");
Setmain(data.weather[0]["main"]+",")
Setdesc(data.weather[0]["description"])

console.log(c);
console.log(data.weather[0]["main"]);
console.log(data.weather[0]["description"]);
  }
)
    }
  return (
    <div className="background">
      <div className="container">
        <h1 className="wheather">WEATHER</h1>
        <input type="text" className="Inputcls" placeholder="City Name" id='inputid' onInput={handle}/><br /><br />
        <button type="button" className="Inputcls submit" onClick={change} > submit</button>
        <br />

        <span className="getdata">{temp}</span>
        <span className="temp"></span>
          <span className="textdata">{main}  {desc}</span>
      </div>

    </div>
  );
}

export default Weather;
