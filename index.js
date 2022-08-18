
const RandomString = require("randomstring")  //Dependencies npm i randomstring
const Fs = require("fs")

const Self_Args = process.argv.slice(2)   //Variables



//Main beguns
if(!Self_Args.length){
    console.log("node index.js <length> <quantity> <filename>")
    return
}

if(isNaN(Self_Args[0])){
    console.log("length is not a number.")
    return
}

if(isNaN(Self_Args[1])){
    console.log("amount is not a number.")
    return
}

if(!Self_Args[2]){
    console.log("output is invalid.")
    return
}

var passwords = []

console.log("\t\=========================================================\n")
// console.log("\t                                                         \n")
console.log("\t    -----|  Indestructible Password Generator  |-----    \n")
// console.log("\t                                                         \n")
console.log("\t=========================================================\n")
console.log("\t                                                         \n")
console.log("\t******** Generating passwords Processing *******\n")
for( let i = 0; i <= Self_Args[1]; i++){
    passwords.push(RandomString.generate({
        charset: "ABCDEFGHIJKLMNOPQRSTUVWXYZ_+)(*&^%$#@!}{;/.?><|0123456789",
        length: Self_Args[0]
    }))
}
console.log("     ******** Done Your Indestructible Password is Generated ******* \n")
console.log(`Saving your Indestructible Generated Passwords to ${Self_Args[2]}`)
Fs.writeFileSync(Self_Args[2], passwords.join("\n"), "utf8")
console.log(`Your Generated passwords has been saved to ${Self_Args[2]}`)