const express = require("express");
const mongoose = require("mongoose");
const movieRouter = require("./routes/MovieRoutes");

const app = express();
const PORT = 3000;
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/movies", movieRouter);

//configure mongoose
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/gofore-db",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);

app.listen(3000, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
