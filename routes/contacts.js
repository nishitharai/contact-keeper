const express = require('express');
const router = express.Router();

//@route GET api/contacts
//@desc  Get all users contacts
//@access Private

router.get('/', (req, res) => {
  res.send('Get all contacts ');
});

//@route POST api/contacts
//@desc  Get logged in user
//@access Private

router.post('/', (req, res) => {
  res.send('Add contatct ');
});

//@route PUT api/contacts
//@desc  Get logged in user
//@access Private

router.put('/:id', (req, res) => {
  res.send('Update contatct ');
});

//@route DELETE api/contacts
//@desc  Get logged in user
//@access Private

router.delete('/:id', (req, res) => {
  res.send('Delete contatct ');
});

module.exports = router;
