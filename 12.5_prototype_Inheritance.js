//prototype inheritance

const Boleno={
    model:'hatch-back',
    price:'12Lakh',
    manufacturer:'Maruti-suzuki'
}
const Glanza={
    price:'14Lakh',
    manufacturer:'Toyota'
}
// Glanza.__proto__=Boleno //without this code - Model of Glanza : undefined
Glanza.__proto__=Boleno
console.log(`Model of Glanza : ${Glanza.model}`);
console.log(`Manufacturer of Glanza : ${Glanza.manufacturer}`);

// Model of Glanza : hatch-back
// Manufacturer of Glanza : Toyota