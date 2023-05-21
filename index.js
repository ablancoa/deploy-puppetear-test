const express = require('express');
const {scrapeLogic} = require('./scrapeLogic')
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("renderr puppeteer")
})


app.get("/scrape", (req, res) => {
  scrapeLogic(res)
})


app.listen(PORT, () => {
  console.log('listening on port 3000')
})