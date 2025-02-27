import { Book } from "./Book.js";
import { EBook } from "./EBook.js";

const books = [
    new Book("Sherlock Holmes", "Arthur Conan", 1890),
    new Book("Ninja", "Unknown", 1990),
    new EBook("Digital World", "Tech Author", 2010, "PDF"),
    new Book("Butter", "Asako Yuzuki", 2025)
];

const oldestBook = Book.findOldestBook(books);

console.log("The oldest book is:");
console.log(oldestBook);