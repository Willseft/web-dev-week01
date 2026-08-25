const courses = [
  { code: "WEB210", title: "Intro to Web", credits: 3, enrolled: 24, cap: 30 },
  { code: "WEB250", title: ".NET Web Dev", credits: 4, enrolled: 30, cap: 30 },
  { code: "DAT200", title: "SQL Fundamentals", credits: 3, enrolled: 12, cap: 25 },
  { code: "PRG115", title: "Intro to C#", credits: 4, enrolled: 28, cap: 30 },
];

// 1
const courseLine = (course) => {
  const { code, title, credits } = course;
    return `${code}: ${title} (${credits} credits)`;
}
// 2
const isFull = (course) => {
  return course.enrolled === course.cap;
}
// 3
const openCourses = (course) => {
  return course.filter((course) => !isFull(course));
}
// 4
const courseTitles = (courses) => {
  return courses.map((course) => course.title);
}
// 5 
const openCourseLines = (courses => {
  return openCourses(courses).map((course) => courseLine(course));
})
// 6 
const findCourse = (courses, code) => {
  return courses.find((course) => course.code === code);
}
// 7
const addCourse = (courses, newCourse) => {
  return [...courses, newCourse];
}
// 8
const totalCredits = (course) => {
  return courses.reduce((total, course) => total + course.credits, 0);
}

console.log(courseLine(courses[1])); // WEB250: .NET Web Dev (4 credits)

console.log(openCourseLines(courses)); // (3) ['WEB210: Intro to Web (3 credits)', 'DAT200: SQL Fundamentals (3 credits)', 'PRG115: Intro to C# (4 credits)']

console.log(totalCredits(courses)); // 14

console.log(courseTitles(courses)); // (4) ['Intro to Web', '.NET Web Dev', 'SQL Fundamentals', 'Intro to C#']

console.log(openCourseLines(courses)); // (3) ['WEB210: Intro to Web (3 credits)', 'DAT200: SQL Fundamentals (3 credits)', 'PRG115: Intro to C# (4 credits)']

console.log(findCourse(courses, "Web210")); // Undefined

console.log(addCourse(courses, { code: "WEB300", title: "How to use Microsoft Edge", credits: 3, enrolled: 0, cap: 30 }));
/* (5) [{…}, {…}, {…}, {…}, {…}]
0
: 
{code: 'WEB210', title: 'Intro to Web', credits: 3, enrolled: 24, cap: 30}
1
: 
{code: 'WEB250', title: '.NET Web Dev', credits: 4, enrolled: 30, cap: 30}
2
: 
{code: 'DAT200', title: 'SQL Fundamentals', credits: 3, enrolled: 12, cap: 25}
3
: 
{code: 'PRG115', title: 'Intro to C#', credits: 4, enrolled: 28, cap: 30}
4
: 
{code: 'WEB300', title: 'How to use Microsoft Edge', credits: 3, enrolled: 0, cap: 30}
length
: 
5
[[Prototype]]
: 
Array(0)
*/

console.log(totalCredits(courses)); // 14