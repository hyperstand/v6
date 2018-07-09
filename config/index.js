const env = process.env.NODE_ENV

module.exports = {
  _config: {
    development: require('./default') || {},
    production: require('./production') || {},
  },
  get (prop) {
    var index = this._config[env]
    if (prop) {
      prop.split('.').forEach((key, i) => {
        index = index[key]
      })
    }
    return index
  },
  set (prop, value) {
    var index = this._config[env]
    var arr = prop.split('.')
    arr.forEach((key, i) => {
      if (i === arr.length - 1) {
        index[key] = value
      } else {
        if (!((index[key] instanceof Object) && !(index[key] instanceof Array))) {
          index[key] = {}
        }
        index = index[key]
      }
    })
    return index = value
  }
}
