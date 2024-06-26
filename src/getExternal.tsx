import sources from "./sources";

const api = sources.api;
const getExternal = {
    db: async function(query: string) {
        return await this.query(query, "/db/get.php?table=");
    },
    db_cache: async function(query: string) {
        const result = JSON.parse(await this.query(query, "/db_cache/get.php?table="));
        return result;
    },
    weekly: async function(categoryId: number) {
        return fetch(`https://littlekiwi.app/api/special_menu_item?category_id='${categoryId}'`)
            .then(res => res.json())
            .then(data => data);
    },
    files: async function(query: string) {
        return await this.query(query, "/get_files.php?query=");
    },
    query: async function(query: string, endpoint: string) {
        return await fetch(api + endpoint + encodeURIComponent(query))
        .then(response => response.json())
        .then(data => data);
    }
}

export default getExternal;