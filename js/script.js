//const map = document.getElementById('map');
const button = document.getElementById('submit');
const form = document.getElementById('form');
const cardP = document.getElementById('card');
const access = "AIzaSyCFWf34DtUc3L6Y4VNMgkFkNuSY2EgF-rc";

function autoComplete() {
  let input = document.getElementById('mapsearch');
  let autocomplete = new google.maps.places.Autocomplete(input);
}

// Adding event listener on the submit button
button.addEventListener('click', ($event) => {
  $event.preventDefault();

  // Decleared varriables
  const location = document.getElementById('mapsearch').value

  // let  APIKY='AIzaSyAaYVMNSwlkhO2wCOvEyBX_oxMhiRhxtZ4';
  let url = 'https://api.openweathermap.org/data/2.5/find?q=' + location;
  let mainObj = {};

  //returned data from fetch Api
  let showObj = function () {

    for (let prop in mainObj) {
      let weatherDes = 'weather :' + mainObj.list[0].weather[0].description
      let icon = "http://openweathermap.org/img/w/" + mainObj.list[0].weather[0].icon + ".png";
      let windSpeed = 'Wind Speed :' + mainObj.list[0].wind.speed
      let humidity = 'Humidity :' + mainObj.list[0].main.humidity + "%"
      let temp = 'Temperature :' + Math.round(parseFloat(mainObj.list[0].main.temp) - 273.15) + 'C'
      let weatherCondition = mainObj.list[0].weather[0].main;
      let latitude = mainObj.list[0].coord.lat;
      let longtitude = mainObj.list[0].coord.lon;
    };
  };
  //map
  let map;
  function initMap() {
    // The location of Uluru
    var place = { lat: mainObj.list[0].coord.lat, lng: mainObj.list[0].coord.lon };
    // The map, centered at Uluru
    var map = new google.maps.Map(
      document.getElementById('map'), { zoom: 8, center: place });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({ position: place, map: map });
  }

  //createElement();
  function createElement() {
    // list of empty Dom element
    const main = document.getElementById('card');
    const card = document.createElement('div');
    const head = document.createElement('h2');
    const lsWeather = document.createElement('p');
    const lsIcon = document.createElement('img');
    const lsWind = document.createElement('p');
    const lsHumidity = document.createElement('p');
    const celciusButton = document.createElement('button');
    const fahrenheitButton = document.createElement('button');
    const lsTemp = document.createElement('p');

    //adding content to the elements created...

    head.textContent = 'The current weather in ' + location + ' is ' + mainObj.list[0].weather[0].description;
    lsIcon.src = "http://openweathermap.org/img/w/" + mainObj.list[0].weather[0].icon + ".png";
    lsWind.textContent = 'windSpeed :' + mainObj.list[0].wind.speed + 'Km/h';
    lsHumidity.textContent = 'humidity :' + mainObj.list[0].main.humidity + "%";
    fahrenheitButton.textContent = 'ºF';
    celciusButton.textContent = 'ºC';
    lsTemp.textContent = 'temperature :' + Math.round(parseFloat(mainObj.list[0].main.temp)) + 'ºC';

    // add event listener to temperature button for conversion.
    celciusButton.addEventListener('click', ($event) => {
      $event.preventDefault();
      lsTemp.textContent = 'temperature :' + Math.round(parseFloat(mainObj.list[0].main.temp)) + 'ºC';

    });

    fahrenheitButton.addEventListener('click', ($event) => {
      $event.preventDefault();
      lsTemp.textContent = 'temperature :' + Math.round(((parseFloat(mainObj.list[0].main.temp)) * 9 / 5) + 32) + 'ºF';

    });
    // lsIcon.src = "http://openweathermap.org/img/w/" + mainObj.list[0].weather[0].icon+".png";
    lsIcon.classList.add('weatherCondition');


    //adding created element to DOM
    card.appendChild(head);
    card.appendChild(lsIcon);
    card.appendChild(lsWind);
    card.appendChild(celciusButton);
    celciusButton.classList.add('btnC');
    card.appendChild(fahrenheitButton);
    fahrenheitButton.classList.add('btn');
    card.appendChild(lsTemp);
    card.appendChild(lsHumidity);
    card.classList.add('card');
    main.appendChild(card);
//     console.log(card);
    return card;

  }

  // make api call to fetch data from the RESTAPI

  fetch(url + '&units=metric&APPID=' + access)
    .then((resp) => { return resp.json(); })

    .then((data) => {
      //console.log(data.list[0])

      let themessage = data.message;
      let thecod = data.cod;
      let thecount = data.count;
      let thelist = data.list;
      // let weatherCondition = data.list[0].weaather[0].main;
      mainObj = data;

      createElement();
      showObj();
      initMap();
      form.reset();


      console.log(data);


    })


    .catch(err => console.log(err))
})





   // temperature conversion

/*

             card.getElementByClassName('btnC').addEventListener('click',() =>
                   {

                          console.log('celcius was clicked');/*temp.textContent = celcius;
                    });
                      card.getElementByClassName('btn').addEventListener('click',() =>
                   {
                    console.log('fahrenheit was clicked');
                        /*temp.textContent=fahrenheit;*//*
});

*/



