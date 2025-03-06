// function that returns todo object
async function getTodo() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await response.json();
  return data;
}

// function that returns user object
async function getUser() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
  const data = await response.json();
  return data;
}

const checkPromiseArr = Promise.all([getTodo(), getUser()]);
checkPromiseArr.then(console.log);

// // function that returns todo object
// async function getTodo(){
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     const data = await response.json()
//     return data

// }

// // function that returns user object
// async function getUser(){
//     const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
//     const data = await response.json()
//     return data
// }

// const checkPromiseArr = Promise.race([getTodo(),getUser()]);
// checkPromiseArr.then(console.log);
