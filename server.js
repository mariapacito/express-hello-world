const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => res.type('html').send(html));

app.get('/req', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})

app.get("/meunome", (req, res) => {
    res.send("Meu nome é Maria Clara Pacito Seleguim");
});

app.get("/tico", (req, res) => {
    res.send("teco");
});

app.get("/pokemons", (req, res) => {
    const pokemons = [
        { ordem: 1,  nome: "Caterpie",   pokedex: 10 },
        { ordem: 2,  nome: "Pidgeotto",  pokedex: 17 },
        { ordem: 3,  nome: "Bulbasaur",  pokedex: 1 },
        { ordem: 4,  nome: "Charmander", pokedex: 4 },
        { ordem: 5,  nome: "Squirtle",   pokedex: 7 },
        { ordem: 6,  nome: "Krabby",     pokedex: 98 },
        { ordem: 7,  nome: "Primeape",   pokedex: 57 },
        { ordem: 8,  nome: "Tauros",     pokedex: 128 },
        { ordem: 9,  nome: "Muk",        pokedex: 89 },
        { ordem: 10, nome: "Lapras",     pokedex: 131 }
    ];

    res.json(pokemons);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Hello from Render!</title>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    <script>
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          disableForReducedMotion: true
        });
      }, 500);
    </script>
  </head>
  <body>
    <section>
      Hello Express API
    </section>
  </body>
</html>
`;