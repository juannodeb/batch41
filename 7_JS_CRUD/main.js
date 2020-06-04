// C --> create
// R --> read
// U --> update
// D --> delete

const request = require('request');
// const { Author } = require('./Author');

const createAuthor = () => {
  return new Promise((resolve, reject) => {
    const endPoint = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/';
    const author = {
      name: 'Otro Juan',
      last_name: 'Otro Juan',
      nacionalidad: 'MX',
      biography: 'Esta es mi otra bio',
      gender: 'M',
      age: 24
    };

    request.post(endPoint, {form: author}, (error, response, body) => {
      if (error === null) {
        const res = JSON.parse(body);
        // const { name, last_name, nacionalidad, biography, gender, age } = res;
        // const author = new Author(name, last_name, nacionalidad, biography, gender, age)
        // resolve(author);
        resolve(res);
      } else {
        reject('No se ha creado el autor, inténtelo nuevamente');
      }
    });
  });
};

createAuthor()
  .then((author) => console.log(author))
  .catch((error) => console.log(error));