const router = require('express').Router();
const { Journal, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// Journals post and delete
router.post('/', withAuth, async (req, res) => {
  try {
    const newJournal = await Journal.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newJournal);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const journalData = await Journal.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!journalData) {
      res.status(404).json({ message: 'No journal found with this id!' });
      return;
    }

    res.status(200).json(journalData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
  try {
    const editJournal = await Journal.update({
      ...req.body,
      user_id: req.session.user_id,
    },{
      where: {id: req.params.id}
    });

    res.status(200).json(editJournal);
  } catch (err) {
    res.status(400).json(err);
  }
});


module.exports = router;
