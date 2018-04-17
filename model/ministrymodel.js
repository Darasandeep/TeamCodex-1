var mongoose=require('mongoose');

var ministryschema=mongoose.Schema({
  ministryid:{
    type: String
  },
  minisrtyname:{
    type: String
  },
  skills:[String],
  lead:[String],
  mission:{
    type:String
  },
  description:{
    type:String
  },
  status:{
    type:String
  },
  activity:{
    type:String
  },
  contact:{
    type:String
  }


});

// var churchdata= new churchloginschema({
//   username : "sandeep",
//   password: "1234"
// });


module.exports=mongoose.model('ministrydatas', ministryschema);
