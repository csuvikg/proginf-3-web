export const saveToStorage = (book) => {
    const savedBooks = loadFromStorage() || [];
    savedBooks.push(book);
    saveBooks(savedBooks);
}

export const deleteFromStorage = (book) => {
    const savedBooks = loadFromStorage() || [];
    const index = savedBooks.indexOf(book);
    if (index >= 0) {
        savedBooks.splice(index, 1);
        saveBooks(savedBooks);
    }
}

export const loadFromStorage = () => JSON.parse(localStorage.getItem("books"));

const saveBooks = (books) => localStorage.setItem("books", JSON.stringify(books));
