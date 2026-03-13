//write a script to define two json object name division 1 and division 2 having an array to store name of student this name should be sorted alphabeticaly and should be display in console
var test={
  "Division 1":{
    "name":['Z','B','H']
  },
  "Division 2":{
    "name":['Y','A','G']
  }
}
const div1_data=test["Division 1"].name
const div2_data=test["Division 2"].name
var combine_data=div1_data.concat(div2_data)
console.log(combine_data.sort())