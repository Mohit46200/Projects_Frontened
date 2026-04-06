const express = require("express");
const flower = require("./Routes/flower")
const plant = require("./Routes/plant")
const cors = require("cors")
const connectMongoDb = require("/home/mohit/Desktop/Coding/Projects/Project1/Backend/Connection/connection.js")


const app = express()
const PORT = 8000

connectMongoDb("mongodb+srv://mohit22600:dpXsejSe31ILy41F@cluster0.dlnt1ti.mongodb.net/")



app.use(cors());

app.use("/",flower)
app.use("/",plant)


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});