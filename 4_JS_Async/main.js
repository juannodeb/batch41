console.log(1);

// Cuello de botella
for(var i = 0; i <= 999; i++);

// El function dentro de setTimeout es una función anónima
setTimeout(function() {
  console.log(2);
}, 5000);

setTimeout(function() {
  console.log(3);
}, 3000);

console.log(4);