const teachers_url = "http://127.0.0.1:8000/teachers/";
const weeks_url = "http://127.0.0.1:8000/weeks/";
const details_url = "http://127.0.0.1:8000/details/";

fetch(teachers_url)
  .then((response) => response.json())
  .then((data) => {
    //console.log("teachers: ",data);
    localStorage.setItem("datas", JSON.stringify(data));
  })
  .catch((error) => {
    console.log(error);
  });

fetch(weeks_url)
  .then((response) => response.json())
  .then((data) => {
    //console.log("weeks: ",data)
    localStorage.setItem("weeks", JSON.stringify(data));
  })
  .catch((error) => {
    console.log(error);
  });

fetch(details_url)
  .then((response) => response.json())
  .then((data) => {
    //console.log("details: ",data)
    localStorage.setItem("details", JSON.stringify(data));
  })
  .catch((error) => {
    console.log(error);
  });

const teachers_list = localStorage.getItem("datas");
const weeks_list = localStorage.getItem("weeks");
const details_list = localStorage.getItem("details");

const teachers = JSON.parse(teachers_list);
const weeks = JSON.parse(weeks_list);
const details = JSON.parse(details_list);

//   console.log("teachers: ",teachers)
//  console.log("weeks: ",weeks);
//  console.log("details: ",details);


// ---------------------- MAIN DATASET -----------------------------------
var teachers_schedule =[];

