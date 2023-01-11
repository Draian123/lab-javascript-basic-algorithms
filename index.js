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

// Bonus 1

  let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla urna, volutpat sit amet elementum vulputate, interdum eu nisi. Suspendisse accumsan nisl ullamcorper nibh sagittis elementum. Vivamus vel vehicula ipsum, non gravida ipsum. Sed ac elit eu odio dapibus dignissim. Proin accumsan velit ut lorem iaculis semper. Donec sed dui at lorem rhoncus egestas. Phasellus augue nibh, imperdiet sit amet risus quis, ultrices lobortis dolor. Integer volutpat tristique erat et imperdiet. Nullam vitae tristique orci, sit amet venenatis erat. Maecenas orci tortor, euismod at maximus et, fermentum sed ligula. Donec blandit sapien nec scelerisque porttitor. Sed imperdiet nisl nulla, et porta ante ornare eu. Vivamus convallis, lacus non hendrerit feugiat, mi enim tincidunt felis, a venenatis ex odio nec lorem."


  function countWords(str) {
    const arr = str.split(' ');
  
    return arr.filter(word => word !== '').length;
  }

countWords(longText)



function countOccurrences(str,word){
    // split the string by spaces in a and remove . and ,
  let a = str.split(".").join(" ").replace(/,/g, '').split(" ");
  // search for pattern in a
  let count = 0;
  for (let i = 0; i < a.length; i++){
    // if match found increase count
    if (word==(a[i]))
        count++;
  }

  return count;
}



console.log(countOccurrences(longText, "et"))
