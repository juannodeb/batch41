// Promesas
// Algo que se va a cumplir o no en el futuro

const miPromesa = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 100);

  setTimeout(() => {
    // pueden haber muchos rejects pero la idea es que haya solo un resolve
    if (number > 50) {
      resolve('Cumplí con mi promesa');
    } else {
      reject('Lo siento. No pude cumplir con mi promesa');
    }
  }, 2000);

});

// console.log(miPromesa);
miPromesa
  .then((resolved) => {
    console.log(resolved);
  })
  .catch((rejected) => {
    console.log(rejected);
  });