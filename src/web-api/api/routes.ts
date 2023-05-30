import { Request, Response, Router } from "express";
import { config } from '../config';

import phoneRoute from "../../phone/api/routes/index";

const router = Router();

/** GET /health-check - Check service health */
router.get('/health-check', (_req: Request, res: Response) =>
    res.send({ check: 'Phone repair API server is live!. 📦 🧧 💪🏾' }),
);

// api docs route
router.route('/docs').get((_req: Request, res: Response) => res.redirect(config.apiDocs));

// phone route
router.use("/phone", phoneRoute)


export default router;
