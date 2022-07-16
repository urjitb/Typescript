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

const animalFarm = new (Book as any)("Animal Farm", "George Orwell", 112)
console.log(animalFarm.info()) 