const student = {
  firstName: 'Maksym',
  lastName: 'Peshko',
  age: 25,
};

student.email = 'makspeshko@gmail.com';
delete student.age;
console.log(student);
