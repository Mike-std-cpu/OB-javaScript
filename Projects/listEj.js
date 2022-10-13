// - Una variable que contenga la lista de la compra (mínimo 5 elementos)

const articles = ['Cookies', 'Water', 'Milk','Bread', 'Meat'];

// - Modifica la lista de la compra y añádele "Aceite de Girasol"

console.log(articles);
articles.push('Sunflower oil');
console.log(articles);

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

articles.pop('Sunflower oil');
console.log(articles);

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

const favMovies = [
    {name: 'Back to the Future', director: 'Robert Zemeckis', date: new Date("Jul 03 1985")},
    {name: 'Harry Potter the half-blood prince', director: 'David Yates', date: new Date("Jul 07 2009")},
    {name: 'John Wick', director: 'Chad Tahelski', date: new Date("Oct 24 2014")}
]

console.log(favMovies);

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

let year2010 = favMovies.filter(movie =>{
    if(movie.date.getFullYear() > 2010){
        return true;
    }else{
        return false;
    }
});

console.log(year2010);

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

const directors = favMovies.map((movie, i) => `${i + 1}.- ${movie.director}`);
console.log(directors);

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

const moviesName = favMovies.map((movie, i) => `${i + 1}.- ${movie.name}`);
console.log(moviesName);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

const moviesDirectrs = moviesName.concat(directors);
console.log(moviesDirectrs);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)

const listaMovies = [...moviesDirectrs]
console.log(listaMovies);
listaMovies.sort((anterior, despues) =>{
    if(anterior > despues){
        return 1;
    }else if (anterior < despues){
        return -1;
    }else{
        return 0;
    }
})
console.log(listaMovies);