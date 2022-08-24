import Hapi from "@hapi/hapi";
import routes from "./routes";
import { db } from "./database";

let server;

const start = async () => {
  server = Hapi.server({
    port: 8000,
    host: "localhost",
  });

  routes.forEach((route) => server.route(route));
  db.connect();
  await server.start();
  console.log(`Server is listening on ${server.info.port}`);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

process.on("SIGINT", () => {
  console.log("stopping server...");
  server.stop({ timeout: 10000 });
  db.end();
  process.exit(0);
});

start();
// npx nodedemon --exce npx babel-node src/server.js
