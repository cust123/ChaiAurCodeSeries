const course = {
  courseName: "JavaScript",
  price: 999,
  courseLanguage: "English, Spanish, German",
  courseInsturctor: "James Smith",
  courseLevel: "Advance",
};

console.log(course.courseInsturctor);

const { courseInsturctor: instructor, courseName, courseLevel } = course;
console.log({ instructor, courseLevel, courseName });

// JSON formate
{
    "name": "shafiq",
    "age": 32,
    "location": "Islamabad",
    "country": "pakistan"    
}