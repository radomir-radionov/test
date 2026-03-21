/**
 * Express error middleware — signature (err, req, res, next) is required.
 * Catches errors passed via next(err) from controllers/services.
 */

const CLIENT_MESSAGES = new Set([
  "Email required",
  "Password required",
  "User already exists",
  "Email already taken",
]);

export function errorHandler(err, _req, res, _next) {
  const message = err?.message || "Internal Server Error";

  if (message === "User not found") {
    return res.status(404).json({ error: message });
  }

  if (CLIENT_MESSAGES.has(message)) {
    return res.status(400).json({ error: message });
  }

  console.error(err.stack || err);
  res.status(500).json({ error: "Server error" });
}
