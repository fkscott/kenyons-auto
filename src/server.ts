import express, {Express, Request, Response} from "express";
const app: Express = express();
const port = 3000;
require("dotenv").config();
require("./routes/routes")(app);
app.set("view engine", "hbs");

app.listen(port, () => {
  console.log(`[Server]: I am running at http://localhost:${port}`);
});
