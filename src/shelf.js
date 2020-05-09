function shelfBook(book, shelf) {
  shelf.unshift(book);
  if (shelf.length > 3) {
    shelf.shift();
  }
  return shelf;
}

function unshelfBook(bookTitle, shelf) {
  for (i = 0; i < shelf.length; i++) {
    if (bookTitle === shelf[i].title) {
      shelf.splice(1, 1);
    }
  }
  return shelf;
}

function listTitles(shelf) {
  var titles = [];
  for (i = 0; i < shelf.length; i++) {
    titles.push(shelf[i].title);
  }
  var titleString = titles.join(', ');
  return titleString;
}

function searchShelf(shelf, bookTitle) {
  for (i = 0; i < shelf.length; i++) {
    if (bookTitle === shelf[i].title) {
      return true;
    }
  }
  return false;
}


module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  listTitles: listTitles,
  searchShelf: searchShelf
};
