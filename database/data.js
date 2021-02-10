const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('postgres://localhost:5432/gallery');

// let connect = async function() {
//   try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// }

const Item = sequelize.define('Item', {
  listingId: {
    type: DataTypes.INTEGER,
    primaryKey: true
  }
});

const Photo = sequelize.define('Photo', {
  photoId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  orderId: {
    type: DataTypes.INTEGER,
    allowNull:false
  },
  thumbnailUrl: {
    type: DataTypes.STRING,
    allowNull: false
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  room: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

Item.hasMany(Photo, {foreignKey: 'photoId', sourceKey: 'listingId'});
Photo.belongsTo(Item, {foreignKey: 'photoId', targetKey: 'listingId'});

// const getPhotos = (id) => {
//   Photo.findAll()
// }

module.exports = {
  Item,
  Photo,
  sequelize
};