teachers.map(teacher => {
    //console.log("teacher", teacher);
    var teacher_schedule = {
        "id": "",
        "name": "", 
        "short_name": "",
        "sunday": [],
        "monday": [],
        "tuesday": [],
        "wednesday": [],
        "thursday": [],
    };

    teacher_schedule.id = teacher.id;
    teacher_schedule.name = teacher.name;
    teacher_schedule.short_name = teacher.short_name;

    //console.log("teacher_schedule",teacher_schedule)
    var schedule = {
      "time": "",
      "year": "",
      "course": ""
    }

    teacher.sunday.map(day_id => {      
      weeks.map(week => {
        if(week.id == day_id){
          var first = week.first;
          var second = week.second;
          var third = week.third;
          var fourth = week.fourth;
          var fifth = week.fifth;
          var sixth = week.sixth;
          var lab = week.lab;
          
          for(let i=0; i<details.length; i++){
            schedule.time = "8:00 AM - 8:50 AM";
            if(details[i].id == first[0]){
              if(typeof(details[i].course) == "object"){
                schedule.year = "";
                schedule.course = "";
                teacher_schedule.sunday.push(schedule);
                schedule = {
                  "time": "",
                  "year": "",
                  "course": ""
                }
                break;  
              }
              schedule.year = details[i].year;
              schedule.course = details[i].course;
              teacher_schedule.sunday.push(schedule);
              schedule = {
                "time": "",
                "year": "",
                "course": ""
              }
              break;
            }
          }

          for(let i=0; i<details.length; i++){
            schedule.time = "8:50 AM - 9:40 AM";
            if(details[i].id == second[0]){
              if(typeof(details[i].course) == "object"){
                schedule.year = "";
                schedule.course = "";
                teacher_schedule.sunday.push(schedule);
                schedule = {
                  "time": "",
                  "year": "",
                  "course": ""
                }
                break;  
              }
              schedule.year = details[i].year;
              schedule.course = details[i].course;
              teacher_schedule.sunday.push(schedule);
              schedule = {
                "time": "",
                "year": "",
                "course": ""
              }
              break;
            }
          }

          for(let i=0; i<details.length; i++){
            schedule.time = "9:40 AM - 10:30 AM";
            if(details[i].id == third[0]){
              if(typeof(details[i].course) == "object"){
                schedule.year = "";
                schedule.course = "";
                teacher_schedule.sunday.push(schedule);
                schedule = {
                  "time": "",
                  "year": "",
                  "course": ""
                }
                break;  
              }
              schedule.year = details[i].year;
              schedule.course = details[i].course;
              teacher_schedule.sunday.push(schedule);
              schedule = {
                "time": "",
                "year": "",
                "course": ""
              }
              break;
            }
          }

          for(let i=0; i<details.length; i++){
            schedule.time = "10:40 AM - 11:30 AM";
            if(details[i].id == fourth[0]){
              if(typeof(details[i].course) == "object"){
                schedule.year = "";
                schedule.course = "";
                teacher_schedule.sunday.push(schedule);
                schedule = {
                  "time": "",
                  "year": "",
                  "course": ""
                }
                break;  
              }
              schedule.year = details[i].year;
              schedule.course = details[i].course;
              teacher_schedule.sunday.push(schedule);
              schedule = {
                "time": "",
                "year": "",
                "course": ""
              }
              break;
            }
          }

          for(let i=0; i<details.length; i++){
            schedule.time = "11:30 AM - 12:20 PM";
            if(details[i].id == fifth[0]){
              if(typeof(details[i].course) == "object"){
                schedule.year = "";
                schedule.course = "";
                teacher_schedule.sunday.push(schedule);
                schedule = {
                  "time": "",
                  "year": "",
                  "course": ""
                }
                break;  
              }
              schedule.year = details[i].year;
              schedule.course = details[i].course;
              teacher_schedule.sunday.push(schedule);
              schedule = {
                "time": "",
                "year": "",
                "course": ""
              }
              break;
            }
          }

          for(let i=0; i<details.length; i++){
            schedule.time = "12:20 PM - 1:10 PM";
            if(details[i].id == sixth[0]){
              if(typeof(details[i].course) == "object"){
                schedule.year = "";
                schedule.course = "";
                teacher_schedule.sunday.push(schedule);
                schedule = {
                  "time": "",
                  "year": "",
                  "course": ""
                }
                break;  
              }
              schedule.year = details[i].year;
              schedule.course = details[i].course;
              teacher_schedule.sunday.push(schedule);
              schedule = {
                "time": "",
                "year": "",
                "course": ""
              }
              break;
            }
          }

          for(let i=0; i<details.length; i++){
            schedule.time = "2:30 PM - 5:00 PM";
            if(details[i].id == lab[0]){
              if(typeof(details[i].course) == "object"){
                schedule.year = "";
                schedule.course = "";
                teacher_schedule.sunday.push(schedule);
                schedule = {
                  "time": "",
                  "year": "",
                  "course": ""
                }
                break;  
              }
              schedule.year = details[i].year;
              schedule.course = details[i].course;
              teacher_schedule.sunday.push(schedule);
              schedule = {
                "time": "",
                "year": "",
                "course": ""
              }
              break;
            }
          }
        } 
      })
      
    })

    teacher.monday.map(day_id => {
      weeks.map(week => {
        if(week.id == day_id){
          var first = week.first;
          var second = week.second;
          var third = week.third;
          var fourth = week.fourth;
          var fifth = week.fifth;
          var sixth = week.sixth;
          var lab = week.lab;
          
          for(let i=0; i<details.length; i++){
            schedule.time = "8:00 AM - 8:50 AM";
            if(details[i].id == first[0]){
              if(typeof(details[i].course) == "object"){
                schedule.year = "";
                schedule.course = "";
                teacher_schedule.monday.push(schedule);
                schedule = {
                  "time": "",
                  "year": "",
                  "course": ""
                }
                break;  
              }
              schedule.year = details[i].year;
              schedule.course = details[i].course;
              teacher_schedule.monday.push(schedule);
              schedule = {
                "time": "",
                "year": "",
                "course": ""
              }
              break;
            }
          }

          for(let i=0; i<details.length; i++){
            schedule.time = "8:50 AM - 9:40 AM";
            if(details[i].id == second[0]){
              if(typeof(details[i].course) == "object"){
                schedule.year = "";
                schedule.course = "";
                teacher_schedule.monday.push(schedule);
                schedule = {
                  "time": "",
                  "year": "",
                  "course": ""
                }
                break;  
              }
              schedule.year = details[i].year;
              schedule.course = details[i].course;
              teacher_schedule.monday.push(schedule);
              schedule = {
                "time": "",
                "year": "",
                "course": ""
              }
              break;
            }
          }

          for(let i=0; i<details.length; i++){
            schedule.time = "9:40 AM - 10:30 AM";
            if(details[i].id == third[0]){
              if(typeof(details[i].course) == "object"){
                schedule.year = "";
                schedule.course = "";
                teacher_schedule.monday.push(schedule);
                schedule = {
                  "time": "",
                  "year": "",
                  "course": ""
                }
                break;  
              }
              schedule.year = details[i].year;
              schedule.course = details[i].course;
              teacher_schedule.monday.push(schedule);
              schedule = {
                "time": "",
                "year": "",
                "course": ""
              }
              break;
            }
          }

          for(let i=0; i<details.length; i++){
            schedule.time = "10:40 AM - 11:30 AM";
            if(details[i].id == fourth[0]){
              if(typeof(details[i].course) == "object"){
                schedule.year = "";
                schedule.course = "";
                teacher_schedule.monday.push(schedule);
                schedule = {
                  "time": "",
                  "year": "",
                  "course": ""
                }
                break;  
              }
              schedule.year = details[i].year;
              schedule.course = details[i].course;
              teacher_schedule.monday.push(schedule);
              schedule = {
                "time": "",
                "year": "",
                "course": ""
              }
              break;
            }
          }

          for(let i=0; i<details.length; i++){
            schedule.time = "11:30 AM - 12:20 PM";
            if(details[i].id == fifth[0]){
              if(typeof(details[i].course) == "object"){
                schedule.year = "";
                schedule.course = "";
                teacher_schedule.monday.push(schedule);
                schedule = {
                  "time": "",
                  "year": "",
                  "course": ""
                }
                break;  
              }
              schedule.year = details[i].year;
              schedule.course = details[i].course;
              teacher_schedule.monday.push(schedule);
              schedule = {
                "time": "",
                "year": "",
                "course": ""
              }
              break;
            }
          }

          for(let i=0; i<details.length; i++){
            schedule.time = "12:20 PM - 1:10 PM";
            if(details[i].id == sixth[0]){
              if(typeof(details[i].course) == "object"){
                schedule.year = "";
                schedule.course = "";
                teacher_schedule.monday.push(schedule);
                schedule = {
                  "time": "",
                  "year": "",
                  "course": ""
                }
                break;  
              }
              schedule.year = details[i].year;
              schedule.course = details[i].course;
              teacher_schedule.monday.push(schedule);
              schedule = {
                "time": "",
                "year": "",
                "course": ""
              }
              break;
            }
          }

          for(let i=0; i<details.length; i++){
            schedule.time = "2:30 PM - 5:00 PM";
            if(details[i].id == lab[0]){
              if(typeof(details[i].course) == "object"){
                schedule.year = "";
                schedule.course = "";
                teacher_schedule.monday.push(schedule);
                schedule = {
                  "time": "",
                  "year": "",
                  "course": ""
                }
                break;  
              }
              schedule.year = details[i].year;
              schedule.course = details[i].course;
              teacher_schedule.monday.push(schedule);
              schedule = {
                "time": "",
                "year": "",
                "course": ""
              }
              break;
            }
          }
        } 
      })
      
    })

    teacher.tuesday.map(day_id => {
      weeks.map(week => {
        if(week.id == day_id){
          var first = week.first;
          var second = week.second;
          var third = week.third;
          var fourth = week.fourth;
          var fifth = week.fifth;
          var sixth = week.sixth;
          var lab = week.lab;
          
          for(let i=0; i<details.length; i++){
            schedule.time = "8:00 AM - 8:50 AM";
            if(details[i].id == first[0]){
              if(typeof(details[i].course) == "object"){
                schedule.year = "";
                schedule.course = "";
                teacher_schedule.tuesday.push(schedule);
                schedule = {
                  "time": "",
                  "year": "",
                  "course": ""
                }
                break;  
              }
              schedule.year = details[i].year;
              schedule.course = details[i].course;
              teacher_schedule.tuesday.push(schedule);
              schedule = {
                "time": "",
                "year": "",
                "course": ""
              }
              break;
            }
          }

          for(let i=0; i<details.length; i++){
            schedule.time = "8:50 AM - 9:40 AM";
            if(details[i].id == second[0]){
              if(typeof(details[i].course) == "object"){
                schedule.year = "";
                schedule.course = "";
                teacher_schedule.tuesday.push(schedule);
                schedule = {
                  "time": "",
                  "year": "",
                  "course": ""
                }
                break;  
              }
              schedule.year = details[i].year;
              schedule.course = details[i].course;
              teacher_schedule.tuesday.push(schedule);
              schedule = {
                "time": "",
                "year": "",
                "course": ""
              }
              break;
            }
          }

          for(let i=0; i<details.length; i++){
            schedule.time = "9:40 AM - 10:30 AM";
            if(details[i].id == third[0]){
              if(typeof(details[i].course) == "object"){
                schedule.year = "";
                schedule.course = "";
                teacher_schedule.tuesday.push(schedule);
                schedule = {
                  "time": "",
                  "year": "",
                  "course": ""
                }
                break;  
              }
              schedule.year = details[i].year;
              schedule.course = details[i].course;
              teacher_schedule.tuesday.push(schedule);
              schedule = {
                "time": "",
                "year": "",
                "course": ""
              }
              break;
            }
          }

          for(let i=0; i<details.length; i++){
            schedule.time = "10:40 AM - 11:30 AM";
            if(details[i].id == fourth[0]){
              if(typeof(details[i].course) == "object"){
                schedule.year = "";
                schedule.course = "";
                teacher_schedule.tuesday.push(schedule);
                schedule = {
                  "time": "",
                  "year": "",
                  "course": ""
                }
                break;  
              }
              schedule.year = details[i].year;
              schedule.course = details[i].course;
              teacher_schedule.tuesday.push(schedule);
              schedule = {
                "time": "",
                "year": "",
                "course": ""
              }
              break;
            }
          }

          for(let i=0; i<details.length; i++){
            schedule.time = "11:30 AM - 12:20 PM";
            if(details[i].id == fifth[0]){
              if(typeof(details[i].course) == "object"){
                schedule.year = "";
                schedule.course = "";
                teacher_schedule.tuesday.push(schedule);
                schedule = {
                  "time": "",
                  "year": "",
                  "course": ""
                }
                break;  
              }
              schedule.year = details[i].year;
              schedule.course = details[i].course;
              teacher_schedule.tuesday.push(schedule);
              schedule = {
                "time": "",
                "year": "",
                "course": ""
              }
              break;
            }
          }

          for(let i=0; i<details.length; i++){
            schedule.time = "12:20 PM - 1:10 PM";
            if(details[i].id == sixth[0]){
              if(typeof(details[i].course) == "object"){
                schedule.year = "";
                schedule.course = "";
                teacher_schedule.tuesday.push(schedule);
                schedule = {
                  "time": "",
                  "year": "",
                  "course": ""
                }
                break;  
              }
              schedule.year = details[i].year;
              schedule.course = details[i].course;
              teacher_schedule.tuesday.push(schedule);
              schedule = {
                "time": "",
                "year": "",
                "course": ""
              }
              break;
            }
          }

          for(let i=0; i<details.length; i++){
            schedule.time = "2:30 PM - 5:00 PM";
            if(details[i].id == lab[0]){
              if(typeof(details[i].course) == "object"){
                schedule.year = "";
                schedule.course = "";
                teacher_schedule.tuesday.push(schedule);
                schedule = {
                  "time": "",
                  "year": "",
                  "course": ""
                }
                break;  
              }
              schedule.year = details[i].year;
              schedule.course = details[i].course;
              teacher_schedule.tuesday.push(schedule);
              schedule = {
                "time": "",
                "year": "",
                "course": ""
              }
              break;
            }
          }
        } 
      })      
    })

    teacher.wednesday.map(day_id => {
      weeks.map(week => {
        if(week.id == day_id){
          var first = week.first;
          var second = week.second;
          var third = week.third;
          var fourth = week.fourth;
          var fifth = week.fifth;
          var sixth = week.sixth;
          var lab = week.lab;
          
          for(let i=0; i<details.length; i++){
            schedule.time = "8:00 AM - 8:50 AM";
            if(details[i].id == first[0]){
              if(typeof(details[i].course) == "object"){
                schedule.year = "";
                schedule.course = "";
                teacher_schedule.wednesday.push(schedule);
                schedule = {
                  "time": "",
                  "year": "",
                  "course": ""
                }
                break;  
              }
              schedule.year = details[i].year;
              schedule.course = details[i].course;
              teacher_schedule.wednesday.push(schedule);
              schedule = {
                "time": "",
                "year": "",
                "course": ""
              }
              break;
            }
          }
        
          for(let i=0; i<details.length; i++){
            schedule.time = "8:50 AM - 9:40 AM";
            if(details[i].id == second[0]){
              if(typeof(details[i].course) == "object"){
                schedule.year = "";
                schedule.course = "";
                teacher_schedule.wednesday.push(schedule);
                schedule = {
                  "time": "",
                  "year": "",
                  "course": ""
                }
                break;  
              }
              schedule.year = details[i].year;
              schedule.course = details[i].course;
              teacher_schedule.wednesday.push(schedule);
              schedule = {
                "time": "",
                "year": "",
                "course": ""
              }
              break;
            }
          }
        
          for(let i=0; i<details.length; i++){
            schedule.time = "9:40 AM - 10:30 AM";
            if(details[i].id == third[0]){
              if(typeof(details[i].course) == "object"){
                schedule.year = "";
                schedule.course = "";
                teacher_schedule.wednesday.push(schedule);
                schedule = {
                  "time": "",
                  "year": "",
                  "course": ""
                }
                break;  
              }
              schedule.year = details[i].year;
              schedule.course = details[i].course;
              teacher_schedule.wednesday.push(schedule);
              schedule = {
                "time": "",
                "year": "",
                "course": ""
              }
              break;
            }
          }
        
          for(let i=0; i<details.length; i++){
            schedule.time = "10:40 AM - 11:30 AM";
            if(details[i].id == fourth[0]){
              if(typeof(details[i].course) == "object"){
                schedule.year = "";
                schedule.course = "";
                teacher_schedule.wednesday.push(schedule);
                schedule = {
                  "time": "",
                  "year": "",
                  "course": ""
                }
                break;  
              }
              schedule.year = details[i].year;
              schedule.course = details[i].course;
              teacher_schedule.wednesday.push(schedule);
              schedule = {
                "time": "",
                "year": "",
                "course": ""
              }
              break;
            }
          }
        
          for(let i=0; i<details.length; i++){
            schedule.time = "11:30 AM - 12:20 PM";
            if(details[i].id == fifth[0]){
              if(typeof(details[i].course) == "object"){
                schedule.year = "";
                schedule.course = "";
                teacher_schedule.wednesday.push(schedule);
                schedule = {
                  "time": "",
                  "year": "",
                  "course": ""
                }
                break;  
              }
              schedule.year = details[i].year;
              schedule.course = details[i].course;
              teacher_schedule.wednesday.push(schedule);
              schedule = {
                "time": "",
                "year": "",
                "course": ""
              }
              break;
            }
          }
        
          for(let i=0; i<details.length; i++){
            schedule.time = "12:20 PM - 1:10 PM";
            if(details[i].id == sixth[0]){
              if(typeof(details[i].course) == "object"){
                schedule.year = "";
                schedule.course = "";
                teacher_schedule.wednesday.push(schedule);
                schedule = {
                  "time": "",
                  "year": "",
                  "course": ""
                }
                break;  
              }
              schedule.year = details[i].year;
              schedule.course = details[i].course;
              teacher_schedule.wednesday.push(schedule);
              schedule = {
                "time": "",
                "year": "",
                "course": ""
              }
              break;
            }
          }
        
          for(let i=0; i<details.length; i++){
            schedule.time = "2:30 PM - 5:00 PM";
            if(details[i].id == lab[0]){
              if(typeof(details[i].course) == "object"){
                schedule.year = "";
                schedule.course = "";
                teacher_schedule.wednesday.push(schedule);
                schedule = {
                  "time": "",
                  "year": "",
                  "course": ""
                }
                break;  
              }
              schedule.year = details[i].year;
              schedule.course = details[i].course;
              teacher_schedule.wednesday.push(schedule);
              schedule = {
                "time": "",
                "year": "",
                "course": ""
              }
              break;
            }
          }
        } 
      })      
    })
    
    teacher.thursday.map(day_id => {
      weeks.map(week => {
        if(week.id == day_id){
          var first = week.first;
          var second = week.second;
          var third = week.third;
          var fourth = week.fourth;
          var fifth = week.fifth;
          var sixth = week.sixth;
          var lab = week.lab;
          
          for(let i=0; i<details.length; i++){
            schedule.time = "8:00 AM - 8:50 AM";
            if(details[i].id == first[0]){
              if(typeof(details[i].course) == "object"){
                schedule.year = "";
                schedule.course = "";
                teacher_schedule.thursday.push(schedule);
                schedule = {
                  "time": "",
                  "year": "",
                  "course": ""
                }
                break;  
              }
              schedule.year = details[i].year;
              schedule.course = details[i].course;
              teacher_schedule.thursday.push(schedule);
              schedule = {
                "time": "",
                "year": "",
                "course": ""
              }
              break;
            }
          }
        
          for(let i=0; i<details.length; i++){
            schedule.time = "8:50 AM - 9:40 AM";
            if(details[i].id == second[0]){
              if(typeof(details[i].course) == "object"){
                schedule.year = "";
                schedule.course = "";
                teacher_schedule.thursday.push(schedule);
                schedule = {
                  "time": "",
                  "year": "",
                  "course": ""
                }
                break;  
              }
              schedule.year = details[i].year;
              schedule.course = details[i].course;
              teacher_schedule.thursday.push(schedule);
              schedule = {
                "time": "",
                "year": "",
                "course": ""
              }
              break;
            }
          }
        
          for(let i=0; i<details.length; i++){
            schedule.time = "9:40 AM - 10:30 AM";
            if(details[i].id == third[0]){
              if(typeof(details[i].course) == "object"){
                schedule.year = "";
                schedule.course = "";
                teacher_schedule.thursday.push(schedule);
                schedule = {
                  "time": "",
                  "year": "",
                  "course": ""
                }
                break;  
              }
              schedule.year = details[i].year;
              schedule.course = details[i].course;
              teacher_schedule.thursday.push(schedule);
              schedule = {
                "time": "",
                "year": "",
                "course": ""
              }
              break;
            }
          }
        
          for(let i=0; i<details.length; i++){
            schedule.time = "10:40 AM - 11:30 AM";
            if(details[i].id == fourth[0]){
              if(typeof(details[i].course) == "object"){
                schedule.year = "";
                schedule.course = "";
                teacher_schedule.thursday.push(schedule);
                schedule = {
                  "time": "",
                  "year": "",
                  "course": ""
                }
                break;  
              }
              schedule.year = details[i].year;
              schedule.course = details[i].course;
              teacher_schedule.thursday.push(schedule);
              schedule = {
                "time": "",
                "year": "",
                "course": ""
              }
              break;
            }
          }
        
          for(let i=0; i<details.length; i++){
            schedule.time = "11:30 AM - 12:20 PM";
            if(details[i].id == fifth[0]){
              if(typeof(details[i].course) == "object"){
                schedule.year = "";
                schedule.course = "";
                teacher_schedule.thursday.push(schedule);
                schedule = {
                  "time": "",
                  "year": "",
                  "course": ""
                }
                break;  
              }
              schedule.year = details[i].year;
              schedule.course = details[i].course;
              teacher_schedule.thursday.push(schedule);
              schedule = {
                "time": "",
                "year": "",
                "course": ""
              }
              break;
            }
          }
        
          for(let i=0; i<details.length; i++){
            schedule.time = "12:20 PM - 1:10 PM";
            if(details[i].id == sixth[0]){
              if(typeof(details[i].course) == "object"){
                schedule.year = "";
                schedule.course = "";
                teacher_schedule.thursday.push(schedule);
                schedule = {
                  "time": "",
                  "year": "",
                  "course": ""
                }
                break;  
              }
              schedule.year = details[i].year;
              schedule.course = details[i].course;
              teacher_schedule.thursday.push(schedule);
              schedule = {
                "time": "",
                "year": "",
                "course": ""
              }
              break;
            }
          }
        
          for(let i=0; i<details.length; i++){
            schedule.time = "2:30 PM - 5:00 PM";
            if(details[i].id == lab[0]){
              if(typeof(details[i].course) == "object"){
                schedule.year = "";
                schedule.course = "";
                teacher_schedule.thursday.push(schedule);
                schedule = {
                  "time": "",
                  "year": "",
                  "course": ""
                }
                break;  
              }
              schedule.year = details[i].year;
              schedule.course = details[i].course;
              teacher_schedule.thursday.push(schedule);
              schedule = {
                "time": "",
                "year": "",
                "course": ""
              }
              break;
            }
          }
        } 
      })      
    })

teachers_schedule.push(teacher_schedule);
})

