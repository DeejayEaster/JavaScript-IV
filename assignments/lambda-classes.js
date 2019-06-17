// CODE here for your Lambda Classes

class Person {
  constructor(attr) {
    this.name = attr.name;
    this.age = attr.age;
    this.local = attr.local;
    this.favColor = attr.favColor;
  }
  speak() {
    return `Hello, my name is ${this.name}, I am from ${this.local}.`;
  }
  shakeHead() {
    return `${this.name} shakes their head at Deejay.`;
  }
  colorShout() {
    return `${
      this.name
    } shouted unto the world "MY FAVORITE COLOR IS ${this.favColor.toUpperCase()}"`;
  }
  walkAway() {
    return `${this.name} walks away silently.`;
  }
}

class Instructor extends Person {
  constructor(instructorAttr) {
    super(instructorAttr);
    this.specialty = instructorAttr.specialty;
    this.catchPhrase = instructorAttr.catchPhrase;
    this.favLang = instructorAttr.favLang;
  }

  langShout() {
    return `${this.name} realized how much they love ${
      this.favLang
    } and call onto you to join the legion of ${this.favLang} disciples.`;
  }
  demo(subject) {
    return `Today we will learn all about ${subject}.`;
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }
}

class ProjectManager extends Person {
  constructor(pmAttr) {
    super(pmAttr);
    this.specialty = pmAttr.specialty;
    this.catchPhrase = pmAttr.catchPhrase;
    this.favLang = pmAttr.favLang;
    this.gradClassName = pmAttr.gradClassName;
  }

  langShout() {
    return `${this.name} realized how much they love ${
      this.favLang
    } and call onto you to join the legion of ${this.favLang} disciples.`;
  }
  standup(channel) {
    return `${this.name} announces to ${channel}, @channel stand up time!​​​​​`;
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`;
  }
}

class Student extends Person {
  constructor(studentAttr) {
    super(studentAttr);
    this.previousBackground = studentAttr.previousBackground;
    this.className = studentAttr.className;
    this.favSubjects = studentAttr.favSubjects;
  }

  listsSubjects() {
    return `${this.name} likes ${this.favSubjects}.`;
  }

  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }

  sprintChallenge(subject) {
    return `${this.name} has begun a sprint challenge on ${subject}`;
  }

  fellDown() {
    return `${this.name} tripped and fell.`;
  }

  cry() {
    return `${this.name} quietly wept.`;
  }

  dance() {
    return `${this.name} is dancing with joy.`;
  }
}

// Objects

const dan = new Instructor({
  name: "Dan",
  age: "Infinity",
  location: "Denver",
  specialty: "Relentless Debugger",
  favLanguage:
    "JavaScript, Python, Elm, ReasonML, SmallTalk, Haskell, C#, Java, Rust, Go, Ruby, Crystal, Elixir, Lua, and Julia",
  catchPhrase: "If you can do the thing, you can get paid to do the thing!"
});

const isaiah = new Student({
  name: "Isaiah",
  age: 18,
  location: "Florida",
  previousBackground: "High School last month",
  className: "Web21",
  favSubjects: ["Html", "CSS", "JavaScript"]
});
const kevin = new Student({
  name: "Kevin",
  age: 28,
  location: "California",
  previousBackground: "Table Games Dealer",
  className: "WEB21",
  favSubjects: ["Html", "CSS", "JavaScript"]
});
const nisa = new Student({
  name: "Nisa",
  age: 25,
  location: "Ohio",
  previousBackground: "Debt Collector",
  className: "Web21",
  favSubjects: ["Html", "CSS", "JavaScript"]
});

const joscelyn = new Student({
  name: "Joscelyn",
  age: 29,
  location: "California",
  previousBackground: "English teacher",
  className: "Web21",
  favSubjects: ["Computer Science", "Philosophy", "English"]
});

const marguel = new ProjectManager({
  name: "Marguel",
  age: "Maybe 26",
  gradClassName: "WEBPT2",
  favInstructor: "Me?",
  location: "California",
  specialty: "React",
  favLanguage: "JavaScript, Python, Elm etc.",
  catchPhrase: "Practice Flex Zombies !!!"
});

const brandon = new ProjectManager({
  name: "Brandon",
  age: "34",
  gradClassName: "WEB18",
  favInstructor: "Professor Lambda",
  location: "Maine",
  specialty: "Redux",
  favLanguage: "JavaScript, C++, Python.",
  catchPhrase: "You shall not pass!"
});

const mary = new ProjectManager({
  name: "Mary",
  age: "24",
  gradClassName: "WEB18",
  favInstructor: "Josh Knell",
  location: "New York",
  specialty: "Express and Node.js",
  favLanguage: "Javascript",
  catchPhrase: "That looks AWESOME"
});

const christian = new ProjectManager({
  name: "Christian",
  age: "32",
  gradClassName: "WEB18",
  favInstructor: "Every Instructor in Lambda",
  location: "Seattle, WA",
  specialty: "Data Structures & Algorithms",
  favLanguage: "JavaScript",
  catchPhrase: "Dont forget your daily commit."
});

const pat = new ProjectManager({
  name: "Pat",
  age: "38",
  gradClassName: "WEB18",
  favInstructor: "Brett Madrid",
  location: "Petaluma, Ca",
  specialty: "Empathetic to the struggle of Redux",
  favLanguage: "JavaScript",
  catchPhrase: "Lets google that together."
});

const darren = new ProjectManager({
  name: "Darren",
  age: "25",
  gradClassName: "WEB18",
  favInstructor: "Josh Knell",
  location: "North Carolina",
  specialty: "React",
  favLanguage: "Javascript",
  catchPhrase: "Gang. Gang."
});

const austin = new ProjectManager({
  name: "Austin",
  age: "23",
  gradClassName: "WEB18",
  favInstructor: "Josh Knell",
  location: "Somewhere",
  specialty: "Java",
  favLanguage: "Java",
  catchPhrase: ":eggplant:"
});

console.log(nisa.listsSubjects());
