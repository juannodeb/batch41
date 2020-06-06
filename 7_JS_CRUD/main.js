// C --> create
// R --> read
// U --> update
// D --> delete

const request = require('request');
const axios = require('axios');
const mainEndpoint = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/';

/*
  1. Escribe una función que reciba como parámetros nombre, nacionalidad, biografía, género y edad
     para hacer una petición a la API para crear un autor nuevo. La función debe retornar el autor
     nuevo en una promesa.
*/

// REQUEST
const createAuthor = (name, lastName, bio, gender, age) => {
  const author = {
    name: name,
    last_name: lastName,
    nacionalidad: 'MX',
    biography: bio,
    gender: gender,
    age: age,
    is_alive: true
  };

  return new Promise((resolve, reject) => {
    request.post(mainEndpoint, {form: author}, (error, response, body) => {
      if (response.statusCode === 201 && !error) {
        const res = JSON.parse(body);
        resolve(res);
      } else {
        reject(`${response.statusCode} - No se ha creado el autor, inténtelo nuevamente`);
      }
    });
  });
};

// createAuthor('Juan', 'Juan', 'Esta es mi bio', 'M', 23)
//   .then((author) => console.log(author))
//   .catch((error) => console.log(error));

// AXIOS
const axiosCreateAuthor = (name, lastName, bio, gender, age) => {
  const author = {
    name: name,
    last_name: lastName,
    nacionalidad: 'MX',
    biography: bio,
    gender: gender,
    age: age,
    is_alive: true
  };

  return axios.post(mainEndpoint, author);
}

// axiosCreateAuthor('Paco', 'Paco', 'Hola, soy Paco', 'M', 23)
//   .then(({ data }) => console.log(data)) // Se coloca { data } para deconstruir la respuesta que me llega y mostrar sólo el valor de la llave 'data'
//   .catch((error) => console.log(error));

/*
  2. Escribe una función que reciba como parámetro un ID para realizar una petición a la API
     para hallar un autor con el ID especificado. La función debe retornar una promesa con
     la respuesta del servidor.
*/

// REQUEST
const getAuthorByID = (id) => {
  const endpoint = mainEndpoint + id;

  return new Promise((resolve, reject) => {
    request(endpoint, (error, response, body) => {
      if (response.statusCode === 200 && !error) {
        const res = JSON.parse(body);
        resolve(res);
      } else {
        reject(`${response.statusCode} - No se ha encontrado el autor, inténtelo nuevamente`)
      }
    });
  });
};

// getAuthorByID(6661)
//   .then((author) => console.log(author))
//   .catch((error) => console.log(error));

// AXIOS
const axiosGetAuthorByID = (id) => {
  const endpoint = mainEndpoint + id;

  return axios.get(endpoint);
}

// axiosGetAuthorByID(6669)
//   .then(({ data }) => console.log(data))
//   .catch((error) => console.log(error));

/*
  3. Escribe una función que reciba como parámetros nombre, nacionalidad, biografía, género y edad
     para hacer una petición a la API para modificar un autor existente. Al ejecutar La función,
     esta debe retornar el autor modificado en una promesa.
*/

// REQUEST
const updateAuthor = (id, name, lastName, bio, gender, age) => {
  const endpoint = mainEndpoint + id + '/';
  const author = {
    id: id,
    name: name,
    last_name: lastName,
    nacionalidad: 'MX',
    biography: bio,
    gender: gender,
    age: age,
    is_alive: true
  }

  return new Promise((resolve, reject) => {
    request.put(endpoint, { form: author }, (error, response, body) => {
      if (response.statusCode === 200 && !error) {
        const res = JSON.parse(body);
        resolve(res);
      } else {
        reject(`${response.statusCode} - No se ha podido actualizar el autor, inténtelo nuevamente`);
      }
    });
  });
};

// updateAuthor(6661, 'Otro Juan', 'Otro Juan', 'Esta es mi otra bio', 'M', 24)
//   .then((author) => console.log(author))
//   .catch((error) => console.log(error));

// AXIOS
const axiosUpdateAuthor = (id, name, lastName, bio, gender, age) => {
  const endpoint = mainEndpoint + id + '/';
  const author = {
    id: id,
    name: name,
    last_name: lastName,
    nacionalidad: 'MX',
    biography: bio,
    gender: gender,
    age: age,
    is_alive: true
  }

  return axios.put(endpoint, author);
};

// axiosUpdateAuthor(6669, 'Otro Paco', 'Otro Paco', 'Esta es mi otra bio', 'M', 32)
//   .then(({ data }) => console.log(data))
//   .catch((error) => console.log(error));

/*
  4. Escribe una función que reciba como parámetro un ID para realizar una petición a la API para
     eliminar un autor con el ID especificado. La función debe retornar una promesa con la
     respuesta del servidor.
*/

// REQUEST
const deleteAuthorByID = (id) => {
  const endpoint = mainEndpoint + id + '/';

  return new Promise((resolve, reject) => {
    request.delete(endpoint, (error, response) => {
      if (response.statusCode === 204 && !error) {
        resolve(`${response.statusCode} - Autor con ID ${id} eliminado correctamente`);
      } else {
        reject(`${response.statusCode} - No se ha podido eliminar el autor, inténtelo nuevamente`);
      }
    });
  });
};

// deleteAuthorByID(6662)
//   .then((author) => console.log(author))
//   .catch((error) => console.log(error));

// AXIOS
const axiosDeleteAuthorByID = (id) => {
  const endpoint = mainEndpoint + id + '/';

  return axios.delete(endpoint);
}

// axiosDeleteAuthorByID(6671)
//   .then((data) => console.log(`${data.status} - Autor eliminado correctamente`))
//   .catch((error) => console.log(error));

/*
  5. Encadenando promesas, es decir, usando las funciones que escribiste en los puntos previos,
     debes: crear, modificar y eliminar un autor.
*/


// CALLBACK HELL D:
// createAuthor('Juan', 'Juan', 'Esta es mi bio', 'M', 23)
//   .then((createdAuthor) => {
//     console.log('Autor creado');
//     console.log(createdAuthor);

//     getAuthorByID(createdAuthor.id)
//       .then((fetchedAuthor) => {
//         console.log('Autor encontrado');
//         console.log(fetchedAuthor);

//         updateAuthor(fetchedAuthor.id, 'Otro Juan', 'Otro Juan', 'Otra bio', 'M', 24)
//           .then((updatedAuthor) => {
//             console.log('Autor actualizado');
//             console.log(updatedAuthor);

//             deleteAuthorByID(fetchedAuthor.id)
//               .then((deletedAuthor) => {
//                 console.log('Autor eliminado');
//                 console.log(deletedAuthor);
//               })
//               .catch((deletedAuthorError) => {
//                 console.log(`${deletedAuthorError} - Error al eliminar el autor`)
//               })
//           })
//           .catch((updatedAuthorError) => {
//             console.log(`${updatedAuthorError} - Error al actualizar el autor`)
//           })
//       })
//       .catch((fetchedAuthorError) => {
//         console.log(`${fetchedAuthorError} - Error al obtener el autor`)
//       })
//   })
//   .catch((createdAuthorError) => {
//     console.log(`${createdAuthorError} - Error al crear el autor`)
//   });