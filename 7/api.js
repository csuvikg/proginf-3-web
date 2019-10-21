const baseUrl = "http://openlibrary.org/search.json";

export const searchDatabase = async (query) => {
    const response = await fetch(`${baseUrl}?q=${encodeURI(query)}`);
    if (response.status === 200) {
        return await response.json();
    }
}
