const prompt = require('prompt-sync')({sigint:true})

const month= prompt('Enter month in 3 letters(small letter): ')

switch(month){
    case 'jan' : console.log('31 days');
                    break;
    case 'feb' : console.log('28 days');
                    break;                
    case 'mar': console.log('31 days');
                    break;     
    case 'apr': console.log('30 days');
                    break;
    case 'may': console.log('31 days');
                    break;                
    case 'jun' : console.log('30 days');
                    break;
    case 'jul' : console.log('31 days');
                    break; 
    case 'aug' : console.log('31 days');
                    break; 
    case 'sep' : console.log('30 days');
                    break;     
    case 'oct' : console.log('31 days');
                    break;
    case 'nov' : console.log('30 days');
                    break;       
    case 'dec' : console.log('31 days');
                    break;                            
    default       : console.log('oops invalid month!!!');
    
}