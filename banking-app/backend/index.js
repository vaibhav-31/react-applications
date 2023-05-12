var express = require("express");

var server = express()

var cors = require("cors");

const bodyParser = require("body-parser")

const cookieParser = require("cookies-parser")

server.use(express.json())
server.use(bodyParser.urlencoded({
    extended: true
}));

const corsOptions = {
    credentials: true,
    optionSuccessStatus: 200,
    origin: 'http://localhost:3000'

}

server.use(cors(corsOptions));

server.use(cookieParser);

server.use("/auth", require("./Routes/api-routes"))


server.listen(4000, () => {
    console.log('Server is running')
})