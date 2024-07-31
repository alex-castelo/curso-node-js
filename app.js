import express, { json } from "express";
import { corsMiddleware } from "./middlewares/cors.js";

const PORT = process.env.PORT ?? 1234;
const app = express();

import { moviesRouter } from "./routes/movies.js";

app.use(json());
app.use(corsMiddleware());
app.disable("x-powered-by");

app.use("/movies", moviesRouter);

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`);
});

//https://youtu.be/ev3Yxva4wI4?si=sMHjLe0u71MDQbPT&t=2295
