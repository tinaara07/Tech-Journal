const router = require('express').Router();
const {Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const commentData = await Comment.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!commentData) {
      res.status(404).json({ message: 'No comment found with this id!' });
      return;
    }

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
  try {
    const editComment = await Comment.update({
      ...req.body,
      user_id: req.session.user_id,
    },{
      where: {id: req.params.id}
    });

    res.status(200).json(editComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/comment/:id', withAuth, async (req, res) => {
  try {
    const comment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
      post_id: req.params.id,
    });
    console.log(comment);

    res.status(200).json(comment);
  } catch (err) {
    res.status(400).json(err);
  }
});


module.exports = router;
