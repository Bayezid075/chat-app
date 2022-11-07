const { check } = require("express-validator");
const createError = require("express-validator");
const People = require("../../models/people");
const usersValidator = [
  check("name")
    .isLength({ min: 1 })
    .withMessage("name is require")
    .isAlpha("en-US", { ignore: "-" })
    .withMessage("name must be only alphabet!")
    .trim(),
  check("email")
    .isEmail()
    .withMessage("Invalid email address !")
    .trim()
    .custom(async (value) => {
      try {
        const user = await People.findOne({ email: value });
      } catch (error) {
        throw createError("email already used ");
      }
    }),
];
