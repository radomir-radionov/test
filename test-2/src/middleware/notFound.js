/**
 * 404 — must be registered after all routes, before the error middleware.
 */

export function notFoundHandler(req, res) {
  res.status(404).json({ error: "Not found" });
}
