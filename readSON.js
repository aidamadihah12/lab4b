const fs = require("fs");

// Load the JSON file
fs.readFile("books.json", "utf8", (err, data) => {
    if (err) {
        console.error("Error reading the file:", err);
        return;
    }

    const books = JSON.parse(data).books;

    // (a) Display the title of the first book
    console.log("Title of the first book:", books[0].title);

    // (b) Display the author of the second book
    console.log("Author of the second book:", books[1].author);

    // (c) Display all genres
    const allGenres = books.flatMap(book => book.genres);
    console.log("Genres of all books:", allGenres.join(", "));
});
