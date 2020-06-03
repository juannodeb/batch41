const request = require('request');
const { Band } = require('./Band');

const bandSearch = (bandName) => {
  // La función bandSearch retorna una promesa
  return new Promise((resolve, reject) => {
    const endPoint = `http://www.theaudiodb.com/api/v1/json/1/search.php?s=${bandName}`;

    // Se ejecuta request, la promesa se ejecuta tan pronto request retorne un resultado
    request(endPoint, (error, response, body) => {
      if (error === null) {
        const res = JSON.parse(body);
        const band = new Band(
          res.artists[0].strArtist,
          res.artists[0].intFormedYear,
          res.artists[0].strWebsite,
          res.artists[0].strGenre
        );
        resolve(band);
      } else {
        reject('No encontré la banda');
      }
    });

  });
};

bandSearch('Muse')
  .then((band) => console.log(band))
  .catch((error) => console.log(error));