const express = require('express');
const router = express.Router();
const cors = require('cors');
const morgan = require('morgan');
router.use(cors());
router.use(morgan('dev'));
router.use(express.json());

let authors = [
  {
    id: 0,
    name: 'Abdulmuheez',
  },
  {
    id: 1,
    name: 'Olakunle',
  },
];

router.get('/', (req, res) => {
  res.json(authors);
});

router.post('/', (req, res) => {
  const newAuthor = req.body;
  authors.push(newAuthor);
  res.status(201).json(authors);
});

router.get('/:id', (req, res) => {
  const author = authors.find(
    (author) => author.id === parseInt(req.params.id)
  );
  if (!author) return res.status(404).send('Author not found');
  res.status(200).json(author);
});

router.put('/:id', (req, res) => {
  const author = authors.find(
    (author) => author.id === parseInt(req.params.id)
  );
  if (!author) return res.status(404).send('Author not found');

  author.name = req.body.name;
  res.status(200).json(author);
});

router.delete('/:id', (req, res) => {
  const author = authors.find(
    (author) => author.id === parseInt(req.params.id)
  );
  if (!author) return res.status(404).send('Author not found');

  const new_authors = authors.filter(
    (author) => author.id !== parseInt(req.params.id)
  );

  authors = new_authors;
  res.status(200).json(authors);
});

module.exports = router;
