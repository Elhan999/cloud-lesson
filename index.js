import http from "http";

const students = [
  {
    name: "Elhan",
    id: 1,
  },
  {
    name: "John",
    id: 2,
  },
  {
    name: "Doe",
    id: 3,
  },
];
const courses = [
  {
    name: "Frontend",
    id: 1,
  },
  {
    name: "Backend",
    id: 2,
  },
  {
    name: "Devops",
    id: 3,
  },
];

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    return res.end("Hello World, Its Elhan on Server");
  } else if (req.url === "/students" && req.method === "GET") {
    return res.end(JSON.stringify(students));
  } else if (req.url === "/courses" && req.method === "GET") {
    return res.end(JSON.stringify(courses));
  } 
});

const port = 5001;

server.listen(port, () => {
  console.log(`server is on ${port}`);
});
