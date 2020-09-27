import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Ejercicio nº1 del curso de functional programming</h1>
`;

//Del array de student grades tenemos que transformarlo en un array
//de feedback para los estudiantes. Ejemplo:

// const StudentFeedback = [
//   "Nice Job Joe, you got an 88",
//   "Excellent job jen, you got an 94",
//   "Well done steph, you got an 77",
//   "What happened Allen, you got an 60",
//   "Not good Gina, you got an 54"
// ]

const studentGrades = [
  { name: "Joe", grade: 88 },
  { name: "Jen", grade: 94 },
  { name: "Steph", grade: 77 },
  { name: "Allen", grade: 60 },
  { name: "Gina", grade: 54 }
];

const jobExpression = (grade) => {
  if (grade >= 90) {
    return "Excelent Job";
  } else if (grade >= 80) {
    return "Nice Job";
  } else if (grade >= 70) {
    return "Well done";
  } else if (grade >= 60) {
    return "What happened";
  } else {
    return "Not good";
  }
};

const createFeedback = (fn) => {
  return (student) => {
    let feedback = fn(student.grade);
    let expression = `${feedback} ${student.name}, you got ${student.grade}`;
    return console.log(feedback + expression);
  };
};

studentGrades.map(createFeedback(jobExpression));
