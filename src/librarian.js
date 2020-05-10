class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  }

  greetPatron = function(name, isMorning) {
    if (isMorning === true) {
      return `Good morning, ${name}!`
    } else {
      return `Hello, ${name}!`;
    }
  }

  findBook = function(bookTitle) {
    if (bookTitle === this.library.shelves.fantasy[0].title) {
      this.library.shelves.fantasy.splice(0, 1);
      return `Yes, we have ${bookTitle}`;
    } else {
      return `Sorry, we do not have ${bookTitle}`
    }
  }

  calculateLateFee = function(daysLate) {
    return Math.ceil(daysLate * 0.25);
  }
}


module.exports = Librarian;
