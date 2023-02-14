const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const connectContactDb = (url) => mongoose.connect(url);

module.exports = connectContactDb;
