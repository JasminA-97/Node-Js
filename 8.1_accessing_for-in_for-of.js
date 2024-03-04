weekDays=['mon','tue','thu','fri','sat','sun']
console.log(weekDays);
// for-of 
console.log(`accessing elements one by one using for-of loop`);
for(let day of weekDays){
    console.log(day);
}

// for-in
console.log(`accessing elements one by one using for-in loop`);
for(let index in weekDays){
    console.log(weekDays[index]);
}