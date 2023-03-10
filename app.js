const express = require("express");
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

// Before the other routes
app.use(express.static("dist"))

const pokemons = [
  {
    id: 1,
    name: "Pikachu",
    type: "electric ⚡️",
    level: 99,
    image: "/pikachu.webp"
  }
]

app.get("/api/pokemons", (req, res) => {
  console.log("GET /api/pokemons")
  res.send({pokemons: pokemons})
});

app.post("/api/pokemons", (req, res) => {
  const data = req.body
  console.log("POST /api/pokemons", data)
  console.log(data)
  data.id = pokemons.length+1
  let response = {
    id: data.id,
    name: data.name,
    type: data.type,
    level: data.level
  }
  pokemons.push(response)
  res.redirect('/')
})

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`listening on port ${port}`))