//console.log("teachers_sch", teachers_schedule);
// ------------------------------------------------------------------------------------------------------


// ----------------------------------SHOW TEACHERS LIST------------------------------------
const listSection = document.getElementById("teachers-list");
const ol = document.createElement("ol");

teachers_schedule.map(teacher => {
  console.log(teacher.short_name, '-', teacher.name);
  const li = document.createElement("li");
  li.innerText = teacher.short_name + ' - ' + teacher.name;
  ol.appendChild(li);
})

listSection.appendChild(ol);

// ----------------------------------------------------------------------------------------

const week = ["sunday", "monday", "tuesday", "wednesday", "thursday"];
let dayNo = 0;
let day = week[dayNo];
const dayLabel = document.getElementById("dayLabel");
dayLabel.innerText = day;

function lt() {
  if (dayNo > 0) {
    dayNo = dayNo - 1;
    day = week[dayNo];
    dayLabel.innerText = day;
    trigger(day);
  }
}
function gt() {
  if (dayNo < 4) {
    dayNo = dayNo + 1;
    day = week[dayNo];
    dayLabel.innerText = day;
    trigger(day);
  }
}

function trigger(day) {
    const table = document.getElementById("master-table");
    table.innerHTML = `
      <tr>
          <th>Teachers Name</th>
          <th>8:00-8:50</th>
          <th>8:50-9:40</th>
          <th>9:40-10:30</th>
          <th>10:40-11:30</th>
          <th>11:30-12:20</th>
          <th>12:20-1:10</th>
          <th>2:30-5:00</th>
      </tr>
      `;
    teachers_schedule.map((teacher) => {
      let tr = document.createElement("tr");
      //console.log(teacher[`${day}`][4].course);
      let  lab1 = teacher[`${day}`][1].course;
      let  lab2 = teacher[`${day}`][4].course;
      if(lab1[lab1.length-1]%2 == 0){
        //console.log(lab1);
        tr.innerHTML = `
                <th>${teacher.name}</th>
                <td colspan="3" class="lab">${lab1}</td>
                                <td>${teacher[`${day}`][3].course}</td>
                <td>${teacher[`${day}`][4].course}</td>
                <td>${teacher[`${day}`][5].course}</td>
                <td>${teacher[`${day}`][6].course}</td>
            `;
        table.appendChild(tr);
      }
      else if(lab2[lab2.length-1]%2 == 0){
        //console.log(lab2);
        tr.innerHTML = `
                <th>${teacher.name}</th>
                <td>${teacher[`${day}`][0].course}</td>
                <td>${teacher[`${day}`][1].course}</td>
                <td>${teacher[`${day}`][2].course}</td>
                <td colspan="3" class="lab">${lab2}</td>
                <td>${teacher[`${day}`][6].course}</td>
            `;
        table.appendChild(tr);
      }
      else{
        tr.innerHTML = `
                <th>${teacher.name}</th>
                <td>${teacher[`${day}`][0].course}</td>
                <td>${teacher[`${day}`][1].course}</td>
                <td>${teacher[`${day}`][2].course}</td>
                <td>${teacher[`${day}`][3].course}</td>
                <td>${teacher[`${day}`][4].course}</td>
                <td>${teacher[`${day}`][5].course}</td>
                <td>${teacher[`${day}`][6].course}</td>
            `;
        table.appendChild(tr);
      }
    });
  }
