var student = [
  {Name: 'Jodan', Track: 'JavaScript', Achivements: 'course1', Points: 150},
  {Name: 'Xiao', Track: 'Java', Achivements: 'course3', Points: 111},
  {Name: 'Dave', Track: 'iOS', Achivements: 'course5', Points: 120},
  {Name: 'Jody', Track: 'Web design', Achivements: 'course8', Points: 123},
  {Name: 'Lijun', Track: 'Startup', Achivements: 'course2', Points: 1120}
];

function print(message) {
//  var outputDiv = ducument.getElementById("output");
//  outputDiv.innerHTML = message;
  document.write(message);
}

var message = '';

for (var i = 0; i < student.length; i += 1){
  message += ('<h2>Student: ' + student[i].Name + '</h2>');
  message += ('<p>Track: ' + student[i].Track + '</p>');
  message += ('<p>Points: ' + student[i].Points + '</p>');
  message += ('<p>Achivements: ' + student[i].Achivements + '</p>');
}
print(message);
