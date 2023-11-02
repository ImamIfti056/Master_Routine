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

console.log("teachers_sch", teachers_schedule);


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
      //console.log(teacher[`${day}`][0])
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
    });
  }
trigger(day);

// function showThirdYearRoutine(){
//   const masterRoutine = document.getElementById("master-routine");
//   const yearRoutine = document.getElementById("third-year-routine");

//   masterRoutine.style.display = "none";
//   yearRoutine.style.display = "block";

//   const table = document.getElementById("third-year-table");
//   table.innerHTML = `
//       <tr>
//           <th>Day | Time</th>
//           <th>8:00-8:50</th>
//           <th>8:50-9:40</th>
//           <th>9:40-10:30</th>
//           <th>10:40-11:30</th>
//           <th>11:30-12:20</th>
//           <th>12:20-1:10</th>
//           <th>2:30-5:00</th>
//       </tr>
//   `;

//   var thirdYearRoutine = {
//     "sunday":[
//       {
//         "time": "",
//         "teacher": "",
//         "course": ""
//       }
//     ],
//     "monday":[
//       {
//         "time": "",
//         "teacher": "",
//         "course": ""
//       }
//     ]
//   }

//   teachers_schedule.map(teacher => {

//   })

// }

// function showMasterRoutine(){
//   const masterRoutine = document.getElementById("master-routine");
//   const yearRoutine = document.getElementById("third-year-routine");

//   masterRoutine.style.display = "block";
//   yearRoutine.style.display = "none";
// }

