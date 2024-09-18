import express, { Request, Response } from "express";
import path from "path";
import compression from "compression";
import cors from "cors";
import Database from "./database";

const frontendDistPath = path.join(__dirname, "..", "..", "frontend", "dist");

export default function expressApp(db: Database) {
  const app = express();

  app.use(cors());
  app.use(compression());
  app.use(express.json());

  app.get("/user/:id", async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await db.getUserById(id);
    res.send(user);
  });

  app.use("/", express.static(frontendDistPath));

  app.get("*", (req: Request, res: Response) => {
    res.sendFile("index.html", { root: frontendDistPath });
  });

  return app;
}
