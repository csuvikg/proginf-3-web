import { searchDatabase } from "./api.js";
import { renderSearchResults, renderFavorites } from "./render.js";
import { saveToStorage, deleteFromStorage } from "./storage.js";

const button = document.querySelector("button");
const search = document.querySelector("input");
const searchResults = document.querySelector("#search-result");
const favorites = document.querySelector("#favorites");

button.onclick = async () => {
    const query = search.value;
    const result = await searchDatabase(query);
    searchResults.innerHTML = renderSearchResults(result);
}

searchResults.onclick = (event) => {
    if (event.target.tagName === "LI") {
        const book = event.target.innerText;
        saveToStorage(book);
        favorites.innerHTML = renderFavorites();
    }
}

window.addEventListener("load", () => favorites.innerHTML = renderFavorites());

favorites.onclick = (event) => {
    if (event.target.tagName === "LI") {
        const book = event.target.innerText;
        deleteFromStorage(book);
        favorites.innerHTML = renderFavorites();
    }
}
