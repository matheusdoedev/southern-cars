/* eslint-disable no-console */
const app = require('../app');

const sequelize = require('../app/models/index');

const PORT = process.env.PORT || 3333;

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}\nhttp://localhost:3333`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
