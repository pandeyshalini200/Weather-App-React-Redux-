export function fetchWeather(city){

    return function(dispatch){
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=6bc361bfd8bbbc1e83df74563642fda9`
        )
        .then(res => {
            return res.json();
        })
        .then(JSONres => {
            dispatch({type:"FETCH_WEATHER",
        payload: JSONres});
        }).catch(err => {
            console.log(err)
        })
    }
}