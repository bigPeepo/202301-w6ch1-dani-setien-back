const cors = require("cors");
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("todoes.json");
const port = process.env.PORT || 4001;

server.use(cors());
server.use(router);
server.listen(port);
