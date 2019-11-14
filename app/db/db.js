const Sequelize = require('sequelize')
const {dbName,user,password,host,port }= require('../../config/config') .database

const sequelize = new Sequelize(dbName,user,password, {
  dialect: 'mysql',
  host,
  port,
  logging: false, //是否打印日志
  timezone: '+08:00', //时区
  define: {
    timestamps: true,
    paranoid: true,
    createAt: 'create_at',
    updateAt: 'updated_at',
    deletedAt: 'deleted_at',
  }
})

sequelize.sync({
  force: false
})

module.exports = {
  sequelize
}