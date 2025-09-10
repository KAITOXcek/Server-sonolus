const express = require('express');
const app = express();

app.get('/sonolus/info', (req, res) => {
  res.json({
    title: "My Sonolus Server",
    banner: "/banner.png",
    background: "/background.png",
    description: "Welcome to my custom Sonolus server!"
  });
});

app.listen(3000, () => {
  console.log("Sonolus server is running on port 3000");
});