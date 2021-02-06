const { sequelize } = require('./data.js');

sequelize.query(`SELECT * FROM "Photos" WHERE "photoId"=10`)
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
