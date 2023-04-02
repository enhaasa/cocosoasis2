const api = "https://enhasa.dev/cocosoasis/api/dbQuery.php?query=";
const db = {
    get: async function(query: string) {
        return await fetch(api + encodeURIComponent(query))
        .then(response => response.json())
        .then(data => data);
    }
}

export default db;