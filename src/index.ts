interface Book {
    title: string,
    author: string,
    pages: number,
    info: Function,
}

function Book(this: Book, title: string, author: string, pages: number) {

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.info = () => { return (title + ', ' + author + ', ' + title + ' is written by ' + author + ', ' + pages + ' pages') };

}

// Typescript is basically the superset of Javascript this means anything that would run in JS should run in TS on stock values.