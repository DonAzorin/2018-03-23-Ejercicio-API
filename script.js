const populate = document.getElementById('populate');

// let holaApi = new XMLHttpRequest();
// holaApi.addEventListener("load", getData)
// holaApi.open("GET", "https://rickandmortyapi.com/api/character/");
// holaApi.send();
//
// function getData () {
//   let data = JSON.parse(this.responseText);
//   let characterInfo = data.results.map(function(character){
//     return `
//       <div class="name">
//       ${character.name}
//       </div>
//       <div class="image">
//       <img src="${character.image}" />
//       </div>
//     `
//   });
//   populate.innerHTML = characterInfo;
// }

function getData() {
  fetch('https://rickandmortyapi.com/api/character/')
  .then((resp) => resp.json())
  .then(function (data) {
    console.log(data);
    let characterInfo = data.results.map(function(character){
      return `
        <div class="name">
        ${character.name}
        </div>
        <div class="image">
        <img src="${character.image}" />
        </div>
      `
    }).join ('');
    populate.innerHTML = characterInfo;
  })
  .catch(function (error) {
    console.log(error);
  })
}
getData();

// //SOLO SI SE USA NODE O NPM
// // npm install axios --save es para instalar
// import axios from 'axios' //hacemos una instancia praa poderlo pasar
//
//
// //USAR cdn
// //script
//
// axios.get('https://rickandmortyapi.com/api/character/')
//   .then (function(data){
//     console.log(data);
//   })
//   .catch(function(error) {
//     console.log(error);
//   })
