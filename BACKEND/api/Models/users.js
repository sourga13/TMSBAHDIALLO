const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize("process.env.bdtms, process.env.user, process.env.password, {host: localhost, dialect: mysql2, port: 8030}");

const users = sequelize.define("users", {
  userId: DataTypes.INTEGER,
  userName: {
    type: DataTypes.TEXT,
  },
  userSurName: {
    type: DataTypes.TEXT,
  },
  userMail: {
    type: DataTypes.TEXT,
  },
  userPassword: {
    type: DataTypes.TEXT,
  },
  userPhone: {
    type: DataTypes.TEXT,
  },
  userAddress: {
    type: DataTypes.TEXT,
  },
  subscribeDate: {
    type: DataTypes.DATE,
  },
  userAge: DataTypes.INTEGER,
});

(async () => {
  await sequelize.sync({ force: true });
  await users.create({
    
    users: {
        userId: 1,
        userName: "Souleymane",
        userSurName: "Diallo",
        userMail: "bah@gmail.com",
        userPassword: "pass",
        userPhone: "0600223344",
        userAddress: " Rue de Générag Mangin, Paris 75 000",
        subscribeDate: "2022 07 02 18 46",
        userAge: "18",
    }
     
  });

})();

Model.exports = users