weatherData=[
    {district:'Thrissur',temp:32},
    {district:'Kottayam',temp:29},
    {district:'Palakkad',temp:34},
    {district:'Ernakulam',temp:33},
    {district:'Thrissur',temp:29},
    {district:'Kottayam',temp:30},
    {district:'Palakkad',temp:32},
    {district:'Ernakulam',temp:31}
]
//print district with its highest temparature
//output: {Thrissur:32, Kottayam:30,Palakkad:34,Ernakulam:33}
output={}
weatherData.forEach(disdet=>{
    let district= disdet.district
    let curtem= disdet.temp
    if(output.hasOwnProperty(district)){
        let oldtemp=output[district]
        if(curtem>=oldtemp){
            output[district]=curtem
        }else{
            output[district]=oldtemp
        }
    }else{
        output[district]=curtem
    }
})
console.log(output);

//{ Thrissur: 32, Kottayam: 30, Palakkad: 34, Ernakulam: 33 }