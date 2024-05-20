import "reflect-metadata";
import "express-async-errors";
import express, { json } from "express";
import { carRouter } from "./routes/car.routes";
import { HandleErrors } from "./errors/handleErrors";

export const app = express();

app.use(json());

app.use("/cars", carRouter);
app.use(HandleErrors.execute);