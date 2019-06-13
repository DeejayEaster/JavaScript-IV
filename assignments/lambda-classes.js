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
  grade(student) {}
}

class Student extends Person {
  constructor(studentAttr) {
    super(studentAttr);
    this.title = studentAttr.title;
    this.coHort = studentAttr.coHort;
    this.schedule = studentAttr.schedule;
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