trigger(day);

function getYearRoutine(y){

  var firstYearRoutine = {
    "sunday":[
      {
        "time": "8:00 AM - 8:50 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "8:50 AM - 9:40 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "9:40 AM - 10:30 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "10:40 AM - 11:30 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "11:30 AM - 12:20 PM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "12:20 PM - 1:10 PM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "2:30 PM - 5:00 PM",
        "teacher": "",
        "course": ""
      }
    ],
    "monday":[
      {
        "time": "8:00 AM - 8:50 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "8:50 AM - 9:40 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "9:40 AM - 10:30 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "10:40 AM - 11:30 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "11:30 AM - 12:20 PM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "12:20 PM - 1:10 PM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "2:30 PM - 5:00 PM",
        "teacher": "",
        "course": ""
      }
    ],
    "tuesday":[
      {
        "time": "8:00 AM - 8:50 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "8:50 AM - 9:40 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "9:40 AM - 10:30 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "10:40 AM - 11:30 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "11:30 AM - 12:20 PM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "12:20 PM - 1:10 PM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "2:30 PM - 5:00 PM",
        "teacher": "",
        "course": ""
      }
    ],
    "wednesday":[
      {
        "time": "8:00 AM - 8:50 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "8:50 AM - 9:40 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "9:40 AM - 10:30 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "10:40 AM - 11:30 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "11:30 AM - 12:20 PM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "12:20 PM - 1:10 PM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "2:30 PM - 5:00 PM",
        "teacher": "",
        "course": ""
      }
    ],
    "thursday":[
      {
        "time": "8:00 AM - 8:50 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "8:50 AM - 9:40 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "9:40 AM - 10:30 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "10:40 AM - 11:30 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "11:30 AM - 12:20 PM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "12:20 PM - 1:10 PM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "2:30 PM - 5:00 PM",
        "teacher": "",
        "course": ""
      }
    ]
  }

  var secondYearRoutine = {
    "sunday":[
      {
        "time": "8:00 AM - 8:50 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "8:50 AM - 9:40 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "9:40 AM - 10:30 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "10:40 AM - 11:30 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "11:30 AM - 12:20 PM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "12:20 PM - 1:10 PM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "2:30 PM - 5:00 PM",
        "teacher": "",
        "course": ""
      }
    ],
    "monday":[
      {
        "time": "8:00 AM - 8:50 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "8:50 AM - 9:40 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "9:40 AM - 10:30 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "10:40 AM - 11:30 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "11:30 AM - 12:20 PM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "12:20 PM - 1:10 PM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "2:30 PM - 5:00 PM",
        "teacher": "",
        "course": ""
      }
    ],
    "tuesday":[
      {
        "time": "8:00 AM - 8:50 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "8:50 AM - 9:40 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "9:40 AM - 10:30 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "10:40 AM - 11:30 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "11:30 AM - 12:20 PM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "12:20 PM - 1:10 PM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "2:30 PM - 5:00 PM",
        "teacher": "",
        "course": ""
      }
    ],
    "wednesday":[
      {
        "time": "8:00 AM - 8:50 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "8:50 AM - 9:40 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "9:40 AM - 10:30 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "10:40 AM - 11:30 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "11:30 AM - 12:20 PM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "12:20 PM - 1:10 PM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "2:30 PM - 5:00 PM",
        "teacher": "",
        "course": ""
      }
    ],
    "thursday":[
      {
        "time": "8:00 AM - 8:50 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "8:50 AM - 9:40 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "9:40 AM - 10:30 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "10:40 AM - 11:30 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "11:30 AM - 12:20 PM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "12:20 PM - 1:10 PM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "2:30 PM - 5:00 PM",
        "teacher": "",
        "course": ""
      }
    ]
  }

  var thirdYearRoutine = {
    "sunday":[
      {
        "time": "8:00 AM - 8:50 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "8:50 AM - 9:40 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "9:40 AM - 10:30 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "10:40 AM - 11:30 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "11:30 AM - 12:20 PM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "12:20 PM - 1:10 PM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "2:30 PM - 5:00 PM",
        "teacher": "",
        "course": ""
      }
    ],
    "monday":[
      {
        "time": "8:00 AM - 8:50 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "8:50 AM - 9:40 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "9:40 AM - 10:30 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "10:40 AM - 11:30 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "11:30 AM - 12:20 PM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "12:20 PM - 1:10 PM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "2:30 PM - 5:00 PM",
        "teacher": "",
        "course": ""
      }
    ],
    "tuesday":[
      {
        "time": "8:00 AM - 8:50 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "8:50 AM - 9:40 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "9:40 AM - 10:30 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "10:40 AM - 11:30 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "11:30 AM - 12:20 PM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "12:20 PM - 1:10 PM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "2:30 PM - 5:00 PM",
        "teacher": "",
        "course": ""
      }
    ],
    "wednesday":[
      {
        "time": "8:00 AM - 8:50 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "8:50 AM - 9:40 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "9:40 AM - 10:30 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "10:40 AM - 11:30 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "11:30 AM - 12:20 PM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "12:20 PM - 1:10 PM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "2:30 PM - 5:00 PM",
        "teacher": "",
        "course": ""
      }
    ],
    "thursday":[
      {
        "time": "8:00 AM - 8:50 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "8:50 AM - 9:40 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "9:40 AM - 10:30 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "10:40 AM - 11:30 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "11:30 AM - 12:20 PM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "12:20 PM - 1:10 PM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "2:30 PM - 5:00 PM",
        "teacher": "",
        "course": ""
      }
    ]
  }

  var fourthYearRoutine = {
    "sunday":[
      {
        "time": "8:00 AM - 8:50 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "8:50 AM - 9:40 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "9:40 AM - 10:30 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "10:40 AM - 11:30 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "11:30 AM - 12:20 PM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "12:20 PM - 1:10 PM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "2:30 PM - 5:00 PM",
        "teacher": "",
        "course": ""
      }
    ],
    "monday":[
      {
        "time": "8:00 AM - 8:50 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "8:50 AM - 9:40 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "9:40 AM - 10:30 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "10:40 AM - 11:30 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "11:30 AM - 12:20 PM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "12:20 PM - 1:10 PM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "2:30 PM - 5:00 PM",
        "teacher": "",
        "course": ""
      }
    ],
    "tuesday":[
      {
        "time": "8:00 AM - 8:50 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "8:50 AM - 9:40 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "9:40 AM - 10:30 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "10:40 AM - 11:30 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "11:30 AM - 12:20 PM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "12:20 PM - 1:10 PM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "2:30 PM - 5:00 PM",
        "teacher": "",
        "course": ""
      }
    ],
    "wednesday":[
      {
        "time": "8:00 AM - 8:50 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "8:50 AM - 9:40 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "9:40 AM - 10:30 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "10:40 AM - 11:30 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "11:30 AM - 12:20 PM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "12:20 PM - 1:10 PM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "2:30 PM - 5:00 PM",
        "teacher": "",
        "course": ""
      }
    ],
    "thursday":[
      {
        "time": "8:00 AM - 8:50 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "8:50 AM - 9:40 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "9:40 AM - 10:30 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "10:40 AM - 11:30 AM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "11:30 AM - 12:20 PM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "12:20 PM - 1:10 PM",
        "teacher": "",
        "course": ""
      },
      {
        "time": "2:30 PM - 5:00 PM",
        "teacher": "",
        "course": ""
      }
    ]
  }


// ------------------first Year routine-------------------------
  teachers_schedule.map(teacher => {
    for(let i=0; i<7; i++){
      for(d in teacher){
        if(d == "id" || d== "name" || d=="short_name"){
          continue;
        }
        if(teacher[d][i].year == "1"){
          for(let j=0; j<7; j++){
            if(teacher[d][i].time == firstYearRoutine[d][j].time){
              firstYearRoutine[d][j].course = teacher[d][j].course;
              firstYearRoutine[d][j].teacher = teacher.short_name;
            }
          }
        }
      }
    }
  })


// -------------second year routine---------------
  teachers_schedule.map(teacher => {
    for(let i=0; i<7; i++){
      for(d in teacher){
        if(d == "id" || d== "name" || d=="short_name"){
          continue;
        }
        if(teacher[d][i].year == "2"){
          for(let j=0; j<7; j++){
            if(teacher[d][i].time == secondYearRoutine[d][j].time){
              secondYearRoutine[d][j].course = teacher[d][j].course;
              secondYearRoutine[d][j].teacher = teacher.short_name;
            }
          }
        }
      }
    }
  })


  // --------------third year routine--------------
  teachers_schedule.map(teacher => {
    // i, j indicates period number
    for(let i=0; i<7; i++){
      for(d in teacher){
        if(d == "id" || d== "name" || d=="short_name"){
          continue;
        }
        if(teacher[d][i].year == "3"){
          for(let j=0; j<7; j++){
            if(teacher[d][i].time == thirdYearRoutine[d][j].time){
              thirdYearRoutine[d][j].course = teacher[d][j].course;
              thirdYearRoutine[d][j].teacher = teacher.short_name;
            }
          }
        }
      }
    }
  })


  // ---------------------fourth year routine----------------
  teachers_schedule.map(teacher => {
    // i, j indicates period number
    for(let i=0; i<7; i++){
      for(d in teacher){
        if(d == "id" || d== "name" || d=="short_name"){
          continue;
        }
        if(teacher[d][i].year == "4"){
          for(let j=0; j<7; j++){
            if(teacher[d][i].time == fourthYearRoutine[d][j].time){
              fourthYearRoutine[d][j].course = teacher[d][j].course;
              fourthYearRoutine[d][j].teacher = teacher.short_name;
            }
          }
        }
      }
    }
  })

  if(y=="1"){
    return{
      firstYearRoutine
    }
  }else if(y=="2"){
    return{
      secondYearRoutine
    }
  }else if(y=="3"){
    return{
      thirdYearRoutine
    }
  }else if(y=="4"){
    return{
      fourthYearRoutine
    }
  }
}

