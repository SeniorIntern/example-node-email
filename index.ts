import express from "express";
import contactRoute from "./routers/contact";
import infoRoute from "./routers/info";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/info", infoRoute);
app.use("/contact", contactRoute);

const port = process.env.PORT;
app.listen(port, () => console.log(`Server started on port:${port}...`));
