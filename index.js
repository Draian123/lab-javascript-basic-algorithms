// Iteration 1: Names and Input
const hacker1 = 'Dennis';
console.log(`The drivers name is ${hacker1}.`)

const hacker2 = 'Ben';
console.log(`The navigator's name is ${hacker2}.`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
}else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
}else{
    console.log(`WoW you both have equally long names, ${hacker1.length} characters!`)
}


// Iteration 3: Loops
for (i=0; i<hacker1.length; i++) {

}


console.log(`${hacker1.toUpperCase().split("").join(" ")}`)

console.log(`${hacker2.reverse()}`)



if (hacker1.localeCompare(hacker2) == -1) {
    console.log("The driver's name goes first.")
  }
  else if (hacker1.localeCompare(hacker2) == 1) {
    console.log("Yo, the navigator goes first definitely.")
  }
  else if(hacker1.localeCompare(hacker2) == 0)
  console.log("What?! You both have the same name?");