function showYearRoutine(year){
  const masterRoutine = document.getElementById("master-routine");
  const yearRoutine = document.getElementById("year-routine");

  masterRoutine.style.display = "none";
  yearRoutine.style.display = "block";

  const table = document.getElementById("year-table");
  table.innerHTML = `
    <caption class="table-title">Year: ${year}</caption>
    <tr>
        <th>Day | Time</th>
        <th>8:00-8:50</th>
        <th>8:50-9:40</th>
        <th>9:40-10:30</th>
        <th>10:40-11:30</th>
        <th>11:30-12:20</th>
        <th>12:20-1:10</th>
        <th>2:30-5:00</th>
    </tr>
  `;
  
  var routine = null;
  if(year == "1"){
    routine = getYearRoutine(year).firstYearRoutine;
  }else if(year == "2"){
    routine = getYearRoutine(year).secondYearRoutine;
  }else if(year == "3"){
    routine = getYearRoutine(year).thirdYearRoutine;
  }else if(year == "4"){
    routine = getYearRoutine(year).fourthYearRoutine;
  }

  for(day in routine){
    //console.log(day,":",routine[day]);
    const tr = document.createElement("tr");
    //console.log(routine[day][1].course);
    let  lab1 = routine[day][1].course;
    let  lab2 = routine[day][4].course;
    if(lab1[lab1.length-1]%2 == 0){
      console.log(lab1);
      tr.innerHTML=`
        <th>${day}</th>
        <td class="lab" colspan="3">${routine[day][0].teacher} <br> ${lab1}</td>
        <td>${routine[day][3].teacher} <br> ${routine[day][3].course}</td>
        <td>${routine[day][4].teacher} <br> ${routine[day][4].course}</td>
        <td>${routine[day][5].teacher} <br> ${routine[day][5].course}</td>
        <td>${routine[day][6].teacher} <br> ${routine[day][6].course}</td>
      `;
      table.appendChild(tr);
    }
    else if(lab2[lab2.length-1]%2 == 0){
      console.log(lab2);
      tr.innerHTML=`
        <th>${day}</th>
        <td>${routine[day][0].teacher} <br> ${routine[day][0].course}</td>
        <td>${routine[day][1].teacher} <br> ${routine[day][1].course}</td>
        <td>${routine[day][2].teacher} <br> ${routine[day][2].course}</td>
        <td class="lab" colspan="3">${routine[day][3].teacher} <br> ${lab2}</td>
        <td>${routine[day][6].teacher} <br> ${routine[day][6].course}</td>
      `;
      table.appendChild(tr);
    }
    else{
      tr.innerHTML=`
        <th>${day}</th>
        <td>${routine[day][0].teacher} <br> ${routine[day][0].course}</td>
        <td>${routine[day][1].teacher} <br> ${routine[day][1].course}</td>
        <td>${routine[day][2].teacher} <br> ${routine[day][2].course}</td>
        <td>${routine[day][3].teacher} <br> ${routine[day][3].course}</td>
        <td>${routine[day][4].teacher} <br> ${routine[day][4].course}</td>
        <td>${routine[day][5].teacher} <br> ${routine[day][5].course}</td>
        <td>${routine[day][6].teacher} <br> ${routine[day][6].course}</td>
      `;
      table.appendChild(tr);
    }
  }

}


function showMasterRoutine(){
  const masterRoutine = document.getElementById("master-routine");
  const yearRoutine = document.getElementById("year-routine");

  masterRoutine.style.display = "block";
  yearRoutine.style.display = "none";
}


// --------------------------- TIME ZONE ----------------------------------------------
const dateStr = new Date().toString();
const dateArr = dateStr.split(" ");
const currentDay = dateArr[0];
const currentMonth = dateArr[1];
const currentDate = dateArr[2];
const currentYear = dateArr[3];
var currentTime = dateArr[4];

if(currentTime.split(":")[0] > 12){
  var hourInt = parseInt(currentTime.split(":")[0])-12;
  var mint = currentTime.split(":")[1];
  var hourStr = hourInt.toString();

  
  currentTime = `${hourStr}:${mint} PM`;
  console.log(hourStr, mint);
  console.log(typeof(hourStr));
}else{
  var hour = currentTime.split(":")[0];
  var mint = currentTime.split(":")[1];
  currentTime = `${hour}:${mint} AM`;
}

document.getElementById("timezone").innerHTML = `
${currentTime} <br>
${currentDay}, ${currentDate} ${currentMonth}, ${currentYear}
`;
// --------------------------------------------------------------------------------------
