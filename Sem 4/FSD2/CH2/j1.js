//for filesystem directory import
var ps=require("fs")

//create new dir
ps.mkdirSync("node")

//write a file
ps.writeFileSync("node/write.txt","MOANS TILS DOANDA FIANA FAILURE")

//append
ps.appendFileSync("node/write.txt","\n TILL FAILURE REMEMBRE")

//read
data=ps.readFileSync("node/write.txt","UTF-8")
//print in console
console.log(data)

//console.log(data.toString())
//alternate to utf-8 method

//rename
ps.renameSync("node/write.txt","node/read.txt")

//copy
ps.copyFileSync("node/read.txt","node/copyread.txt")

//to delete file
ps.unlinkSync("node/read.txt") 

//ps.rmdirSync("node")
//Must be empty directory

//Use rmSync with recursive and force options
ps.rmSync("node", { recursive: true, force: true })