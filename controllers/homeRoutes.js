// ? - need to get books data - do we add here?

// get = / (home page - user is not logged in)

// get = /profile  (takes user to their profile immediately after logging in)

// get = /booleanbookworm (takes user to logged-in "homepage" that displays blog - from link in the users profile)

// get = /login (takes user to login/sign-up page)

const router = require('express').Router();
const { Books, personalReadingList } = require('../models');
// Import the custom middleware
// const withAuth = require('../utils/auth');

// GET all previous read books from book club for homepage
router.get('/', async (req, res) => {
    try {
        const booksData = await Books.findAll({
            include: [
                {
                    model: Books,
                    attributes: ['title']
                },
            ],
        });

        const books = booksData.map((book) =>
            book.get({ plain: true })
        );

        res.render('homepage', {
            books,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// GET profile
router.get('/profile', async (req, res) => {
    try {
        const prBooksData = await personalReadingList.findAll({
            include: [
                {
                    model: Books,
                    attributes: ['title'],
                },
            ],
        });

        const books = booksData.map((book) =>
            book.get({ plain: true })
        );

        res.render('profile', {
            books,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

module.exports = router;
