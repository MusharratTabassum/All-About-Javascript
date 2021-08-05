var myArray = [5, 7, 9];

console.log(myArray);

var vowels = ['a', 'e', 'i', 'o', 'u'];
console.log(vowels);
var vowelsCount = vowels.length;
console.log(vowelsCount);

var positionVowel = vowels.indexOf('o');
console.log(positionVowel);

var secondIndex = vowels[3];
console.log(secondIndex);

// push/pop in array

var names = ['abul', 'kabul', 'dabul'];
console.log(names);

// javascript add element to end of array
names.push('shibul', 'pitul', 'bitul');
console.log(names);

// Remove last item from the end
names.pop('bitul');
console.log(names);

// Remove first item from the beginning
names.shift();
console.log(names);

// javascript add element to beginning of array
names.unshift('rhibul');
console.log(names);
