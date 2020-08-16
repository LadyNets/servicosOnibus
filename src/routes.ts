import express from "express";
import SessionController from "./controllers/SessionController";

const routes = express.Router();

routes.get("/", (req, res) => res.json("Working..."));
routes.post("/login", SessionController.create);

export default routes;
