// class for function that returns todo object
class ToDo {
  static async getTodo() {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/todos/1'
    );
    const data = await response.json();
    return data;
  }
}

// class for function that returns user object
class User {
  static async getUser() {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/users/1'
    );
    const data = await response.json();
    return data;
  }
}

const checkPromiseArr = Promise.all([ToDo.getTodo(), User.getUser()]);
checkPromiseArr.then(console.log);
