// opgave12.1.js
const earthquakeUrl = // https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php 
    'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson';

    async function main(url) {
        try {
            let respons = await get(url); //referere til filen, get.js
            console.log(respons)
            let tabel = document.querySelector("#tabel");
            for(let i = 0; i< respons.features.length; i++){
                if(respons.features[i].properties.mag >= 5){
                    tabel.innerHTML = tabel.innerHTML + "<tr> <td> " + respons.features[i].properties.mag + "</td> <td> " + respons.features[i].properties.place +"</td> <td> " + respons.features[i].properties.time + "</td> </tr>"
                }
            }

        } catch (fejl) {
            console.log(fejl);
        }
    }

    
    main(earthquakeUrl);


    


