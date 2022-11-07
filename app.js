// external import
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const cookieParser = require("cookie-parser");

// internal import
const {
  defaultError,
  notFoundError,
} = require("./middleware/common/errorHandler");

const loginRouter = require("./routes/loginRoute");
const userRouter = require("./routes/userRoute");
const inboxRouter = require("./routes/inboxRoute");

dotenv.config();

// database connection
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection successed !!");
  })
  .catch((error) => {
    console.log(error);
  });

// requests parser
app.use(express.json());

// set view engine
app.set("view engine", "ejs");

// set static folder
app.use(express.static(path.join(__dirname, "public")));

// cookie parser
app.use(cookieParser(process.env.COOKIE_SECRET));

// // Not found error handler
// app.use(notFoundError);

// // default error handler
// app.use(defaultError);

// router setup
app.use("/", loginRouter);
app.use("/", userRouter);
app.use("/", inboxRouter);

app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
});
