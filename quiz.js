var correct_answers = 0;
var ans_right = [];
var ans_wrong = [];
var questions = [['How many states are int the United States?', 54],
                 ['How many legs does an insect have?', 4],
                 ['How many continents are there?', 5]
                ];
for(var i = 0; i < questions.length; i += 1){
  if (prompt(questions[i][0]) === questions[i][1] ){
    correct_answers++;
    ans_right.push(questions[i]);
  }else{
    ans_right.push(questions[i]);
  }
}

function print(message) {
  var outputDiv = ducument.getElementById('output');
  outputDiv.innerHTML = message;
//  document.write(message);
}

print('You got ' + correct_answers + ' question(s) right.'+ 'You got these questions correct:');

for(var i = 0; i < ans_right.length; i += 1){
  print(i+1 + '. ' + ans_right[i][0]);
}

print('You got these question(s) wrong.');

for(var i = 0; i < questions.length - ans_right.length; i += 1){
  print(i+1 + '. ' + ans_wrong[i][0]);
}
