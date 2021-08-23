const express = require("express");
const app = express();
const infosRouter = require("./infos/infos.router");
app.use(express.json());
app.use("/infos", infosRouter);

//Not Found handler
app.use((req, res, next) => {
  next({ status: 404, message: `Not found: ${req.originalUrl}` });
});

//Error handler
app.use((err, req, res, next) => {
  const { status = 500, message = "something went wrong" } = err;
  res.status(status).json({ error: message });
});
module.exports = app;
