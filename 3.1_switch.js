//https://www.npmjs.com/package/prompt-sync
//run the installation command in our folder

const prompt = require('prompt-sync')({sigint:true})// import prompt command 

const weekday= prompt('Enter a week day: ')
//console.log(weekday);

switch(weekday){
    case 'sunday' : console.log('Holiday!!!')
                    break;
    case 'monday' : console.log('Weekday!!!')
                    break;                
    case 'tuesday': console.log('Weekday!!!')
                    break;     
    case 'wednesday': console.log('Weekday!!!')
                    break;
    case 'thursday': console.log('Weekday!!!')
                    break;                
    case 'friday' : console.log('Weekday!!!')
                    break;
    case 'friday' : console.log('Weekday!!!')
                    break;    
    default       : console.log('oops invalid day!!!')
    
}

// OUTPUT
// Enter a week day: monday
// Weekday!!!