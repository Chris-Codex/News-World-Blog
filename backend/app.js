const express = require("express")
const app = express();
const mongose = require("mongoose")
const cors = require("cors")
require("dotenv/config")

app.use(express.json())
app.use(cors())


//MiddleWWare
const loginRoute = require("./routes/Login-Route")
const signUpRoute = require("./routes/SignUp-Routes")
const postRoute = require("./routes/Post-Route")


//Routes
app.use("/login", loginRoute)
app.use("/register", signUpRoute)
app.use("/post", postRoute)

//Database
mongose.connect(process.env.CONNECT_DB, () => {
    console.log("Connected to datbase and Listening to Localhost 4000")
})

app.listen(4000)