const csvFilePath='file.csv'
const csv=require('csvtojson')
const converter=csv({
    noheader:true,
    trim:true,
})

var count = 1;
csv({
    noheader: false,
    headers: [ 'c_1','c_2','c_3','c_4','c_5','c_6','c_7','c_8','c_9','c_10','c_11','c_12','c_13','c_14','c_15','c_16','c_17','c_18','c_19','c_20','c_21','c_22','c_23','c_24','c_25','c_26','c_27','c_28','c_29','c_30','c_31','c_32','c_33','c_34','c_35','c_36','c_37','c_38','c_39','c_40']
})
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

