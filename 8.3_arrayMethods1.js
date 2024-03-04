weekDays=['mon','tue','wed','thu','fri']

//1. PUSH(ITEM) : insert an elmt AT THE END
//insert saturday
weekDays.push('sat',89);
console.log(weekDays);

//UNSHIFT(ITEM) : insert an elmt AT THE BEGINNING
weekDays.unshift('sun',89);
console.log(weekDays);

//POP() : REMOVE elmt AT THE END
weekDays.pop()
console.log(weekDays);

//SHIFT(ITEM) : REMOVE elmt from the 
weekDays.shift();
console.log(weekDays);

//OUTPUT
// [
//     'mon', 'tue',
//     'wed', 'thu',
//     'fri', 'sat',
//     89
//   ]
//   [
//     'sun', 89,    'mon',
//     'tue', 'wed', 'thu',
//     'fri', 'sat', 89
//   ]
//   [
//     'sun', 89,
//     'mon', 'tue',
//     'wed', 'thu',
//     'fri', 'sat'
//   ]
//   [
//     89,    'mon',
//     'tue', 'wed',
//     'thu', 'fri',
//     'sat'
//   ]
