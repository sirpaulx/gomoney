const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ message: "Hello from GO MONEY API !" });
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "Healthy" });
});

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});