import { Book } from './Book.js';
export class EBook extends Book {
  constructor(title, author, publishYear, fileFormat) {
    super(title, author, publishYear);
    this.fileFormat = fileFormat;
  }
  printInfo() {
    console.log(
      `The book title is ${this.title}, the author is ${this.author} and it was published in ${this.publishYear}. You can download the Ebook in ${this.fileFormat} format`
    );
  }
  static convertToEBook(bookInstance, fileFormat) {
    if (!(bookInstance instanceof Book)) {
      throw new Error('Argument must be an instance of Book');
    }
    return new EBook(
      bookInstance.title,
      bookInstance.author,
      bookInstance.publishYear,
      fileFormat
    );
  }
  get fileFormat() {
    return this._fileFormat;
  }
  set fileFormat(newFormat) {
    const allowedFormats = ['PDF', 'DOC'];
    if (!allowedFormats.includes(newFormat)) {
      throw new Error('Invalid file format');
    }
    this._fileFormat = newFormat;
  }
}
const ebook = new EBook('Sherlock Holmes', 'Arthur Conan', 1890, 'PDF');
ebook.printInfo();

const myBook = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
const myEBook = EBook.convertToEBook(myBook, 'PDF');
console.log(myEBook);
