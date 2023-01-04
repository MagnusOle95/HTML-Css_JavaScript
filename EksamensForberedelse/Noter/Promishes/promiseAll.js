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

//Promish all
//hvis alle resolves, retunere den et array med promishes. 
Promise.all([langvarig(1),langvarig(2)])
.then((values) => {
    console.log('Resultater: ' + values)
    console.log(values);
    ;
  })
  .catch(fejl => {
    console.log('Fejl/exception: ' + fejl);
  });