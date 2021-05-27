// ? - need to get books data - do we add here?

// get = / (home page - user is not logged in)

// get = /profile  (takes user to their profile immediately after logging in)

// get = /booleanbookworm (takes user to logged-in "homepage" that displays blog - from link in the users profile)

// get = /login (takes user to login/sign-up page)

const router = require('express').Router();
const { Books, personalReadingList, blog } = require('../models');
const withAuth = require('../utils/auth');

// GET all previous read books from book club for homepage
router.get('/', async (req, res) => {
    try {
        const booksData = await Books.findAll();

        res.render('homepage', {
            booksData,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/', async (req, res) => {
    try {
        const blogData = await blog.findAll();

        res.render('homepage', {
            blogData,
            isCurrent: false
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// GET profile
router.get('/profile', withAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: personalReadingList }],
      });
  
      const user = userData.get({ plain: true });
  
      res.render('profile', {
        ...user,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/profile');
        return;
    }

    res.render('login');
});

module.exports = router;
