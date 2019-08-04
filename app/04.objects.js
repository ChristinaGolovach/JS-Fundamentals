console.log('Topic: Objects');

// Task 01
// RU: Создать функцию-конструктор Tune(title, artist) для создания объектов
//     с публичными свойствами title, artist и методом concat().
//     Метод должен возвращать конкатенацию значений свойств title и artist.
//     Создать несколько объектов. Вызвать их метод concat().
// EN: Create function-constructor Tune(title, artist) for creating objects
//     with public properties title, artist and method concat().
//     Mathod should return the concatenation of values of propeties title and artist.
//     Create a few objects. Call their method concat().
function Tune1(title, artist) {

    this.title = title;
    this.artist = artist;

    this.concat = function () {
        return this.title + ' - ' + this.artist;
    }
}

//or
Tune1.prototype.concat2 = function () { return this.title + '-' + this.artist };

let tune11 = new Tune1('tune11', 'artist11');
let tune12 = new Tune1('tune12', 'artist12');

console.log(tune11.concat());
console.log(tune12.concat());

// Task 02
// RU: Создать функцию-конструктор Tune(title, artist) для создания объектов
//     с приватными свойствами title, artist и публичным методом concat().
//     Метод должен возвращать конкатенацию значений свойств title и artist.
//     Создать несколько объектов. Вызвать их метод concat().
// EN: Create function-constructor Tune(title, artist) for creating objects
//     with private properties title, artist and method concat().
//     Mathod should return the concatenation of values of propeties title and artist.
//     Create a few objects. Call their method concat().
console.log('----------Task2--------------');

function Tune2(title, artist) {
    this.concat = function () {
        return title + '-' + artist;
    }
}

let tune21 = new Tune2('tune21', 'artist21');
let tune22 = new Tune1('tune22', 'artist22');

console.log(tune21.concat());
console.log(tune22.concat());

// Task 03
// RU: Расширить прототип объекта String методом exclaim() если его нет в прототипе.
//     Метод должен добавлять знак восклицания к строке и выводить ее в консоль.
// EN: Extend the prototype of object String with the method exclaim(), if it doesn't exist.
//     Method should add exclaimation mark to the string and disply it in the console.
console.log('----------Task3--------------');

if (!String.prototype.exclaim) {
    String.prototype.exclaim = function () {
        console.log(`${this}!`);
    }
}

// String.prototype.exclaim = String.prototype.exclaim || function() { console.log(`${this}!`)};

'task3'.exclaim();

// Task 04
// RU: Создать функцию-конструктор Book(title, author).
//     Добавить два метода: getTitle, getAuthor.
//     Создать функцию-конструктор TechBook(title, author, category).
//     Передать значения title, author функции-конструктору Book.
//     Добавить два метода: getCategory, getBook – возвращает строку со значениями параметров.
//     Для реализации наследования используйте:
//     1. Object.create()
//     2. Class
// EN: Create function-constructor Book(title, author).
//     Add two methods: getTitle, getAuthor.
//     Create function-constructor TechBook(title, author, category).
//     Pass the value of title, author to the function-constructor Book.
//     Add two methods: getCategory, getBook - returns the string with values of all parameters.
//     Implement inheritance using:
//     1. Object.create()
//     2. Class
console.log('----------Task4--------using Object.create');

function Book(title, author) {
    this.title = title;
    this.author = author;
}

Book.prototype.getTitle = function () { return this.title };
Book.prototype.getAuthor = function () { return this.author };

function TechBook(title, author, category) {
    Book.call(this, title, author);
    this.category = category;
}
TechBook.prototype = Object.create(Book.prototype);

TechBook.prototype.getCategory = function () { return this.category };
TechBook.prototype.getBook = function () { return `${this.title} ${this.author} ${this.category}` };

let techBook = new TechBook('bookTitle', 'bookAuthor', 'bookCategory');

console.log(techBook.getBook());
console.log(techBook.getTitle());


console.log('---------Task4---------using class');

class Book2 {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    getTitle() { return this.title; }
    getAuthor() { return this.author; }
}

class TechBook2 extends Book2 {
    constructor(title, author, category) {
        super(title, author);
        this.category = category;
    }

    getBook() { return `${this.title} ${this.author} ${this.category}` }
}

let techBook2 = new TechBook2('bookClassTitle', 'bookAuthorClass', 'bookCategoryClass');
console.log(techBook2.getBook());

// Task 05
// RU: Создайте класс Shape со статическим свойством count.
//     Проинициализируйте это свойство 0.
//     В конструкторе класса увеличивайте count на 1.
//     Создайте производный класс Rectangle. Добавьте метод для подсчета площади.
//     Создайте несколько объектов. Выведите в консоль количество созданных объектов.
// EN: Create class Shape with static property count.
//     Initialize the property count with 0.
//     Increment the value of count by 1 in the constructor.
//     Create derived class Rectangle. Add method to calculate area.
//     Create a few objects. Display the number of created objects in the console.
console.log('----------Task5--------------');
class Shape {
    constructor() {
        Shape.count++;
    }
}
Shape.count = 0;

