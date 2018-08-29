/*var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
  this.calculateAge= function (){
    console.log(2016 - this.yearOfBirth);
  }
}
Person.prototype.lastname = 'Smith';

var john = new Person ('John', 1990, 'teacher');
var jane = new Person ('Jane', 1969, 'designer');
var mark = new Person ('Mark', 1948, 'retired');
*/

//object.create
/*
var personProto = {
  calculateAge: function() {
    console.log(2016 - this.yearOfBirth);
  }
};

var john = Object.create(personProto);
var jane = Object.create(personProto,{
  name: { value: 'Jane'},
  year: { value: 1969},
  job: { value: 'designer'}
});
*/
/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for ( var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2016 - el;
}

function isFullAge(el) {
  return el >= 18;
}

function maxHeartRate(el) {
  if (el >= 18 && el <=81){
    return Math.round(206.9 - (0.67 * el));
  } else {
    return -1;
  }
}

function interviewQuestion(job) {
  if (job === 'designer'){
    return function(name)  {
      console.log(name + ', can you please explain what UX design is?');
  } } else if (job === 'teacher') {
      return function(name) {
          console.log('What subject do you teach, '+ name+ '?');
      }
  } else {
    console.log('Hello '+ name + ', what do you do?');
  }

  }

}

var teacherQuestion = interviewQuestion('teacher');

teacherQuestion('John');

function retirement(retirementAge) {
  var a = ' years left until retirement.';
  return function(yearOfBirth) {
      var age = 2016 - yearOfBirth;
      console.log((retirementAge - age) + a);
    };
}

var retirementUS = retirement(66);
retirementUS(1990);
*/
/*
function interviewQuestion(job) {
  if (job === 'designer'){
    return function(name)  {
      console.log(name + ', can you please explain what UX design is?');
  } } else if (job === 'teacher') {
      return function(name) {
          console.log('What subject do you teach, '+ name+ '?');
      }
  } else {
    console.log('Hello '+ name + ', what do you do?');
  }
}
*/
/*
function Question (text, answers[], correct) {
  var text = "Is JavaScript the coolest language?";
  var answers[] = "0: Yes", "1: No";
  var correct = 0;

}*/


(function (){
    var input = '0';
    var quesTrack;
    var score = 0;
    var questions = {
      0: question ('Is JavaScript the coolest language?', ['0:Yes','1:No']),
      1: question ('Are Drukhari the coolest army?', ['0:Yes','1:No']),
      2: question ('What\'s in my pocket?', ['0:Ring','1:Nothing','2:Key'])
    }
    var ans = [0,0,1];
    while (input !== 'exit'){
      quesTrack = Math.floor(Math.random() * 3);
      questions[quesTrack]();
      input = prompt('Please enter your answer, exit to exit','0');
      if (input == ans[quesTrack] ) {
        console.log('Correct Answer!');
        score ++;
      } else if (input == 'score'){
        console.log('Your score is '+ score+'.');
      } else if (input !== 'exit') {
        console.log('Wrong answer, try again!');
      }
    }
}());
function question(a, b) {
  var text = a;
  var answers = b;
  //var correct = c;
  return function () {
    console.log(a);
    for (var i = 0; i < b.length; i++) {
      console.log(b[i]);
    }
  }
  //return correct;
}
