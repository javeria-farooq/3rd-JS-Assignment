let a = +prompt("Enter 1st number")
let b = +prompt('Enter 2nd value')
let add = a+b
let sub = a-b
let mul = a*b
let div = a/b
let mod = a%b

document.write(
    "<table border='3px'>"+
    "<tr>" +
    "<th>" + 'Addition' + "</th>"+
    "<th>" + 'Subtraction' + "</th>"+
    "<th>" + 'multiplication' + "</th>"+
    "<th>" + 'Division' + "</th>"+
    "<th>" + 'modulus' + "</th>"+
    "</tr>"+

    "<tr>" + 
    "<td>" + add + "</td>"+
    "<td>" + sub + "</td>"+
    "<td>" + mul + "</td>"+
    "<td>" + div + "</td>"+
    "<td>" + mod + "</td>"+
    "</tr>"+
"</table>"
)

document.write(`a + b = ${a + b} </br>`)
document.write(`a - b = ${a - b} </br>`)
document.write(`a x b = ${a * b} </br>`)
document.write(`a / b = ${a / b} </br>`)
document.write(`a % b = ${a % b} `)