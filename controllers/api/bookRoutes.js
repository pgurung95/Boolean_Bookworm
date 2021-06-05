const router = require('express').Router();
const { Books } = require('../../models');

router.get('/', async (req, res) => {
    try {
      const book = await Books.findAll();
      res.status(200).json(book);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// create a new comment
router.post('/', async (req, res) => {
try {
   const newBook = await Books.create(req.body);
   res.status(200).json(newBook);
} catch (err) {
   res.status(400).json(err);
}
});

module.exports = router;