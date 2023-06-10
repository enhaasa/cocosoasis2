import sources from "./sources";

const api = sources.api;
const getExternal = {
    db: async function(query: string) {
        return await this.query(query, "/db/get.php?table=");
    },
    db_cache: async function(query: string) {
        return JSON.parse(await this.query(query, "/db_cache/get.php?table="));
    },
    weekly: async function(type: string) {
        return await this.query(type, "/db/getMenuWeekly.php?type=");
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