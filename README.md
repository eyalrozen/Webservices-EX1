## webservices-StudentService
https://students2409.herokuapp.com/getAllStudents //Return all students

Response sample:
```
{
  students: [
  {
    ID: 201141414,
    name: "Arik Benisti",
    age: 25,
    department: "electronic_engineering",
    grade: 85
  },
  {
    ID: 102232123,
    name: "Ben Biton",
    age: 29,
    department: "industrial_engineering",
    grade: 90
  }
  ]
}
```
https://students2409.herokuapp.com/getAllExcellenceStudents                     //Return all excellence students (grade avg above 90)

https://students2409.herokuapp.com/GetStudentsByDepartment/software_engineering //Return all the students that registered under software engineering department.

Response sample:
```
{
  students: [
  {
	  ID: 101147410,
	  name: "Carl Melon",
	  age: 26,
	  department: "software_engineering",
	  grade: 88
  },
  {
	  ID: 123354741,
	  name: "Emily Frishman",
	  age: 28,
	  department: "software_engineering",
	  grade: 86
  }
  ]
}
```

https://students2409.herokuapp.com/getStudentGradeByID/101147410                //Return student name and grade by ID.
Response sample:
```
{
	name: "Carl Melon",
	grade: 88
}
```
GetStudentsByDepartment - if there are 0 students registered to the course the result will be empty value array.
getStudentGradeByID - if no such student ID, result will be error: "No such student!" in json format.

Error response sample:
```
{
	error: "No such student!"
}
```

