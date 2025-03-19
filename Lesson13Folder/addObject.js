import axios from 'axios';
let createdObjectId;
axios.post('https://api.restful-api.dev/objects', {
    "name": "Apple MacBook Pro 16",
    "data": {
       "year": 2019,
       "price": 1849.99,
       "CPU model": "Intel Core i9",
       "Hard disk size": "1 TB"
    }
 })
    .then(response => {
        createdObjectId = response.data.id;
        console.log(response.data)})
    .catch(error => console.error(error));