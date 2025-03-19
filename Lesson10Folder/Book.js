export class Book {
  constructor(title, author, publishYear) {
    this.title = title;
    this.author = author;
    this.publishYear = publishYear;
  }
  printInfo() {
    console.log(
      `The book title is ${this.title}, the author is ${this.author} and it was published in ${this.publishYear}`
    );
  }
  static findOldestBook(books) {
    return books.reduce((oldest, current) => {
      if (current.publishYear < oldest.publishYear) {
        return current;
      } else {
        return oldest;
      }
    });
  }
  get title() {
    return this._title;
  }
  get author() {
    return this._author;
  }
  get publishYear() {
    return this._publishYear;
  }
  set title(newTitle) {
    if (typeof newTitle !== 'string') {
      throw new Error('Title is not a string');
    }
    this._title = newTitle;
  }

  set author(newAuthor) {
    if (typeof newAuthor !== 'string') {
      throw new Error('Author is not a string');
    }
    this._author = newAuthor;
  }

  set publishYear(newYear) {
    if (!Number.isInteger(newYear) || newYear < 0) {
      throw new Error('Publish year must be a positive integer');
    }
    this._publishYear = newYear;
  }
}

const book1 = new Book('Sherlock Holmes', 'Arthur Conan', 1890);
book1.printInfo();
const book2 = new Book('Ninja', 'Uknown', 1990);
book2.printInfo();
const book3 = new Book('Butter', 'Asako Yuzuki', 2025);
book3.printInfo();
