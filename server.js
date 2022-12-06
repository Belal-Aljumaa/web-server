import { createServer } from "http";

const port = 3333;

createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text-plain" });
    res.write("info site");
    res.end();
  })
  .listen(port);

console.log(`listening on http://localhost:${port}`);
