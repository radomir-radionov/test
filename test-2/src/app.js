/**
 * APP ENTRY POINT
 *
 * Request flow: middleware → routes → 404 → error middleware
 * - express.json() — JSON body → req.body
 * - requestLogger — pipeline example (runs before routes)
 * - healthRoutes — /, /health, POST /data
 * - userRoutes — mounted at /users (REST-style paths inside the Router)
 * - notFoundHandler — unmatched paths
 * - errorHandler — next(err)
 */

import express from "express";
import { requestLogger } from "./middleware/requestLogger.js";
import { notFoundHandler } from "./middleware/notFound.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { healthRoutes } from "./routes/health.routes.js";
import { userRoutes } from "./routes/user.routes.js";

const app = express();
const PORT = 3002;

app.use(express.json());
app.use(requestLogger);

app.use("/", healthRoutes);
app.use("/users", userRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server: http://localhost:${PORT}`);
  console.log("GET /, GET /health, POST /data | Users: /users …");
});
