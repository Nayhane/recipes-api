const recipes = require('./recipes')
const users = require('./users')
const sessions = require('./sessions')
const passport = require('../config/auth')

module.exports = {
  recipes, users, sessions, passport
}
