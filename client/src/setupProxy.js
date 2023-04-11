const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    ["/api/auth/register"],
    createProxyMiddleware({
      target: "http://localhost:3001",
    })
  );
};
