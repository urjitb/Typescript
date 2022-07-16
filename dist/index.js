"use strict";
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.info = () => { return (title + ', ' + author + ', ' + title + ' is written by ' + author + ', ' + pages + ' pages'); };
}
const animalFarm = new Book("Animal Farm", "George Orwell", 112);
console.log(animalFarm.info());
//# sourceMappingURL=index.js.map