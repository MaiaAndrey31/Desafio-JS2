const people =[{
    numberOfChildren: 2,
    salary:2000
},
{
    numberOfChildren: 3,
    salary: 4000
},
{
    numberOfChildren: 4,
    salary:3500
},
{
    numberOfChildren: 1,
    salary:5000
},
{
    numberOfChildren: 0,
    salary:1500
},
{
    numberOfChildren: 1,
    salary:6000
},
{
    numberOfChildren: 0,
    salary: -20
},

]

function findAverage (peopleInformation){

    let averageChildren = 0
    let averagesalary = 0
    let highsalary = 0

    for ( let i = 0; i <= peopleInformation.length; i++){


        const salary = peopleInformation[i].salary
        const children = peopleInformation[i].numberOfChildren

        if (salary > highsalary) highsalary = salary

        if (salary < 0 ){
            console.log (`Média de Salário = R$ ${(averagesalary / i).toFixed(0)}`)
            console.log (`Média de Filhos = R$ ${(averageChildren/ i).toFixed(0)}`)
            console.log (`Maior Salário = R$ ${highsalary}`)
            break
        }

            else {
            averagesalary = averagesalary + salary
            averageChildren += children 
            }
        

    }
}

findAverage(people)