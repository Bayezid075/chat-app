const createError = require("http-errors");

function notFoundError(req, res, next) {
  next(createError(404, "404 NOT FOUND ! "));
}

function defaultError(err, req, res, next) {
  res.render("error", {
    title: "Error Occur",
  });
  // // if (res.locals.html) {
  // //   //html response
  // //   res.render("error", {
  // //     title: "error",
  // //   });
  // // } else {
  // //   res.json(res.locals.error);
  // }
}

module.exports = {
  notFoundError,
  defaultError,
};
