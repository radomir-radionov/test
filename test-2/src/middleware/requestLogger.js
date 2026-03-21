/**
 * Runs for every request before route handlers (middleware pipeline).
 */

export function requestLogger(req, _res, next) {
  console.log(`[${req.method}] ${req.url}`);
  next();
}
