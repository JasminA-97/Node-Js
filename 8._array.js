weekDays=['mon','tue','thu','fri','sat','sun']
console.log(weekDays);
console.log(`type of weekDays = ${typeof(weekDays)}`);
console.log(`first item = ${weekDays[0]}`);
console.log(`total items = ${weekDays.length}`);
console.log(`last item = ${weekDays[weekDays.length-1]}`);

console.log(`accessing elements one by one using for loop`);
for(let index=0;index<weekDays.length;index++){
    console.log(weekDays[index]);
}

