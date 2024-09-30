const express = require("express");
const app = express();

const usersMock = [
  {
    dpi: "123456789",
    name: "John",
    email: "test@test.com",
    password: "123456",
  },
];

app.use(express.json());

// ROUTES
app.get("/users", (_, res) => {
  return res.json(usersMock);
});

app.post("/users", (req, res) => {
  console.log(req);
  const { dpi, name, email, password } = req.body;

  const existsDPI = usersMock.find((user) => user.dpi === dpi);
  if (existsDPI) {
    return res.status(400).json({ error: "User already exists" });
  }

  usersMock.push({ dpi, name, email, password });

  return res.json(usersMock);
});

app.put("/users/:dpi", (req, res) => {
  const { dpi } = req.params;
  const { name, email, password } = req.body;

  const userIndex = usersMock.findIndex((user) => user.dpi === dpi);
  if (userIndex === -1) {
    return res.status(400).json({ error: "User not found" });
  }

  usersMock[userIndex] = { ...usersMock[userIndex], name, email, password };

  return res.json(usersMock);
});

app.delete("/users/:dpi", (req, res) => {
  const { dpi } = req.params;

  const userIndex = usersMock.findIndex((user) => user.dpi === dpi);
  if (userIndex === -1) {
    return res.status(400).json({ error: "User not found" });
  }

  usersMock.splice(userIndex, 1);

  return res.json(usersMock);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
