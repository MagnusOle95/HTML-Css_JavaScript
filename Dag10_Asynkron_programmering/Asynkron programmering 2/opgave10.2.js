// opgave10.2.js
const userUrl = 'https://jsonplaceholder.typicode.com/users';
const postUrl = 'https://jsonplaceholder.typicode.com/posts?userId=';

async function getAsync(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

getAsync(userUrl).then(LaverUserArray);


function LaverUserArray(resultat) {
    let users = resultat;

    //Opretter tabel. 
    let div = document.querySelector("#users");
    let keys = Object.keys(users[0]);
    let tableStr = '<table><tr><th>' + keys[0] + '</th><th>' + keys[1] + '</th><th>'
    for (let u of users) {
        tableStr += '<tr>';
        let i = 0;
        for (let k of keys) {
            tableStr += '<td>' + u[keys[i++]] + '</td>';
        }
        tableStr += '</tr>'
    }
    tableStr += '</table>';
    div.innerHTML = tableStr;

}

// Opretter tabel. 
// let div = document.querySelector("#users");
// let keys = Object.keys(Users[0]);
// let tableStr = '<table><tr><th>' + keys[0] + '</th><th>' + keys[1] + '</th><th>'
// for (let u of Users) {
//     tableStr += '<tr>';
//     let i = 0;
//     for (let k of keys) {
//         tableStr += '<td>' + u[keys[i++]] + '</td>';
//     }
//     tableStr += '</tr>'
// }
// tableStr += '</table>';
// div.innerHTML = tableStr;

