// Таск-трекер
// сущности: Developer, Manager, Project, Task
//      Mamager:
// - видеть список всех проектов, созданые им
// - создавать новый проект
// - видеть список всех задач для выбраного проекта
// - создавать новую задачу для проекта
// - добавлять разработчика в проект
// - назначать задачу разработчику
// - изменять статус задачи
//      Developer:
// - видеть список проектов в которых учавствует
// - видеть список задач проекта
// - создавать новую задачу
// - изменять статус задачи

const StatusEnum = {
    TO_DO: 'TO DO',
    IN_PROCESS: 'In process',
    CODE_REVIEW: 'Code review',
    DONE: 'Done'
}

const UserRoleEnum = {
    MANAGER: 'Manager',
    DEVELOPER: 'Developer'
}

let Projects = [];

let checkAccess = function (user) {
    return user.userRole === UserRoleEnum.MANAGER;
}

//----------Task-------------------
function Task(name, creator, status = StatusEnum.TO_DO) {
    var _developer;

    this.name = name;
    this.status = status;
    this.creator = creator;
    this.changedBy = creator;

    this.getDeveloper = function () { return _developer; }

    this.assignDev = function (developer, callerUser) {
        if (!checkAccess(callerUser)) {
            console.log('Access denied. You can not assign task to developer');
        }
        else {
            _developer = developer;
        }
    }
}

Task.prototype.changeStatus = function (status, changedBy) {
    this.status = status;
    this.changedBy = changedBy;
}

//-----------Project-------------------
function Project(name, manager) {
    var _developers = [];

    this.name = name;
    this.manager = manager;
    this.tasks = [];

    this.getDevelopers = function () { return Array.from(_developers); };

    this.addDeveloper = function (developer, callerUser) {
        if (!checkAccess(callerUser)) {
            console.log('Access denied');
        }
        else {
            _developers.push(developer);
        }
    }
}

Project.prototype.getTasks = function () { return this.tasks; }

Project.prototype.addTask = function (name, creator, assignedTo, status) {
    const newTask = new Task(name, creator, assignedTo, status);
    this.tasks.push(newTask);
    return newTask;
}


//-----------User-------------------
function User(fisrtName, lastName, userRole) {
    this.fisrtName = fisrtName;
    this.lastName = lastName;
    this.userRole = userRole;
}

User.prototype.getAllProjects = function (predicate) {
    return Projects.filter(predicate);
}

User.prototype.getAllTaskOfProject = function (project) {
    return project.getTasks();
}

User.prototype.creatTask = function (name, project, status) {
    return project.addTask(name, this, status);
}

User.prototype.changeTaskStatus = function (task, status, changedBy) {
    task.changeStatus(status, changedBy);
}

//-----------Developer-------------------
function Developer(fisrtName, lastName) {
    User.call(this, fisrtName, lastName, UserRoleEnum.DEVELOPER);
}

Developer.prototype = Object.create(User.prototype);

Developer.prototype.viewAllProject = function () {
    return this.getAllProjects(p => p.getDevelopers().filter(dev => dev === this).length == 1);
}

//-----------Manager-------------------
function Manager(fisrtName, lastName) {
    User.call(this, fisrtName, lastName, UserRoleEnum.MANAGER);
}

Manager.prototype = Object.create(User.prototype);

Manager.prototype.createProject = function (name) {
    const newProject = new Project(name, this);
    Projects.push(newProject);

    return newProject;
}

Manager.prototype.viewAllProject = function () {
    return this.getAllProjects(p => p.manager === this);
}
Manager.prototype.addDeveloperToProject = function (developer, project) {
    project.addDeveloper(developer, this);
}
Manager.prototype.assignTaskToDev = function (task, developer) {
    task.assignDev(developer, this);
}


//------------Test--------------------
const manager = new Manager('Jon', 'Smith');
const developer1M = new Developer('dev1M', 'dev1M');
const developer2M = new Developer('dev2M', 'dev2M');
const project1M = manager.createProject('Project1M');
const project2M = manager.createProject('Project2M');

const manager2 = new Manager('Jon2', 'Smith2');
const project1M2 = manager2.createProject('Project1M2');

manager.addDeveloperToProject(developer1M, project1M);
manager.addDeveloperToProject(developer2M, project2M);

let task1P1M = developer1M.creatTask('Task1ForProject1M', project1M, StatusEnum.IN_PROCESS);
console.log(task1P1M);

let projectOfDev1 = developer1M.viewAllProject();
console.log(projectOfDev1);

let projectOfManager = manager.viewAllProject();
console.log(projectOfManager);
