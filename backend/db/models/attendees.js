'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Attendees extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Attendees.init({

    status:{
      type:DataTypes.STRING,
      validate:{
        isIn: [['organizer', 'co-host', 'member','pending',"waitlist","attending"]]
      }
    }
  }, {
    sequelize,
    modelName: 'Attendees',
  });
  return Attendees;
};