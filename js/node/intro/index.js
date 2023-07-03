var superheroes = require("superheroes");

for(let i = 0; i < 20; i++)
{
    var mySuperheroName = superheroes.random();
    console.log(mySuperheroName);
}