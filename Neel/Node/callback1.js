const message=function(){
  console.log("This message shows after 3 sec.....")
}
setTimeout(message,3000)
//----------------------------------------
setTimeout(function(){
  console.log("This message shows after 5 sec.....")
},5000)
//------------------------------------------
setTimeout(()=>{
  console.log("This message shows after 10 sec.....")
},10000)
//-------------------------------------------