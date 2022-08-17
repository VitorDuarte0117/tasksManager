const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

app.use(express.json());
app.use(express.static("./public"));

app.use("/api/v1/tasks", tasks);

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URI);
        app.listen(3000, console.log("ta rodando"));
    } catch (error) {
        console.log(error);
    }
};
start();
