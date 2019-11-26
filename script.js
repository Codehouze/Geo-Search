
<<<<<<< HEAD
//const map = document.getElementById('map');
const button = document.getElementById('submit');
const form = document.getElementById('form');
const cardP = document.getElementById('card');

  function autoComplete(){
					let input = document.getElementById('mapsearch');
					let autocomplete = new google.maps.places.Autocomplete(input);
				}




 button.addEventListener( 'click', ($event) =>
    
    {
=======
const map = document.getElementById('map');
const button = document.getElementById('submit');

 

 button.addEventListener( 'click', ($event) =>
 {
>>>>>>> 15519981a45db819881f88b19d8699c5828ede7d
     $event.preventDefault();
 
 
 // decleard varriables
 		const location = document.getElementById('mapsearch').value 
<<<<<<< HEAD
    	let  APIKEY='0c877e7587a0a277cf708cad32da7bdc';
        let  url='http://api.openweathermap.org/data/2.5/find?q='+ location;
        let  mainObj={};

       
        //function that shows returned data from fetch
        let showObj = function () {
     	
            for(let prop in mainObj){ 
        	  	 let weatherDes=   'weather :'+ mainObj.list[0].weather[0].description
        	  	 let windSpeed= 'Wind Speed :'+ mainObj.list[0].wind.speed
        	  	 let humidity='Humidity :'+ mainObj.list[0].main.humidity + "%"
   	  	     	 let temp= 'Temperature :' + Math.round(parseFloat(mainObj.list[0].main.temp)-273.15) + 'C'
   	  	    	 let weatherCondition = mainObj.list[0].weather[0].main;
   	  	    	 let latitude = mainObj.list[0].coord.lat;
   	  	    	 let longtitude =mainObj.list[0].coord.lon;
   	  	    	 
   	  	    	
   	  	    	// temperature conversion
   	  	    	/* let celcius=Math.round(parseFloat(mainObj.list[0].main.temp));
   	  	    	 let fahrenheit = Math.round(((parseFloat(mainObj.list[0].main.temp)-273.15)*1.8)+32); 
   	  	    	 
                 */	  	
                };
               /*
        	   if ((mainObj.list[0].weather[0].description.value)==='thunder')
        	   {
        	   	         weather='thunder';
        	   	     
        	   }
        	   elseif((mainObj.list[0].weather[0].description.value)==='cloudy')
        	   {
        	   	      weather='cloudy';
        	   }
        	   elseif((mainObj.list[0].weather[0].description.value)==='raining')
        	   {
        	   	weather='raining';
        	   }
        	   elseif((mainObj.list[0].weather[0].description.value)==='Sunny')
        	   {
                weather='Sunny';      
        	   }
        	   else
        	   {
        	   	weather=mainObj.list[0].weather[0].description;
        	   }*/
        	        
        	  };

        	 let map;
   			 function initMap() {
 			 // The location of Uluru
 				 var place = {lat:mainObj.list[0].coord.lat, lng: mainObj.list[0].coord.lon};
 			 // The map, centered at Uluru
 		 		var map = new google.maps.Map(
   				document.getElementById('map'), {zoom: 8, center: place});
  			// The marker, positioned at Uluru
 				 var marker = new google.maps.Marker({position: place, map: map});
				}


 	  

               
                    
        
        //createElement();
                    function createElement () {
           	// list of empty Dom element
           	    	    const main = document.getElementById('card');
        				const card = document.createElement('div');
        				const head = document.createElement('h2');
        				const lsWeather = document.createElement('p');
        				const lsWind = document.createElement('p');
        				const lsHumidity = document.createElement('p');
        				const celciusButton =document.createElement('button');
        				const fahrenheitButton = document.createElement('button');
        				const lsTemp = document.createElement('p');
       				
                     
 
                    
        	//adding content to the elements created...

                    head.textContent= 'The weather Condition in ' + location + ' is ' + mainObj.list[0].weather[0].description;  
                  	lsWind.textContent = 'windSpeed :' + mainObj.list[0].wind.speed + 'Km/h';
        			lsHumidity.textContent = 'humidity :' + mainObj.list[0].main.humidity + "%";
                    fahrenheitButton.textContent = 'ºF';
        			celciusButton.textContent= 'ºC';
        			lsTemp.textContent = 'temperature :' + Math.round(parseFloat(mainObj.list[0].main.temp))  + 'ºC';
        			
        			celciusButton.addEventListener('click', ($event)=>{
        				$event.preventDefault();
        				lsTemp.textContent = 'temperature :' + Math.round(parseFloat(mainObj.list[0].main.temp))  + 'ºC';
        			 
        			});

        			fahrenheitButton.addEventListener('click', ($event)=>{
        				$event.preventDefault();
        				lsTemp.textContent = 'temperature :' + Math.round(((parseFloat(mainObj.list[0].main.temp))*9/5)+32)  + 'ºF';
        			 
        			});
        			
        			
                    
                          
         
           			//adding content to DOM
             		card.appendChild(head);
        			card.appendChild(lsWind);
        			card.appendChild(celciusButton);
        			celciusButton.classList.add('btnC');
        			card.appendChild(fahrenheitButton);
        			fahrenheitButton.classList.add('btn');
        			card.appendChild(lsTemp);        			
        			card.appendChild(lsHumidity);
=======
    	let  APIKEY='0c877e7587a0a277cf708cad32da7bdc'
        let  url='http://api.openweathermap.org/data/2.5/find?q='+ location 
        let  mainObj={};
       
        //show object from fetch
        let showObj = function () {
        	
        	  for(let prop in mainObj){

        	  	let windSpeed= 'Wind Speed :'+ mainObj.list[0].wind.speed
        	  	let humidity='Humidity :'+ mainObj.list[0].main.humidity
   	  	     	let temp= 'Temperature :' + mainObj.list[0].main.temp + 'C'
   	  	    	//let description = mainObj.list[0].weaather
   	  	    	const weather = [windSpeed,humidity,temp]
                return weather;      	  	
        	        
        	  };

                //console.log(weather);
                    }
        
        //createElement();
           let createElement =  function () {
           	// list of empty Dom element
           	        const main = document.getElementById('card');
        			const card = document.createElement('div');
        			//const unOrdered = document.createElement('ul');
        			const head = document.createElement('h2');
        			const lsWind = document.createElement('li');
        			const lsHumidity = document.createElement('li');
        			const lsTemp = document.createElement('li');
        			const lsComm = document.createElement('li');


        	//adding list item...
                    head.textContent= 'The weather Condition in ' + location + ' are' ;
        			lsWind.textContent = 'windSpeed :' + mainObj.list[0].wind.speed;
        			lsHumidity.textContent = 'humidity :' + mainObj.list[0].main.humidity;
        			lsTemp.textContent = 'temperature :' + mainObj.list[0].main.temp;
        			lsComm.textContent = 'hi maxwell';
                    

           // adding class to dom
           			
            
        			//card.appendChild(unOrdered);
        			card.appendChild(head);
        			card.appendChild(lsWind);
        			card.appendChild(lsTemp);
        			card.appendChild(lsHumidity);
        			card.appendChild(lsComm);
>>>>>>> 15519981a45db819881f88b19d8699c5828ede7d
        			card.classList.add('card');
        			main.appendChild(card);
           		 	console.log(card);
        			return card;
        			
        } 
<<<<<<< HEAD


       
// 'map' refers to a <div> element with the ID map
      
           

                     
     // make api call to fetch data from the RESTAPI
=======
           

                     
     // make api call to fetch data
>>>>>>> 15519981a45db819881f88b19d8699c5828ede7d

       fetch(url +'&units=metric&APPID='+ APIKEY)
   	  	.then( (resp)=>
   	  		{return resp.json();})
   	  	 
   	  	 .then((data)=>{
   	  	 	  	//console.log(data.list[0])

   	  	 	let themessage=data.message;
            let thecod    =data.cod;
            let thecount  =data.count;
            let thelist   =data.list;
<<<<<<< HEAD
           // let weatherCondition = data.list[0].weaather[0].main;
                mainObj = data;
                
                createElement();
                showObj();
                 initMap();
                 form.reset();



                
        
                 console.log(data);
        

   	  	 	  	})

   	  
         .catch(err=>console.log(err))

        
         
  	  

      
   	     }
   	     )
   		
   

 
 
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
=======
                mainObj = data;
                showObj();
                createElement();
        
                 
        

   	  	 	  	})
  .catch(err=>console.log(err))

        
         
  	   

      
   	     }
   		
   

 )
 


>>>>>>> 15519981a45db819881f88b19d8699c5828ede7d


   





