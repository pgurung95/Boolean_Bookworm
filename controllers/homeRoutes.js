
const router = require('express').Router();
const { Books, personalReadingList, blog, User } = require('../models');
const withAuth = require('../utils/auth');
const _ = require('underscore');

// GET all previous read books from book club for homepage
router.get('/', async (req, res) => {
    try {
        const booksData = await Books.findAll();
        const blogData = await blog.findAll();

        
        const posts = blogData.map((post) => post.get({ plain: true }));
        const books = booksData.map((book) => book.get({ plain: true }));
        const booksInOrder = _.sortBy(books, 'date_read');
        const currentBook = _.max(booksInOrder, 'date_read');
        const prevBooks = booksInOrder.pop()

        res.render('homepage', {
            books, posts, currentBook, booksInOrder,
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
  
      const prListBooks = await personalReadingList.findAll({
        where: {
          user_id: req.session.user_id
        },
      });

      const books = prListBooks.map((book) => book.get({ plain: true }));

  
      res.render('profile', {
        user,
        books,
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
