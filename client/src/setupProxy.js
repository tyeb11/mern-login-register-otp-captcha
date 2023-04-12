const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    [
      "/api",
      "/api/auth/register",
      "/api/auth/verify-otp",
      "/api/data/state",
      "/api/data/subject",
      "/api/data/city",
      "/api/data/test-date",
      "/api/data/time-slot",
      "/api/slot",
      "/api/admin/register",
      "/api/admin/all-user",
    ],
    createProxyMiddleware({
      target: "http://localhost:3001",
    })
  );
};
