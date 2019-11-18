const bcrypt = require('bcryptjs')
const { sequelize } = require('../db/db')
const { Sequelize, Model } = require('sequelize')
const {NotFound,AuthFailed} = require('../middlewares/http-exception')


class User extends Model {
  static async verifyEmailPassword(email,plainPassword) {
    const user = await User.findOne({
      where: {
        email
      }
    })
    if(!user) {
      throw new NotFound('账号不存在!')
    }
    const correct = bcrypt.compareSync(plainPassword,user.password)
    if(!correct) {
      throw new AuthFailed('密码错误!')
    }
    return user
  }
}

User.init({
  //主键
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nickname: Sequelize.STRING,
  email: {
    type: Sequelize.STRING(128),
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    set(val) {
      const salt = bcrypt.genSaltSync(10)
      const psw = bcrypt.hashSync(val,salt)
      this.setDataValue('password',psw)
    }
  },
  openid: {
    type: Sequelize.STRING(64),
    unique: true
  },
},{
  sequelize,
  tableName: 'user'
})

module.exports = {
  User
}