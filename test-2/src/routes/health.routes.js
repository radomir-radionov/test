/**
 * Health + root + JSON echo demo (lesson: Router, express.json).
 */

import { Router } from "express";

const router = Router();

router.get("/", (_req, res) => {
  res.type("text").send("API running");
});

router.get("/health", (_req, res) => {
  res.status(200).json({
    status: "ok",
    uptime: process.uptime(),
  });
});

router.post("/data", (req, res) => {
  res.json({ received: req.body });
});

export const healthRoutes = router;
