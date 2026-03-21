/**
 * USER ROUTES (lesson pattern: Router mounted at a prefix in app.js)
 *
 * Paths here are relative to the mount — e.g. app.use("/users", userRoutes)
 * → GET "/" is GET /users, GET "/:id" is GET /users/:id
 */

import { Router } from "express";
import { userController } from "../controllers/user.controller.js";

const router = Router();

router.get("/", userController.getAllUsers);
router.post("/", userController.createUser);
router.get("/:id", userController.getUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

export const userRoutes = router;
