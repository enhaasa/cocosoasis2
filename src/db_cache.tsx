const db_cache = {
    getBaseUrl: function() {
        const development = process.env.NODE_ENV === "development";

        if (development) {
            return `http://localhost:3000/`;
        }

        const ENVIRONMENT = 'stage';
        const protocol = window.location.protocol;
        const hostname = window.location.hostname;
        const port = window.location.port ? `:${window.location.port}` : '';
        const stagePath = ENVIRONMENT === "stage" ? '/stage' : '';

        console.log(ENVIRONMENT)
        
        return `${protocol}//${hostname}${port}${stagePath}/cocosoasis`;
    },
    get: async function(query: string) { 
        return fetch(`${this.getBaseUrl()}/db_data/${query}.json`) 
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json(); 
            })
            .then(data => JSON.parse(data))
            .catch((error) => {
                console.error('There has been a problem with your fetch operation:', error);
                throw error;
            });
    },
}

export default db_cache;