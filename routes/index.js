var express = require('express');
var router = express.Router();
var passport = require('passport')

/* GET home page. */
router.get(['/', '/today'], function(req, res, next) {
  res.render('pages/today', {title: 'Today'});
});

router.get('/games', function(req, res, next) {
  res.render('pages/games', {title: 'Games'});
});

router.get('/apps', function(req, res, next) {
  res.render('pages/apps', {title: 'Apps'});
});

router.get('/updates', function(req, res, next) {
  res.render('pages/updates', {title: 'Updates'});
});

router.get('/search', function(req, res, next) {
  res.render('pages/search', {title: 'Search'});
});


// router.get('/about', function(req, res, next) {
//   res.render('about', {title: 'About'});
// });
//

//
// router.get('/login', function(req, res, next) {
//   if (typeof req.user !== 'undefined') res.redirect('/profile')
//   res.render('login')
// });

// router.get('/auth/twitter', passport.authenticate('twitter'));
// router.get('/auth/twitter/callback',
//   passport.authenticate('twitter', { failureRedirect: '/login' }),
//   function(req, res) {
//     // Successful authentication, redirect home.
//     res.redirect('/');
//   });

module.exports = router;
