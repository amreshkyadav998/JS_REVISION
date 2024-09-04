const button = document.getElementById("get-location-button");


async function getData(cityName) {
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=faa291c0d72d472c9da201638240209&q=${cityName}&aqi=yes`);
    return await promise.json();
}

async function gotLocation(position) {
  const result = await getData(position.coords.latitude , position.coords.longitude);
  console.log(result);
}

function failedToGetLocation(){
    console.log("There was some issue");
}

button.addEventListener('click' , () => {
    const result = navigator.geolocation.getCurrentPosition(gotLocation , failedToGetLocation)
})