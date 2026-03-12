var ps=require("fs")
ps.writeFileSync("s1.txt","50 99 -1 100 20 0 56 78 59")
data=ps.readFileSync("s1.txt","UTF-8")
data=data.split(" ")
d=data.sort((a,b)=>a-b) //b-a for descending
console.log(d)