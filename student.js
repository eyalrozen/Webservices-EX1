'use strict';

module.exports = class Student {
	constructor(studentName,studentID,age,department,avg_grade){
		this.name = studentName;
		this.id = studentID;
		this.age = age;
		this.department = department;
		this.grades_avg = avg_grade;
	}

	PrintStudentDetails()
	{
		var stringresult = {"ID" : this.studentID,"name" : this.name , "age" : this.age , "department" : this.department, "grade" : this.grades_avg};
		return JSON.stringify(stringresult);
	}
}


