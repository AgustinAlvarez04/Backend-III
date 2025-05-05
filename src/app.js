import express from "express";
import userRouter from "./routers/user.router.js";
import { initMongoDb } from "./config/db.connection.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRouter);

const PORT = 8080;

initMongoDb().then(() => console.log("Connect MongoDb"));

const server = app.listen(PORT, () => {
  console.log(`Server listo en https://localhost:${PORT}`);
});

server.on("Error", (err) => console.log(err));
