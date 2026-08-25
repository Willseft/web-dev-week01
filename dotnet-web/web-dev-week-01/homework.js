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

// 5 

// 6 

// 7

// 8
