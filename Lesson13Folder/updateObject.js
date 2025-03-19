
import axios from 'axios';
axios.put('https://api.restful-api.dev/objects/ff808181932badb60195af75bcc1013b',{
    "name": "Apple MacBook Pro 16",
    "data": {
       "year": 2019,
       "price": 2049.99,
       "CPU model": "Intel Core i9",
       "Hard disk size": "1 TB",
       "color": "silver"
    }
 } )
    .then(response => console.log(response.data))
    .catch(error => console.error(error));