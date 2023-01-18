// Iteration 1: Names and Input
let hacker1 = "Michelangelo"
let hacker2 = "Rocky"

console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  } else if (hacker2.length > hacker1.length) {
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  } else {
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  }

// Iteration 3: Loops
let hacker1Name = ''

for(let i = 0; i < hacker1.length; i++) {
  hacker1Name = hacker1Name + ' ' + hacker1[i]
  console.log(hacker1Name.toUpperCase())
}


let hacker2Name = ''

for (let i = hacker2.length - 1; i >= 0  ; i--) {
  hacker2Name = hacker2Name + hacker2[i]
  console.log(hacker2Name)
}


let comparacionDeNombres = ''
comparacionDeNombres = hacker1.localeCompare(hacker2);
console.log(comparacionDeNombres)

if (comparacionDeNombres == -1) {
  console.log("The driver's name goes first.")
}
else if (comparacionDeNombres == 1) {
  console.log("Yo, the navigator goes first definitely.")
} else {
  console.log("What?! You both have the same name?")
}