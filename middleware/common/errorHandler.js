const createError = require("http-errors");

export function notFoundError(req, res, next) {
  next(createError(404, "404 NOT FOUND ! "));
}

export function defaultError(err, req, res, next) {
  res.render("error");
}
