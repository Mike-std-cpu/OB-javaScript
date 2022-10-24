// Instalar Axios para hacer llamadas  a servidores externos.
//* Link de npm : https://www.npmjs.com/package/axios

// Importar dependendias por ECMA6
import axios from "axios"
// Importar dependencias por CommonJS
//const axios = require('axios').default;

// Make a request for a user with a given ID
axios.get('https://pokeapi.co/api/v2/pokemon/pikachu') //Con el .data odremos acceder a su informacion del pokemon
  .then(function (response) {
    // handle success
    console.log("Paso C:");
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log("Error detectado! :c");
    console.log(error);
  })
