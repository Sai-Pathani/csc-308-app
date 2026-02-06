import express from "express";
import cors from "cors";
import userService from "./user-services.js";

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", (req, res) => {
  const name = req.query.name;
  const job = req.query.job;
  userService.getUsers(name, job).then((result) => res.send(result));
});

app.get("/users/:id", (req, res) => {
  const id = req.params["id"];
  userService.findUserById(id).then((result) => {
    if (result === undefined) {
      res.status(404).send("Resource not found");
    } else {
      res.send(result);
    }
  });
});

app.post("/users", (req, res) => {
  const userToAdd = req.body;
  userService.addUser(userToAdd).then((result) => {
    res.status(201).send(result);
  });
});

app.delete("/users/:id", (req, res) => {
  const id = req.params["id"];
  userService.deleteUserById(id).then((deleted) => {
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).send("Resource not found");
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
