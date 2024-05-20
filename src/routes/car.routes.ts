import { Router } from "express";
import { container } from "tsyringe";
import { CarServices } from "../services/car.services";
import { CarControllers } from "../controllers/car.controllers";

export const carRouter = Router();

container.registerSingleton("CarServices", CarServices);
const carControllers = container.resolve(CarControllers);

carRouter.post("/", (req, res) => carControllers.create(req,res));
carRouter.get("/", (req, res) => carControllers.getMany(req,res));
carRouter.get("/:id", (req, res) => carControllers.getOne(req,res));
carRouter.patch("/:id", (req, res) => carControllers.update(req,res));
carRouter.delete("/:id", (req, res) => carControllers.delete(req,res));