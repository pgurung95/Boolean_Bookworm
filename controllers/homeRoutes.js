
const router = require('express').Router();
const { Books, personalReadingList, blog } = require('../models');
const withAuth = require('../utils/auth');

// GET all previous read books from book club for homepage
router.get('/', async (req, res) => {
    try {
        const booksData = await Books.findAll();
        // const currentBook = await Books.findOne({
        //     where
        // })
                    // isCurrent: false
        const blogData = await blog.findAll();

        const posts = blogData.map((post) => post.get({ plain: true }));
        const books = booksData.map((book) => book.get({ plain: true }));

        res.render('homepage', {
            books, posts,
            logged_in: req.session.logged_in 
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
        res.redirect('/homepage');
        return;
    }

    res.render('login');
});

module.exports = router;
