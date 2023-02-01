function domainGenerator () {
    let pronoun = ["la","nuestra", "tu", "su"];
    let adj = ["gran", "increible", "celestial", "impactante", "simple", "real", "humilde", "magestuosa", "tremenda", "magica", "enorme", "poderosa"];
    let noun = ["comida", "heladeria", "perrera", "pagina", "discoteca", "carniceria", "piezzeria", "veterinaria", "barberia"];
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
contenedor.innerHTML= `<p class="animate__animated animate__backInLeft">${domainGenerator()}</p>`;
});