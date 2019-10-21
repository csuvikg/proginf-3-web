import { loadFromStorage } from "./storage.js";

export const renderSearchResults = (results) => {
    const books = results.docs;
    return books.map(book => `<li>${(book.author_name || []).join()}: ${book.title || ""}</li>`).join("");
}

export const renderFavorites = () => loadFromStorage().map(book => `<li>${book}</li>`).join("");
