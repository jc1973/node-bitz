const csvFilePath='big.csv'
const csv=require('csvtojson')
// #var count = 1;
csv()
.fromFile(csvFilePath)
.on('json',(jsonObj)=>{
  // combine csv header row and csv line to a json object
  // jsonObj.a ==> 1 or 4
//  console.log(count)
//#  console.log(jsonObj)
//#  count ++
})
.on('done',(error)=>{
  console.log('end')
})

