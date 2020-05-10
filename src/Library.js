function createLibrary(libraryName) {
  var library = {
    name: libraryName,
    shelves: {fantasy: [], fiction: [], nonFiction: []}
  }
  return library;
}

function addBook(library, book) {
  if (book.genre === 'fantasy') {
    library.shelves.fantasy.push(book);
  } else if (book.genre === 'fiction') {
    library.shelves.fiction.push(book);
  } else {
    library.shelves.nonFiction.push(book);
  }
  return library;
}

function checkoutBook(library, bookTitle) {
  if (library.shelves.fiction == false) {
    return `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}`
  } else {
    library.shelves.fiction.splice(0, 1);
    return `You have now checked out ${bookTitle} from the ${library.name}`;
  }
}

module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook
};
