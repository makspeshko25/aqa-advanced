import axios from 'axios';

axios.get('https://api.restful-api.dev/objects')
  .then(response => {
    console.log(response.data); 
  })
  .catch(error => {
    console.error('Помилка:', error);
  });