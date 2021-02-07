const express = require("express");
const app = express();
const port = 3000;

//* Register a homepage url
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`The server is listening at http://localhost:${port}`);
});
