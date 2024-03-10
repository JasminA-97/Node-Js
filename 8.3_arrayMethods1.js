weekDays=['mon','tue','wed','thu','fri']

//1. PUSH(ITEM) : insert an elmt AT THE END
//insert saturday
weekDays.push('sat',89);
console.log(weekDays);

//2. UNSHIFT(ITEM) : insert an elmt AT THE BEGINNING
weekDays.unshift('sun',89);
console.log(weekDays);

//3. POP() : REMOVE elmt AT THE END
weekDays.pop()
console.log(weekDays);

//4. SHIFT(ITEM) : REMOVE elmt from the 
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
