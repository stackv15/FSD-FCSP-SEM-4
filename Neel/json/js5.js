// const user={
//     "name":["ABC","XYZ","GHI"],
//     "age":28,
//     "course":["FSD-2","DM","TOC"],
//     "Address":["T1","T2",{"T3":"Give Again"}]
// }
// console.log(user.Address[2].T3)



const obj='{"name":"xyz","age":"20","dob":"2006-02-10"}'
obj1=JSON.parse(obj)
console.log(obj1.dob)
a=new Date(obj1.dob)
console.log(a)