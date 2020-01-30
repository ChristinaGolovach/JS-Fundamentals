console.log('Topic: Promises');
// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".
// let t1 = new Promise((resolve, reject) => {
//     console.log('Promise is created');
// });

// console.log(t1);

// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль
// let t2 = Promise.resolve('Promise Data').then(data => console.log(data));

// console.log(t2);

// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль

// let t3 = Promise.reject('Promise Error').catch(data => console.log(data));

// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

// let t4 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 3000, 'Promise Data')
// })

// t4.then(data => console.log(data)); // vs t4.then(console.log);

// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три кнопки и три обработчика события click для этих кнопок
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый сосзданный промис,
// свойства resolve и reject получают ссылки на сооветствующие функции
// resolve и reject. Следующий два обработчика запускают методы resolve и reject.

// let handlePromise = {
//     promise: null,
//     resolve: null,
//     reject: null,
//     // onSuccess: function(paramName) {
//     //     console.log(`Promise is resolved with data: ${paramName}`);
//     // },
//     onSuccess(paramName) {
//         console.log(`Promise is resolved with data: ${paramName}`);
//     },
//     onError(paramName) {
//         console.log(`Promise is rejected with error: ${paramName}`);
//     }
// }

// document.querySelector('#btn-create-promise').addEventListener('click', () => {
//     handlePromise.promise = new Promise((resolve, reject) => {
//         handlePromise.resolve = resolve;
//         handlePromise.reject = reject;
//     })
//     .then(data => handlePromise.onSuccess(data))
//     .catch(data => handlePromise.onError(data));
// });

// document.querySelector('#btn-resolve-promise').addEventListener('click', () => {
//     handlePromise.resolve('resolvedData')
// });

// document.querySelector('#btn-reject-promise').addEventListener('click', () => {
//     handlePromise.reject('rejectData');
// });

// Task 06
// Используйте предыдущее задание. Продублируйте строчку с методом then
// let handlePromise2 = {
//     promise: null,
//     resolve: null,
//     reject: null,
//     onSuccess(paramName) {
//         console.log(`Promise is resolved with data: ${paramName}`);
//         return paramName;
//     },
//     onError(paramName) {
//         console.log(`Promise is rejected with error: ${paramName}`);
//     }
// }

// document.querySelector('#btn-create-promise').addEventListener('click', () => {
//     handlePromise2.promise = new Promise((resolve, reject) => {
//         handlePromise2.resolve = resolve;
//         handlePromise2.reject = reject;
//     })
//     .then(data => handlePromise2.onSuccess(data))
//     .then(data => handlePromise2.onSuccess(data))    
//     .catch(data => handlePromise2.onError(data));
// });

// document.querySelector('#btn-resolve-promise').addEventListener('click', () => {
//     handlePromise2.resolve('resolvedData')
// });

// document.querySelector('#btn-reject-promise').addEventListener('click', () => {
//     handlePromise2.reject('rejectData');
// });


// Task 07
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и зарегистрируйте созданные функции.

// let t7 = new Promise((resolve) => {
//     setTimeout(resolve, 1000, 'My name is')
// });

// function onSuccess(param) {
//     return `${param} Kris`;
// }

// function print(param) {
//     console.log(param);
// }

// t7.then(data => onSuccess(data))
//   .then(data => print(data));

// Task 08
// Используйте предыдущий код. Добавьте в функци onSuccess генерацию исключения
// Обработайте даное исключение, используя catch. Обратите внимание,
// что метод print при этом не выполняется.

// let t8 = new Promise((resolve) => {
//     setTimeout(resolve, 1000, 'My name is')
// });

// function onSuccess(param) {
//     throw new Error('Error data')
// }

// function print(param) {
//     console.log(param);
// }

// t8.then(data => onSuccess(data))
//   .then(data => print(data))
//   .catch(data => console.log(data));


// Task 09
// Напишите функцию getPromiseData, которая принимает один параметр - промис. Функция получает
// значение промиса и выводит его в консоль
// Объявите объект со свойтвом name и значением Anna.
// Создайте врапер для этого объекта и вызовите для него функцию getPromiseData

// function getPromiseData (promis) {
//     promis.then(data => console.log(data));
// }

// const someObject = { name: 'Anna' };

// getPromiseData(Promise.resolve(someObject));

// Task 10
// Создайте два промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// а второй промис возвращает объект {age: 16} через 3 с.
// Получите результаты работы двух промисов, объедините свойства объектов
// и выведите в консоль

// let t_1 = new Promise((resolve) => {
//     setTimeout(resolve, 2000, { name: 'Anna' });
// });

// let t_2 = new Promise((resolve) => {
//     setTimeout(resolve, 3000, { age: 16 });
// });

// Promise.all([t_1, t_2])
//        .then((obj1, obj2) => {
//            console.log({...obj1, ...obj2});
//        }); 

// Task 11
// Используйте предыдущее задание. Пусть теперь второй промис переходит в
// состояние rejected со значением "Promise Error". Измените код, чтобы обработать
// эту ситуацию.

let t_1 = new Promise((resolve) => {
    setTimeout(resolve, 2000, { name: 'Anna' });
});

let t_2 = new Promise((resolve, reject) => {
    setTimeout(reject, 3000, 'Promise Error');
});

Promise.all([t_1, t_2])
       .then((obj1, obj2) => {
           console.log({...obj1, ...obj2});
       })
       .catch(errorData => console.log(errorData)); 


// Task 12
// Создайте промис, который перейдет в состояние resolve через 5с и вернет строку
// 'Promise Data'.
// Создайте второй промис, который перейдет в состояние rejected по клику на
// кнопку. Добавьте обработчик для кнопки.
// Используя метод race организуйте отмену промиса.

const p12 = new Promise((resolve) => {
    setTimeout(resolve, 5000, 'Promise data');
});

let cancel;

const p12_cancel = new Promise((resolve, reject) => {
    cancel = reject;
});

document.querySelector('#btn-cancel-promise').addEventListener('click', () =>{
    cancel('Promise is canceled');
})

Promise.race([p12, p12_cancel])
       .then(console.log)
       .catch(console.log);
       
console.log(p12);