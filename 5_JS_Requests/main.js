// HTTP request using the request npm

const request = require('request');

request('https://pokeapi.co/api/v2/pokemon/pikachu', (error, response, body) => {
  // console.log(error);
  // console.log(response.statusCode);
  if ( response.statusCode === 200 ) {
    console.log(body);
  }
});