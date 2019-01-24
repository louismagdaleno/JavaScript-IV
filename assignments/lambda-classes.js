// CODE here for your Lambda Classes

/* #### Person

* First we need a Person class. This will be our `base-class`
* Person receives `name` `age` `location` `gender` all as props
* Person receives `speak` as a method.
* This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props */

class Person {
    constructor (object) {
        this.name = object.name,
        this.age = object.age,
        this.location = object.location,
        this.gender = object.gender
    }

    speak () {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

/* #### Instructor

* Now that we have a Person as our base class, we'll build our Instructor class.
* Instructor uses the same attributes that have been set up by Person
* Instructor has the following unique props:
  * `specialty` what the Instructor is good at i.e. 'redux'
  * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
  * `catchPhrase` i.e. `Don't forget the homies`
* Instructor has the following methods:
  * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
  * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}' */
 class Instructor extends Person {
     constructor (object) {
         super(object),
         this.specialty = object.specialty,
         this.favLanguage = object.favLanguage,
         this.catchPhrase = object.catchPhrase
     }

     demo (subject) {
         console.log(`Today we are learning about ${subject}`);
     }

     grade (student , subject) {
         console.log(`${student.name} receives a perfect score on ${subject}`)
     }

     gradeAssignment (student) {
         let grade = Math.floor(Math.random() * 10);

         if (Math.floor(Math.random() * 10) % 2 === 0) {grade *= -1};

         student.grade += grade;
         console.log(`${student.name}'s new grade is ${student.grade}`);
     }
 }

/* #### Student

* Now we need some students!
* Student uses the same attributes that have been set up by Person
* Student has the following unique props:
  * `previousBackground` i.e. what the Student used to do before Lambda School
  * `className` i.e. CS132
  * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
* Student has the following methods:
  * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
  * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
  * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}` */

  class Student extends Person {
      constructor (object) {
          super(object),
          this.previousBackground = object.previousBackground,
          this.className = object.className,
          this.favSubjects = object.favSubjects,
          this.grade = 100
      }

      listsSubjects () {
        this.favSubjects.forEach(element => console.log(element));
      }

      PRAssignment (subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
      }

      sprintChallenge (subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
      }

      graduate () {
          let eligibile = this.grade >= 70;

          if (eligibile) {
              return `${this.name}  has graduated from Lambda School!`;
          }
          else {
              return `${this.name} must keep studying in order to graduate.`;
          }
      }
  }

/* #### Project Mananger

* Now that we have instructors and students, we'd be nowhere without our PM's
* ProjectManagers are extensions of Instructors
* ProjectManagers have the following uniqe props:
  * `gradClassName`: i.e. CS1
  * `favInstructor`: i.e. Sean
* ProjectManangers have the following Methods:
  * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
  * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}` */

  class ProjectManager extends Instructor {
      constructor (object) {
          super(object),
          this.gradClassName = object.gradClassName,
          this.favInstructor = object.favInstructor
      }

      standUp (slackChannel) {
        console.log(`${this.name} announces to ${slackChannel}, @channel standy times!`);
      }

      debugCode (student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
      }
  }

/* #### Stretch Problem

* Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
* Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
* Add a graduate method to a student.
  * This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
  * If the student's grade is above a 70% let them graduate! Otherswise go back to grading their assignments to increase their score. */

/* #### Create Objects */


// Instructors
const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

const cam = new Instructor({
    name: 'Cam',
    location: 'Popeville',
    age: 40,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'JS',
    catchPhrase: `Don't forget the gnomies`
  });

console.log(fred);
console.log(cam);


// Students
const louis = new Student({
    name: 'Louis',
    location: 'Los Angeles, CA',
    age: 31,
    gender: 'male',
    previousBackground : 'Computer Science',
    className : 'WEBPT4',
    favSubjects : ['Python', 'Javascript', 'Data Structures']
});

const matt = new Student({
    name: 'Matt',
    location: 'Tennessee',
    age: 33,
    gender: 'male',
    previousBackground : 'None',
    className : 'WEBPT4',
    favSubjects : ['Front End', 'Javascript']
});

console.log(louis);
console.log(matt);

// Project Managers

const gannon = new ProjectManager({
    name: 'Gannon',
    location: 'Somewhere, USA',
    age: 35,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'JS',
    catchPhrase: `mob programming`,
    gradClassName: 'CS9001',
    favInstructor: 'Josh Knell'
  });

  const carlos = new ProjectManager({
    name: 'Carlos',
    location: 'Somewhere Else, USA',
    age: 32,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'JS',
    catchPhrase: `dont post solutions`,
    gradClassName: 'CS9000',
    favInstructor: 'Cameron Pope'
  });

  console.log(gannon);
  console.log(carlos);

  /* Test Methods */

fred.demo('Javascript-IV');
cam.demo('Preprocessors-II');

fred.grade(louis, 'Javascript-IV');
cam.grade(matt, 'Preprocessors-II');

fred.gradeAssignment(louis);
cam.gradeAssignment(matt);

louis.listsSubjects();
matt.listsSubjects();

louis.PRAssignment('Javascript-IV');
matt.PRAssignment('Javascript-III');

louis.sprintChallenge('Javascript-IV');
matt.sprintChallenge('Javascript-III');

console.log(louis.graduate());
console.log(matt.graduate());

gannon.standUp('WEBPT4-Gannon');
carlos.standUp('WEBPT4-Carlos');

gannon.debugCode(matt, 'Javascript-III');
carlos.debugCode(louis, 'Javascript-IV');

