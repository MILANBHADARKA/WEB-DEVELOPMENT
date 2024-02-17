//destructuring of object

let course = {
    coursename : "js in hindi",
    fee : 0,
    courseInstructor : "Hitesh"
}

let {courseInstructor} = course

console.log(courseInstructor);             /*now not need to write    
                                              course.courseInstructor   or
                                              course["courseInstructor"].*/

                                              
let {courseInstructor : instructor} = course;  
//we typecast name of "courseInstructor" to "instructor" now only with  "instructor"  we can refer course.courseInstructor.
console.log(instructor);    





//API
//usaually we get api in object

//this is call json
// {
//     coursename : "js in hindi",
//     fee : 0,
//     courseInstructor : "Hitesh"
// }


//api in array formate
// [
//     {},
//     {},
//     {}
// ]
