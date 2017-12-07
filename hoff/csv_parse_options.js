const csvFilePath='file.csv'
const csv=require('csvtojson')
const converter=csv({
    noheader:true,
    trim:true,
})

var count = 1;
csv()
.fromFile(csvFilePath, {start: 3, end: 500})
.on('json',(jsonObj)=>{
  // combine csv header row and csv line to a json object
  // jsonObj.a ==> 1 or 4
  console.log(count)
  console.log(jsonObj)
  count ++
})
.on('done',(error)=>{
  console.log('end')
})

