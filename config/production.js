module.exports = {
  "env": process.env.NODE_ENV,
  "twitter": {
    "key": process.env.TWITTER_KEY,
    "secret": process.env.TWITTER_SECRET,
    "callback": process.env.TWITTER_CALLBACK
  },
  "MONGODB_URI": process.env.MONGODB_URI,
  "title": process.env.APP_TITLE || "IOS Haven"
}
