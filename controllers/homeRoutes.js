const router = require('express').Router();
const { Journal, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all journals and JOIN with user data
    const journalData = await Journal.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const journals = journalData.map((journal) => journal.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      journals, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.get('/journals/:id', async (req, res) => {
  try {
    const journalData = await Journal.findByPk(req.params.id, {
      include: [
        {
          model: User, 
          attributes: ['name'],
        },
        {
          model: Comment, 
  include:[
    {
      model:User,
      attributes: 
      ['name']
    }
  ]
        },
      ],
    });

    const journal = journalData.get({ plain: true });
console.log(journal.comments)
    res.render('journal', {
      ...journal,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Journal }],
    });

    const user = userData.get({ plain: true });
console.log(user)
    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

router.get('/createjournal', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (!req.session.logged_in) {
    res.redirect('/login');
    return;
  }

  res.render('createJournal');
});

router.get('/editjournal/:id', async (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (!req.session.logged_in) {
    res.redirect('/login');
    return;
  }

  const journalData = await Journal.findByPk(req.params.id, {
    include: [
      {
        model: User,
        attributes: ['name'],
      },
    ],
  });

  const journal = journalData.get({ plain: true });

  res.render('editjournal', {
    journal
  });
});

module.exports = router;
