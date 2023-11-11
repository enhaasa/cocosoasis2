const params = new URLSearchParams(window.location.search);
const session = params.get('id');

const api = "https://kiwi-enhasa.herokuapp.com";
const endpoint = "/receipt?id=";
const query = session;

async function getArchived_orders() {
    return fetch(api + endpoint + encodeURIComponent(query))
    .then(response => response.json())
    .then(data => data.receipt);
}

function sortArchivedArray (array) {
    let sortedArray = [];

    array.forEach((arrayItem, index) => {

        let duplicate = false;
        let duplicateIndex = 0;

        arrayItem.price = parseInt(arrayItem.price);
        arrayItem.table = parseInt(arrayItem.table);
        
        sortedArray.forEach((sortedItem, index) => {
            if(sortedItem.name === arrayItem.name
            && sortedItem.price === arrayItem.price) {
                duplicate = true;
                duplicateIndex = index;
            }
        })

        if (!duplicate) {
            sortedArray.push({...arrayItem, amount: 1, ids: [arrayItem], total: arrayItem.price});
        } else {
            sortedArray[duplicateIndex].amount ++;
            sortedArray[duplicateIndex].ids.push(arrayItem.id);
            sortedArray[duplicateIndex].total += arrayItem.price;
        }
    });

    return sortedArray;
}

async function build() {
    const receipt = await getArchived_orders();

    const data = {
        venue: receipt.name,
        address: receipt.address,
        date: receipt.datetime,
        section: receipt.channel.section_name,
        seating: `Seating ${receipt.channel.name}`,
        waiter: receipt.waiter,
        orders: sortArchivedArray(receipt.orders),
        services: receipt.services,
        total: receipt.price
    }

    const elements = {

    }

    
}