import express, { Request, Response } from 'express';
import path from 'path';
import compression from 'compression';
import cors from 'cors';

const frontendDistPath = path.join(__dirname, '..', '..', 'frontend', 'dist');

export default function expressApp() {

    const app = express();

    app.use(cors());
    app.use(compression());
    app.use(express.json());

    app.use('/', express.static(frontendDistPath));

    app.get('*', (req: Request, res: Response) => {
        res.sendFile('index.html', { root: frontendDistPath });
    });

    return app;
}