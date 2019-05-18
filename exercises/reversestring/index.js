// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  debugger;
  return str.split('').reduce((reversed, character) => {
    return character + reversed;
  }, '');
}

reverse('asdf');

module.exports = reverse;

// function reverse(str) {
//   const arr = str.split('');
//   arr.reverse();
//   return arr.join('');
// }

// function reverse(str) {
//     let reversed = '';

//     for (let character of str) {
//         reversed = character + reversed;
//     }
//     return reversed;
// }
