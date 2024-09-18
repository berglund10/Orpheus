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
    try {
      const { id } = req.params;

      const user = await db.getUserById(id);

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: "Server Error" });
    }
  });

  app.use("/", express.static(frontendDistPath));

  app.get("*", (req: Request, res: Response) => {
    res.sendFile("index.html", { root: frontendDistPath });
  });

  return app;
}
