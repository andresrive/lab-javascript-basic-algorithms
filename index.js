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

//BONUS 1

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dignissim porttitor lacus nec laoreet. Vestibulum at viverra arcu, et gravida dolor. Sed eleifend nibh in eros rhoncus, sit amet dictum nulla venenatis. Nullam nec leo non ligula malesuada viverra eget sit amet nisl. Cras consequat et est quis vulputate. Ut eget lorem vel eros ultricies condimentum ut et ligula. Donec sit amet ante sed magna tempus eleifend. Proin vel sem at metus convallis tincidunt eget at leo.
Etiam quis quam tristique, interdum est sed, condimentum tellus. Mauris porta id nisi vitae maximus. Praesent elementum leo quam, et cursus metus aliquet at. Fusce lectus ex, egestas ut magna id, pharetra iaculis neque. Suspendisse lacus tortor, ultrices sed fringilla eget, volutpat molestie magna. Phasellus elementum erat turpis, quis tempus velit feugiat eget. Maecenas tempus auctor lectus. Duis viverra non lacus ac pellentesque. Duis justo libero, porta vel imperdiet ac, porttitor eget massa. Mauris a auctor quam. Sed et purus interdum, posuere risus non, pharetra lacus. Fusce sed metus tincidunt, mollis mauris at, efficitur libero. Nam et tempus mi.
Nam quis tortor elit. Etiam lacinia lacinia enim et rutrum. Cras diam magna, viverra id purus sed, tincidunt tincidunt massa. Vivamus ipsum sapien, convallis sit amet purus eget, imperdiet venenatis neque. Suspendisse ligula nibh, condimentum id vulputate nec, faucibus eget lacus. Proin eget faucibus velit, iaculis mollis ipsum. Aliquam eu ex dapibus, volutpat ipsum ac, facilisis felis.`

console.log(longText.split(" ").length)
console.log(longText.split("et").length)


//BONUS 2

let phraseToCheck = 'reconocer' 

let palindromeOne = ''

for(let i = 0; i < phraseToCheck.length; i++) {
    palindromeOne = palindromeOne + phraseToCheck[i]
    console.log(palindromeOne)
  }

  let palindromeTwo = ''

for (let i = phraseToCheck.length - 1; i >= 0  ; i--) {
  palindromeTwo = palindromeTwo + phraseToCheck[i]
  console.log(palindromeTwo)
}

if (palindromeOne == palindromeTwo) {
    console.log("IT'S A PALINDROME")
} else {
    console.log("IT'S NOT A PALINDROME")
}




