var mongoose = require('mongoose');
mongoose.connect('mongodb://db_usr:db_pass@ds023570.mlab.com:23570/grades2409');
var Student = require('./student');
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

var conn = mongoose.connection;

conn.on('error',function (err)
{
	console.log('connection error' + err);
});


app.get('/getAllExcellenceStudents',function(req,res){
	Student.find({}).where('grades_avg').gt(89).exec(function(err, result){
			if(err) throw err;
			res.json({"Students":result});
		});
});

app.get('/getAllStudents',function(req,res){
	Student.find({},function(err, result){
			if(err) throw err;
			res.json({"Students":result});
		});
});

app.get('/getStudentGradeByID/:stud_id',function(req,res){
	var studentID = req.params.stud_id;
	Student.find({'id':studentID},function(err, result){
		if(err) throw err;
		if ("undefined" === typeof result[0]){
			res.json({"error":"No such student"});
		}
		else
		{
			res.json({"name":result[0].name,"grade":result[0].grades_avg});
		}		
	});
});

app.get('/GetStudentsByDepartment/:department_name',function(req,res){
	var department = req.params.department_name;
	Student.find({'department':department},function(err, result){
			if(err) throw err;
			res.json({"Students":result});
		});
});

app.listen(port);
console.log('listening on port '+ port);