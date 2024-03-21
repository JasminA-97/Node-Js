//4. display all vowels from given data

data='The boat was like a pea floating in a great bowl of blue soup.'
vowels=['a','e','i','o','u']
console.log(data.split('').filter((char)=>vowels.includes(char)));
// [
//     'e', 'o', 'a', 'a', 'i',
//     'e', 'a', 'e', 'a', 'o',
//     'a', 'i', 'i', 'a', 'e',
//     'a', 'o', 'o', 'u', 'e',
//     'o', 'u'
//   ]