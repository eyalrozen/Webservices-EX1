var mongoose = require('mongoose');
var schema = mongoose.Schema;
var userSchema = new schema({
	name:{type:String,index:1,require:true},
	id:Number,
	age:Number,
	department:{type:String,required:true},
	grades_avg:Number
	},{collection: 'students'});

var Student = mongoose.model('Student',userSchema);

module.exports = Student;


