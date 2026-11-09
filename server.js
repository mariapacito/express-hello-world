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