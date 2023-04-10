import sources from "./sources";

const api = sources.api;
const getExternal = {
    db: async function(query: string) {
        return await this.query(query, "/dbQuery.php?query=");
    },
    files: async function(query: string) {
        return await this.query(query, "/fileQuery.php?query=");
    },
    query: async function(query: string, endpoint: string) {
        return await fetch(api + endpoint + encodeURIComponent(query))
        .then(response => response.json())
        .then(data => data);
    }
}

export default getExternal;