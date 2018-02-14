const express = require('express');
const app = express();
const PORT = process.env.PORT || 8888;
const db = require('./models');

app.listen(PORT, () => {
  db.sequelize.sync({ force : false });
  console.log("Server's UP" + `${PORT}`);
});