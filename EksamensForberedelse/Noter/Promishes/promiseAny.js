// promiseAll.js
function langvarig(nr) {
    return new Promise(function (resolve, reject) {
        let type = Math.trunc(Math.random() * 3);
        //let type = 1
        if (type === 0) throw new Error(`${nr} Slet ikke OK!`);
        setTimeout(afslut, 500);
        function afslut() {
            if (type === 1) resolve(`${nr} OK!`);
            else if (type === 2) reject(`${nr} Ikke OK!`);
        }
    });
}

//Promish any
//Denne gør at hvis en resolves, retuneres denne. 
//altså den første der resolves retuneres. 
//ellers fejler den. 
Promise.any([langvarig(1),langvarig(2)])
.then((values) => {
    console.log('Resultater: ' + values)
    console.log(values);
  })
  .catch(fejl => {
    console.log('Fejl/exception: ' + fejl);
  });