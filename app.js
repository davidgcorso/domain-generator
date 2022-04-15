function domainGenerator () {
    let pronoun = ["la","nuestra", "tu"];
    let adj = ["gran", "increible", "celestial", "impactante", "simple", "real", "humilde", "magestuosa", "horrible", "fea", "apestosa"];
    let noun = ["comida", "heladeria", "perrera", "pagina", "discoteca"];
    let domain = [".com", ".cl", ".net", ".gob", ".co"];

let generatorPronoun = Math.floor(Math.random() * pronoun.length); 
let generatorAdj = Math.floor(Math.random() * adj.length);
let generatorNoun = Math.floor(Math.random() * noun.length);
let generatorDomain = Math.floor(Math.random() * domain.length);

return "www." + pronoun[generatorPronoun] + adj[generatorAdj] + noun[generatorNoun] + domain[generatorDomain] ;
}
console.log (domainGenerator());

let boton = document.querySelector('#generator3000');
boton.addEventListener('click', ()=>{
let contenedor = document.querySelector('#contenido');
let p = document.createElement('p');
p.innerText = domainGenerator();
contenedor.appendChild(p);
});