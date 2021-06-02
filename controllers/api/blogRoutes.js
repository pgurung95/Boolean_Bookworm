const router = require('express').Router();
const { blog } = require('../../models');

// get for testing
router.get('/', async (req, res) => {
     try {
       const comment = await blog.findAll();
       res.status(200).json(comment);
     } catch (err) {
       res.status(500).json(err);
     }
   });

// create a new comment
router.post('/', async (req, res) => {
try {
    const newComment = await blog.create(req.body);
    res.status(200).json(newComment);
} catch (err) {
    res.status(400).json(err);
}
});

// update a comment
router.put('/:id', async (req, res) => {
    try {
        const comment = await blog.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(comment);
    } catch (err) {
        res.status(500).json(err);
    }
});

//delete a comment

router.delete('/:id', async (req, res) => {
    console.log("hello", req.body);
    try {
        const comment = await blog.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(comment);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;