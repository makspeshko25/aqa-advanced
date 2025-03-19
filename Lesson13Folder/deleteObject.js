import axios from 'axios';

axios.delete('https://api.restful-api.dev/objects/ff808181932badb60195af75bcc1013b')
  .then(response => {
    console.log(response.data); 
  })
  .catch(error => {
    console.error('Помилка:', error);
  });