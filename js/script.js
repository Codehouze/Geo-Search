
const map = document.getElementById('map');
const button = document.getElementById('submit');

 

 button.addEventListener( 'click', ($event) =>
 {
     $event.preventDefault();
 
 
 // decleard varriables
 		const location = document.getElementById('mapsearch').value 
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
        			card.classList.add('card');
        			main.appendChild(card);
           		 	console.log(card);
        			return card;
        			
        } 
           

                     
     // make api call to fetch data

       fetch(url +'&units=metric&APPID='+ APIKEY)
   	  	.then( (resp)=>
   	  		{return resp.json();})
   	  	 
   	  	 .then((data)=>{
   	  	 	  	//console.log(data.list[0])

   	  	 	let themessage=data.message;
            let thecod    =data.cod;
            let thecount  =data.count;
            let thelist   =data.list;
                mainObj = data;
                showObj();
                createElement();
        
                 
        

   	  	 	  	})
  .catch(err=>console.log(err))

        
         
  	   

      
   	     }
   		
   

 )
 




   





