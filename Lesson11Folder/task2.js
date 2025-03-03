// // function that returns todo object
// function getTodo(){
//     return fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response=>response.json())
//         .catch(error => {
//     console.error('Error:', error);
//   });
// }
// // function that returns user object
// function getUser(){
//     return fetch('https://jsonplaceholder.typicode.com/users/1')
//     .then(response=>response.json())
//         .catch(error => {
//     console.error('Error:', error);
//   });
// }

// const checkPromiseArr = Promise.all([getTodo(),getUser()]);
// checkPromiseArr.then(console.log);


// function that returns todo object
function getTodo(){
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response=>response.json())
    .catch(error => {
        console.error('Error:', error);
      });
}
// function that returns user object
function getUser(){
    return fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response=>response.json())
    .catch(error => {
        console.error('Error:', error);
      });
}

const checkPromiseArr = Promise.race([getTodo(),getUser()]);
checkPromiseArr.then(console.log);