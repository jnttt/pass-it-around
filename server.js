const express = require("express");

const PORT = process.env.PORT || 3000;
const app = express();

app.get("/", (req, res) => {
  res.send(
    `<h1> 99 Bottles of Beer on the Wall</h1> <a href="/98">take one down, pass it around </a>`
  );
});

app.get("/:number_of_bottles", (req, res) => {
  if (req.params.number_of_bottles > 0) {
    res.send(
      `<h1> ${req.params.number_of_bottles} 
        Bottles of beer on the wall </h1> 
        <a href=${req.params.number_of_bottles - 1}>
        take one down, pass it around </a>`
    );
  } else {
    res.send(`<a href="/"> Start over </a>`);
  }
});
//app.get();
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});