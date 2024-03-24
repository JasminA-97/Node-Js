var car ={
    name:"boleno",
    model:"hatch-back",
    manufacturer:"Maruti Suzuki",
    price:"13 lakh"
}

//display car name and its manufacturer
console.log(`car name :${car.name} \nmanufacturer :${car.manufacturer}`);

//check 'model' key is present then display its value
console.log('model' in car?'present':'not present');
car.hasOwnProperty('model')&&console.log(car.model);

//add 'varient' as automatic, manual
car.varient=['automatic','manual']
console.log(car);

//add 'hybrid' varient
car.varient.push('hybrid')
console.log(car);

//add color as red,white,blue,ash,black
car.color=['red','white','blue','ash','black']
console.log(car);

//OUTPUT
// car name :boleno 
// manufacturer :Maruti Suzuki
// present
// hatch-back
// {
//   name: 'boleno',
//   model: 'hatch-back',
//   manufacturer: 'Maruti Suzuki',
//   price: '13 lakh',
//   varient: [ 'automatic', 'manual' ]
// }
// {
//   name: 'boleno',
//   model: 'hatch-back',
//   manufacturer: 'Maruti Suzuki',
//   price: '13 lakh',
//   varient: [ 'automatic', 'manual', 'hybrid' ]
// }
// {
//   name: 'boleno',
//   model: 'hatch-back',
//   manufacturer: 'Maruti Suzuki',
//   price: '13 lakh',
//   varient: [ 'automatic', 'manual', 'hybrid' ],
//   color: [ 'red', 'white', 'blue', 'ash', 'black' ]
// }