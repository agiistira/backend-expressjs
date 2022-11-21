const express = require("express");
const { createServer } = require("http");
const bodyParser = require("body-parser");
const path = require("path");

const api = require("./routes");
const { use } = require("./routes");

const PORT = 4000;
const app = express();
const server = createServer(app);

app.use(bodyParser.json()).use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

console.log(__dirname);

app.use(api);

server.listen(PORT, () => {
  console.log(`server running http://localhost:${PORT}`);
});
