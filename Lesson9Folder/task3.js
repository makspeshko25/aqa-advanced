const car1 = {
  brand: 'Audi',
  model: 'A4',
  year: 2019,
};

const car2 = {
  brand: 'BMW',
  model: 'M3',
  owner: 'Max',
};

const car3 = { ...car1, ...car2 };
console.log(car3);
