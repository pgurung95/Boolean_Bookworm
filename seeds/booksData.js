const { Books } = require('../models');

const booksdata = [
  {
    title: 'Aesops Fables',
    author: '',
    date_read: '',
    book_id: 1,
    description:
      '',
  },
  {
    title: 'The Notebook',
    author: '',
    date_read: '',
    book_id: 1,
    description:
      '',
  },
  {
    title: 'Game of Thrones',
    author: '',
    date_read: '',
    book_id: 1,
    description:
      '',
  },
  {
    title: 'Lord of the Rings',
    author: '',
    date_read: '',
    book_id: 1,
    description:
      '',
  },
  {
    title: 'Harry Potter,
    author: '',
    date_read: '',
    book_id: 1,
    description:
      '',
  },
  {
    title: 'Eat Pray Love',
    author: '',
    date_read: '',
    book_id: 1,
    description:
      '',
  },
  {
    title: 'Fifty Shades of Grey',
    author: '',
    date_read: '',
    book_id: 1,
    description:
      '',
  },
  {
    title: 'Pride and Prejudice',
    author: '',
    date_read: '',
    book_id: 1,
    description:
      '',
  },
  {
    title: 'Ready player Two',
    author: '',
    date_read: '',
    book_id: 1,
    description:
      '',
  },
];

const seedBooks = () => Books.bulkCreate(booksdata);

module.exports = seedBooks;
