// imports
import express, {Express, Request, Response} from "express";
const app: Express = express();
const port = 3000;
const hbs = require("hbs");
require("dotenv").config();
require("./routes/routes")(app);

//init templating
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");
app.use("/public", express.static("public"));

app.listen(port, () => {
  console.log(`[Server]: I am running at http://localhost:${port}`);
});
