const express = require("express");
const app = express();
const PORT = 8000;

const rappers = {
  "21 savage": {
    birthName: "Sheyaa Bin Abraham-Joseph",
    birthLocation: "London, England",
    Age: 29,
  },

  "andy mineo": {
    birthName: "Andy Mineo",
    birthLocation: "Washington Heights, New York",
    age: 34,
  },
  whatuprg: {
    birthName: "Raul Garcia",
    birthLocation: "ATL, Georgia",
    age: 25,
  },
  unknown: {
    birthName: "NA",
    birthLocation: "NA",
    age: 0,
  },
};

//The only thing this serve is JSON.
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.get("/api/:name", (request, response) => {
  const rapperName = request.params.name.toLowerCase();
  if (rappers[rapperName]) {
    response.json(rappers[rapperName]);
  } else {
    response.json(rappers["unknown"]);
  }
  response.json(rappers);
});

app.listen(PORT, () => {
  console.log(`The server is now running on port ${PORT}! Betta go catch it!`);
});
