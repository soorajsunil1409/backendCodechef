const express = require("express");
const foxController = require("./controllers/foxController");
const cityController = require("./controllers/cityController");

const app = express();

// app.use(express.static('public'));

app.get("/fox", foxController);
app.get("/city", cityController);

app.listen(3000, () => {
    console.log("Server running at port 3000"); 
});
