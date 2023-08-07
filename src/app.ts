import express from "express";

const app = express();

app.get("/health", (req, res) => {
  res.send("Hello, Express with TypeScript!");
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
