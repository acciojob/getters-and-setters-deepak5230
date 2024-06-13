//complete this code
//class Person {}

//class Student extends Person {}

//class Teacher extends Person {}
// Define the Person class
class Person {
    // Constructor method
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    // Getter for name
    get name() {
        return this._name;
    }

    // Setter for age
    set age(age) {
        this._age = age;
    }

    // Getter for age (optional if needed)
    get age() {
        return this._age;
    }
}

// Define the Student subclass
class Student extends Person {
    // study method
    study() {
        console.log(`${this._name} is studying`);
    }
}

// Define the Teacher subclass
class Teacher extends Person {
    // teach method
    teach() {
        console.log(`${this._name} is teaching`);
    }
}

// Example usage
const person = new Person("John", 25);
console.log(person.name); // Output: John

person.age = 30;
console.log(person.age); // Output: 30

const student = new Student("Alice", 22);
student.study(); // Output: Alice is studying

const teacher = new Teacher("Bob", 40);
teacher.teach(); // Output: Bob is teaching


// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