class Rectangle extends Shape {
    constructor(height, width) {
        super();
        this.height = height;
        this.width = width;
    }

    getArea() { return this.height * this.width; }
}

let r1 = new Rectangle(1, 2);
console.log(`r1 area is ${r1.getArea()}`);

let r2 = new Rectangle(2, 3);
console.log(`r2 area is ${r2.getArea()}`);

console.log(`object count is ${Shape.count}`);

// Task 06
// RU: Создать функцию-конструктор Person() для конструирования объектов.
//     Добавить два метода: setFirstName() и setLastName().
//     Методы должны вызываться в цепочке, например obj.setFirstName(...).setLastName(...)
// EN: Create function-constructor Person() for creating objects.
//     Add two methods: setFirstName() и setLastName().
//     These methods should be called in chain like this obj.setFirstName(...).setLastName(...)
console.log('----------Task6--------------');

function Person() {
    this.setFirstName = function (firstName) {
        this.firstName = firstName;
        return this;
    }

    this.setLastName = function (lastName) {
        this.lastName = lastName;
        return this;
    }

    this.getName = function () {
        console.log(this.firstName);
    }
}

let person = new Person();

person.setFirstName('Jack').setLastName('Smith');
person.getName();


// Task 07
// RU: Cоздать объект data и сконфигурирвать его свойства:
//     1. id: значение = 1, изменяемое.
//     2. type: значение = 'primary', перечисляемое
//     3. category: getter возвращает значение поля _category,
//                  setter устанавливает значение поля _category, перечисляемое, конфигурируемое.
//     Используя for-in вывести свойства объекта в консоль
// EN: Create an object data and configure its properties:
//     1. id: value = 1, writable
//     2. type: value = 'primary', enumerable
//     3. category: getter returns the value of the property _category,
//                  setter sets the value if the property _category, enumerable, configurable.
//     Using for-in display property of an object in the console.
console.log('----------Task7--------------');

let data = {
    //_category: 'unkown'
};

Object.defineProperties(data, {
    'id': { value: 1, writable: true },
    'type': { value: 'primary', enumerable: true },
    'category': {
        get: function () { return this._category; },
        set: function (value) { this._category = value; },
        configurable: true, enumerable: true
    }
})

for (let key in data) {
    console.log(`key - ${key}`);
}

data.category = 'categoryName';
console.log(data.category);

// Task 08
// RU: Создать литерал объекта с двумя свойствами. Запретить расширять объект.
// EN: Create object literal with two properties. Deny extend the object.
console.log('----------Task8--------------');

let task8 = {
    name: 'objName',
    value: 'objValue'
}

Object.preventExtensions(task8);

// Task 09 TodoList Application
// RU: Создать классы 'задача' и 'список задач' со следющим функционалом:
//     1. Добавить задачу в список
//     2. Получить и вывести в консоль список всех задач
//        в формате "[new] Task 1", "[completed] Task2"
//     3. Отметить указанную задачу как выполненную
//     4. Удалить задачу из списка
//     5. Отсортировать задачи по алфавиту по возрастанию или по убыванию
//     6. Очистить список задач
// EN: Create classes 'task' and 'task list' with the following features:
//     1. Add task to the list
//     2. Get and display the list of all tasks in the console
//        using the following format "[new] Task 1", "[completed] Task2"
//     3. Check task as a completed task
//     4. Remove task from the list of tasks.
//     5. Sort tasks alphabetically in asc or desc order
//     6. Clear the list of tasks.
console.log('----------Task9--------------');

class Task {
    constructor(name, status = 'new') {
        this.name = name;
        this.status = status;
    }

    completeTask() {
        this.status = 'completed';
    }
}

class TaskList {

    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
    }

    removeTask(task) {
        this.tasks.splice(this.tasks.findIndex(t => t === task), 1);

    }

    clear() {
        this.tasks.length = 0;
    }

    showTasks() {
        this.tasks.forEach(t => console.log(`[${t.status}] ${t.name}`));
    }

    sortTask(predicate) {
        this.tasks.sort(predicate);
    }
}

let t1 = new Task('Task1');
let t2 = new Task('Task2');
let t3 = new Task('Task3');

let l1 = new TaskList();

l1.addTask(t1);
l1.addTask(t3);
l1.addTask(t2);

l1.showTasks();

t2.completeTask();

l1.showTasks();

//l1.removeTask(t3);

l1.showTasks();

console.log('-----after the sorting-----');

l1.sortTask((task1, task2) => task1.name > task2.name ? 1 : (task1.name < task2.name ? -1 : 0));

l1.showTasks();

