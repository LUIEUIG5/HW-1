//7. Sum the number in array with for loop and reduce function.

//1

const array1 = [10, 20, 30, 40];

// 10 + 20 + 30 + 40
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial);


//2

// friends - an array of objects
// where object field "books" is a list of favorite books
let friends = [{
    name: 'Rohit',
    books: ['Gita', 'Talking to Myself'],
    age: 21
  }, {
    name: 'Saumil',
    books: ['Habbit', 'Romeo and Juliet'],
    age: 26
  }, {
    name: 'Rahul',
    books: ['The Lord of the Rings', 'A Notable Discovery of Coosnage'],
    age: 18
  }]
  
  // allbooks - list which will contain all friends' books +
  // additional list contained in initialValue
  let allbooks = friends.reduce(function(previousValue, currentValue) {
    return [...previousValue, ...currentValue.books]
  }, ['Alphabet'])
  
  // allbooks = [
  //   in Alphabet order
  // ]