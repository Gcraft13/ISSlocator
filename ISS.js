const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.get("/api/data", async (req, res) => {
  try {
    const response = await fetch(
      "https://api.wheretheiss.at/v1/satellites/25544"
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
