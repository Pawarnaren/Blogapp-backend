import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from "body-parser";

import Connection from "./Database/db.js";
import Router from "./routes/route.js";

dotenv.config();


const app = express();


app.use(cors());
app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))
app.use('/', Router);


const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})

// encryted user name and password retrieving form env file
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const URL = process.env.MONGODB_URI || `mongodb://${USERNAME}:${PASSWORD}@ac-dynjupn-shard-00-00.trgqxch.mongodb.net:27017,ac-dynjupn-shard-00-01.trgqxch.mongodb.net:27017,ac-dynjupn-shard-00-02.trgqxch.mongodb.net:27017/?ssl=true&replicaSet=atlas-7hwe9m-shard-0&authSource=admin&retryWrites=true&w=majority`;

Connection(URL);