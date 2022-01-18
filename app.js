const express = require("express");
const app = express();


app.use( (req, res, next) => {
    res.status(200).json({
        message: "Server Success >>>> !!!"
    })

    next();
})


app.use((req, res, next) => {
  res.status(200).json({
    message: "Other Message !!",
  });
});

module.exports = app;