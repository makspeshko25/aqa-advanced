const averagGrade = 100;

switch (true) {
  case averagGrade < 60:
    console.log('Незадовільно');
    break;
  case averagGrade >= 60 && averagGrade <= 70:
    console.log('Задовільно');
    break;
  case averagGrade >= 71 && averagGrade <= 80:
    console.log('Добре');
    break;
  case averagGrade >= 81 && averagGrade <= 90:
    console.log('Дуже добре');
    break;
  case averagGrade >= 91 && averagGrade <= 100:
    console.log('Відмінно');
    break;
  default:
    console.log('Невірний бал');
}
