import express, { Request, Response } from "express";
import path from "path";
import compression from "compression";
import cors from "cors";
import morgan from "morgan";
import Database from "./database";

const frontendDistPath = path.join(__dirname, "..", "..", "frontend", "dist");

export default function expressApp(db: Database, apiKey: string) {
  const app = express();

  app.use(cors());
  app.use(compression());
  app.use(express.json());
  app.use(morgan("dev"));

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

  app.get("/users", async (req: Request, res: Response) => {
    try {
      const users = await db.getUsers();
      if (users.length === 0) {
        return res.status(404).json({ error: "No users was found" });
      }
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: "Server Error" });
    }
  })

  app.post("/user", async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body || {};

      if (!username || !password) {
        return res
          .status(400)
          .json({ error: "Username and password are required" });
      }

      await db.addUser(username, password);
      res.status(200).send("User added");
    } catch (error) {
      res.status(500).json({ error: "Server Error" });
    }
  });

  app.get("/api/goalkeepers", async (req, res) => {
    try {
      const response = await fetch(
        "https://v3.football.api-sports.io/players/squads?team=496",
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": apiKey,
          },
        },
      );
      if (response.status === 200) {
        const data = await response.json();
        const playersArray = data.response[0].players;
        const goalies = playersArray.filter(
          (player: { position: string }) => player.position === "Goalkeeper",
        );
        res.send(goalies);
      }
    } catch (err: any) {
      console.log(err.message);
    }
  });

  app.get("/api/defenders", async (req, res) => {
    try {
      const response = await fetch(
        "https://v3.football.api-sports.io/players/squads?team=496",
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": apiKey,
          },
        },
      );
      if (response.status === 200) {
        const data = await response.json();
        const playersArray = data.response[0].players;
        const defenders = playersArray.filter(
          (player: { position: string }) => player.position === "Defender",
        );
        res.send(defenders);
      }
    } catch (err: any) {
      console.log(err.message);
    }
  });

  app.get("/api/midfielder", async (req, res) => {
    try {
      const response = await fetch(
        "https://v3.football.api-sports.io/players/squads?team=496",
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": apiKey,
          },
        },
      );
      if (response.status === 200) {
        const data = await response.json();
        const playersArray = data.response[0].players;
        const midfielders = playersArray.filter(
          (player: { position: string }) => player.position === "Midfielder",
        );
        res.send(midfielders);
      }
    } catch (err: any) {
      console.log(err.message);
    }
  });

  app.get("/api/forward", async (req, res) => {
    try {
      const response = await fetch(
        "https://v3.football.api-sports.io/players/squads?team=496",
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": apiKey,
          },
        },
      );
      if (response.status === 200) {
        const data = await response.json();
        const playersArray = data.response[0].players;
        const forwards = playersArray.filter(
          (player: { position: string }) => player.position === "Attacker",
        );
        res.send(forwards);
      }
    } catch (err: any) {
      console.log(err.message);
    }
  });

  app.use("/", express.static(frontendDistPath));

  app.get("*", (req: Request, res: Response) => {
    res.sendFile("index.html", { root: frontendDistPath });
  });

  return app;
}
