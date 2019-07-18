//Task - https://learn.javascript.ru/task/filter-anagrams

var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор", "киргыг",];
var resultArray = [];

var lowerCaseArr = arr.map(e => [...e.toLowerCase()].sort().join(''));
var sortedLoweCaseArr = ([...lowerCaseArr.entries()].sort((a, b) => (a[1] > b[1]) ? 1 : ((b[1] > a[1]) ? -1 : 0)));

for (var i = 0; i < sortedLoweCaseArr.length - 1; i++) {

    var currentValue = sortedLoweCaseArr[i][1];
    var nextValue = sortedLoweCaseArr[i + 1][1];

    if (currentValue !== nextValue) {
        var currentIndex = sortedLoweCaseArr[i][0];
        resultArray.push(arr[currentIndex]);
    }
}

console.log(resultArray);