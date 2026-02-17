
const express = require("express");
const http = require("http");
const cors = require("cors");
const { initWebSocket } = require("./services/websocket");

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Infra-Insight Backend Running");
});

initWebSocket(server);

server.listen(5000, () => {
  console.log("Server running on port 5000");
});
