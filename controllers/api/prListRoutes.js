// router.get current list
// router.put update current list
// router.post add book to reading list
// router.delete to delete book from reading list

const router = require('express').Router();
const { personalReadingList, Books} = require('../../models');
const withAuth = require('../../utils/auth');

// GET all personalReadingList for profile
router.get('/', async (req, res) => {
    try {
      const dbprListData = await personalReadingList.findAll({
        include: [
          {
            model: Books,
            attributes: ['title', 'author', 'description'],
          },
        ],
      });
  
      const personalReadingLists = dbprListData.map((PersonalReadingList) =>
        PersonalReadingList.get({ plain: true })
      );
  
      res.render('profile', {
        personalReadingLists,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  // GET one personalReadingList
  // Use the custom middleware before allowing the user to access the personalReadingList
  router.get('/PersonalReadingList/:id', withAuth, async (req, res) => {
    try {
      const dbprListData = await personalReadingList.findByPk(req.params.id, {
        include: [
          {
            model: Books,
            attributes: [
              'title',
              'author',
              'description',
            ],
          },
        ],
      });
  
      const PersonalReadingList = dbprListData.get({ plain: true });
      res.render('PersonalReadingList', { PersonalReadingList, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  // GET one Books
  // Use the custom middleware before allowing the user to access the Books
  router.get('/books/:id', withAuth, async (req, res) => {
    try {
      const dbBooksData = await Books.findByPk(req.params.id);
  
      const books = dbBooksData.get({ plain: true });
  
      res.render('books', { books, loggedIn: req.session.loggedIn });
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

router.put('/', withAuth, async (req, res) => {
    try {
      const newpersonalReadingList = await personalReadingList.update({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newpersonalReadingList);
    } catch (err) {
      res.status(400).json(err);
    }
  });

router.post('/', withAuth, async (req, res) => {
  try {
    const newpersonalReadingList = await personalReadingList.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newpersonalReadingList);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const personalReadingList = await personalReadingList.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!prListData) {
      res.status(404).json({ message: 'No personal reading list found with this id!' });
      return;
    }

    res.status(200).json(prListData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
