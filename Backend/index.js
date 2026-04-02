const express = require("express");
const flower = require("./Routes/flower")
const plant = require("./Routes/plant")
const cors = require("cors");


const app = express();
const PORT = 8000;

app.use(cors());

app.use("/",flower)
app.use("/",plant)


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});