import axios from 'axios';

axios.get(`https://api.restful-api.dev/objects?id=ff808181932badb60195af75bcc1013b`)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Помилка:', error);
  });