// CODE here for your Lambda Classes

class Person {
  constructor(attr) {
    //put something here
    this.name = attr.name;
    this.age = attr.age;
    this.role = attr.role;
    this.favLang = attr.favLang;
    this.favColor = attr.favColor;
  }
  shakeHead() {
    return `${this.name} shakes their head at Deejay.`;
  }
  colorShout() {
    return `${
      this.name
    } shouted unto the world "MY FAVORITE COLOR IS ${this.favColor.toUpperCase()}"`;
  }
  fellDown() {
    return `${this.name} tripped and fell.`;
  }
  langShout() {
    return `${this.name} realized how much they love ${
      this.favLang
    } and call onto you to learn ${this.favLang}.`;
  }
  walkAway() {
    return `${this.name} walks away silently.`;
  }
}
