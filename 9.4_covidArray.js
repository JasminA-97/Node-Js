//[ no, district, +ve cases, death rate, curred rate, 1st dose vaccine, 2nd dose vaccine]
covid_data = [
    [1,'Ernakulam',34000,2000,23000,20000,2000],
    [2,'Idukki',14000,3000,25000,30000,1000],
    [3,'Thrissur',24000,4000,33000,24000,2500],
    [4,'Pathanamthitta',20000,2000,45000,22000,1500],
    [5,'Kozhikode',44000,5000,12000,21000,500],
    [6,'Palakkad',12000,1000,20000,23000,3400],
    [7,'Kottayam',27000,1500,27000,14000,1000],
    [8,'Kollam',14000,2500,25000,18000,2700]

]
console.log(`----------      -----------       -----------`);
// district having Highest +ve case 
dangerZone=covid_data.reduce((d1,d2)=>d1[2]>d2[2]?d1:d2)
console.log(`district having Highest +ve case = ${dangerZone[1]}`);


console.log(`----------      -----------       -----------`);
// district having Highest 1st dose vaccine
firstDose=covid_data.reduce((d1,d2)=>d1[5]>d2[5]?d1:d2)
console.log(`district having Highest 1st dose vaccine = ${firstDose[1]}`);


console.log(`----------      -----------       -----------`);
// district having lowest death rate
death=covid_data.reduce((d1,d2)=>d1[3]<d2[3]?d1:d2)
console.log(`district having lowest death rate = ${death[1]}`);


console.log(`----------      data with +ve case in descending order       -----------`);
// sort data with +ve case in descending order
console.log(covid_data.sort((d1,d2)=>d2[2]-d1[2]).forEach(d=>console.log(d[1])));


console.log(`----------      is district with +ve cases > 15000       -----------`);
// is district with +ve cases > 15000
console.log(covid_data.some(d=>d[2]>15000)?'Yes':'No');


console.log(`----------      sort data with 1st dose vaccine       -----------`);
// sort data with 1st dose vaccine
covid_data.sort((d1,d2)=>d2[5]-d1[5]).forEach(d=>console.log(d[1]))


console.log(`----------      -----------       -----------`);
// Print Thrissur details
Trsr=covid_data.find(d=>d[1]=='Thrissur')
console.log(`Name : ${Trsr[1]}
No of +ve cases : ${Trsr[2]}
No.of death rates : ${Trsr[3]}
No of curred cases : ${Trsr[4]}`);

console.log(`----------      -----------       -----------`);
// Print total number of positive cases
totPos=covid_data.map(d=>d[2]).reduce((c1,c2)=>c1+c2)
console.log(`Total number of positive cases = ${totPos}`);


console.log(`----------      -----------       -----------`);
// Print total number of curred cases
totCur=covid_data.map(d=>d[4]).reduce((c1,c2)=>c1+c2)
console.log(`Total number of curred cases = ${totCur}`);


console.log(`----------      -----------       -----------`);
//  curred cases in Idukki
idukki = covid_data.find(d=>d[1]=='Idukki')
console.log(`District  ${idukki}  has curred cases of ${idukki[4]}`);


//OUTPUT
// ----------      -----------       -----------
// district having Highest +ve case = Kozhikode
// ----------      -----------       -----------
// district having Highest 1st dose vaccine = Idukki
// ----------      -----------       -----------
// district having lowest death rate = Palakkad
// ----------      data with +ve case in descending order       -----------
// Kozhikode
// Ernakulam
// Kottayam
// Thrissur
// Pathanamthitta
// Idukki
// Kollam
// Palakkad
// undefined
// ----------      is district with +ve cases > 15000       -----------
// Yes
// ----------      sort data with 1st dose vaccine       -----------
// Idukki
// Thrissur
// Palakkad
// Pathanamthitta
// Kozhikode
// Ernakulam
// Kollam
// Kottayam
// ----------      -----------       -----------
// Name : Thrissur
// No of +ve cases : 24000
// No.of death rates : 4000
// No of curred cases : 33000
// ----------      -----------       -----------
// Total number of positive cases = 189000
// ----------      -----------       -----------
// Total number of curred cases = 210000
// ----------      -----------       -----------
// District  2,Idukki,14000,3000,25000,30000,1000  has curred cases of 25000