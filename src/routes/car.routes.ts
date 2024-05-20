import { Router } from "express";

export const carRouter = Router();

carRouter.post("/");
carRouter.get("/");
carRouter.get("/:id");
carRouter.patch("/:id");
carRouter.delete("/:id");