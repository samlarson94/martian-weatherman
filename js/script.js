// === Martian Weather Section ===
const API_KEY = "A9R3KGhAM9xjbq1gQgirmiaocdmIZAVo2mgV1rOd";
const API_URL = "https://api.nasa.gov/insight_weather/?api_key=" + API_KEY +"&feedtype=json&ver=1.0";

//query API
getWeather()

function getWeather() { //Running into issues with Insight Data Source, Insight seems to be down.  Look for alternate API information.
    fetch(API_URL)
        .then(res => res.json())
        .then(data => {
           
            console.log(data)
        })
};

//Pull Date, Temp High, Temp Low, Wind Speed, Wind Direction

// === Photo Generator Section ===
