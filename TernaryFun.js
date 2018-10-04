function getGrade(score) {
    let grade = '';
    // Write your code here
      (score > 25)
    ? grade = 'A'
    : (score > 20)
    ? grade = 'B'
    : (score > 15)
    ? grade = 'C'
    : (score > 10)
    ? grade = 'D'
    : (score > 5)
    ? grade = 'E'
    : grade = 'F';

return grade;
}

console.log(getGrade(11));
