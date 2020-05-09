function createTitle(title) {
  return 'The ' + title;
}

function buildMainCharacter(name, age, pronouns) {
  var bookCharacter = {
      name: name,
      age: age,
      pronouns: pronouns
    }
  return bookCharacter;
  }

function saveReview(review, arr) {
  arr.push(review);
  if (arr.length > 1) {
    if (review == arr[0]) {
      arr.pop();
    }
  }         
  return arr;
}

function calculatePageCount(bookTitle) {
  var pageCount = 0;
  for (i = 0; i < bookTitle.length; i++) {
    pageCount += 20;
  }
  return pageCount;
}

function writeBook(title, character, pageCount, genre) {
  var book = {
    title: title,
    bookCharacter: character,
    pageCount: pageCount,
    genre: genre
  }
  return book;
}

function editBook(book) {
  return book.pageCount *= .75;
}

module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  saveReview: saveReview,
  calculatePageCount: calculatePageCount,
  writeBook: writeBook,
  editBook: editBook
}
