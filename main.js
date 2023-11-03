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

function getYearRoutine(y){
  // const masterRoutine = document.getElementById("master-routine");
  // const yearRoutine = document.getElementById("year-routine");

  // masterRoutine.style.display = "none";
  // yearRoutine.style.display = "block";

  // const table = document.getElementById("year-table");
  // table.innerHTML = `
  //     <tr>
  //         <th>Day | Time</th>
  //         <th>8:00-8:50</th>
  //         <th>8:50-9:40</th>
  //         <th>9:40-10:30</th>
  //         <th>10:40-11:30</th>
  //         <th>11:30-12:20</th>
  //         <th>12:20-1:10</th>
  //         <th>2:30-5:00</th>
  //     </tr>
  // `;

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
      if(teacher.sunday[i].year == "1"){
        for(let j=0; j<7; j++){
          if(teacher.sunday[i].time == firstYearRoutine.sunday[j].time){
            firstYearRoutine.sunday[j].course = teacher.sunday[j].course;
            firstYearRoutine.sunday[j].teacher = teacher.short_name;
            //console.log("sun dukse",firstYearRoutine.sunday[j])
          }
        }
      }
      if(teacher.monday[i].year == "1"){
        //console.log("mon",teacher.monday[i]);
        for(let j=0; j<7; j++){
          if(teacher.monday[i].time == firstYearRoutine.monday[j].time){
            firstYearRoutine.monday[j].course = teacher.monday[j].course;
            firstYearRoutine.monday[j].teacher = teacher.short_name;
            console.log("mon dukse",firstYearRoutine.monday[j])
          }
        }

      }
      if(teacher.tuesday[i].year == "1"){
        //console.log("tues", teacher.tuesday[i]);
        for(let j=0; j<7; j++){
          if(teacher.tuesday[i].time == firstYearRoutine.tuesday[j].time){
            firstYearRoutine.tuesday[j].course = teacher.tuesday[j].course;
            firstYearRoutine.tuesday[j].teacher = teacher.short_name;
            console.log("tues dukse",firstYearRoutine.tuesday[j])
          }
        }
      }
      if(teacher.wednesday[i].year == "1"){
        //console.log("wednes",teacher.wednesday[i]);
        for(let j=0; j<7; j++){
          if(teacher.wednesday[i].time == firstYearRoutine.wednesday[j].time){
            firstYearRoutine.wednesday[j].course = teacher.wednesday[j].course;
            firstYearRoutine.wednesday[j].teacher = teacher.short_name;
            console.log("wednes dukse",firstYearRoutine.wednesday[j])
          }
        }
      }
      if(teacher.thursday[i].year == "1"){
        for(let j=0; j<7; j++){
          if(teacher.thursday[i].time == firstYearRoutine.thursday[j].time){
            firstYearRoutine.thursday[j].course = teacher.thursday[j].course;
            firstYearRoutine.thursday[j].teacher = teacher.short_name;
            //console.log("thurs dukse",firstYearRoutine.thursday[j])
          }
        }
      }
    }
  })


// -------------second year routine---------------
  teachers_schedule.map(teacher => {
    for(let i=0; i<7; i++){
      if(teacher.sunday[i].year == "2"){
        for(let j=0; j<7; j++){
          if(teacher.sunday[i].time == secondYearRoutine.sunday[j].time){
            secondYearRoutine.sunday[j].course = teacher.sunday[j].course;
            secondYearRoutine.sunday[j].teacher = teacher.short_name;
            //console.log("2sun dukse",secondYearRoutine.sunday[j])
          }
        }
      }
      if(teacher.monday[i].year == "2"){
        //console.log("mon",teacher.monday[i]);
        for(let j=0; j<7; j++){
          if(teacher.monday[i].time == secondYearRoutine.monday[j].time){
            secondYearRoutine.monday[j].course = teacher.monday[j].course;
            secondYearRoutine.monday[j].teacher = teacher.short_name;
            //console.log("2mon dukse",secondYearRoutine.monday[j])
          }
        }
    
      }
      if(teacher.tuesday[i].year == "2"){
        //console.log("tues", teacher.tuesday[i]);
        for(let j=0; j<7; j++){
          if(teacher.tuesday[i].time == secondYearRoutine.tuesday[j].time){
            secondYearRoutine.tuesday[j].course = teacher.tuesday[j].course;
            secondYearRoutine.tuesday[j].teacher = teacher.short_name;
            //console.log("2tues dukse",secondYearRoutine.tuesday[j])
          }
        }
      }
      if(teacher.wednesday[i].year == "2"){
        //console.log("wednes",teacher.wednesday[i]);
        for(let j=0; j<7; j++){
          if(teacher.wednesday[i].time == secondYearRoutine.wednesday[j].time){
            secondYearRoutine.wednesday[j].course = teacher.wednesday[j].course;
            secondYearRoutine.wednesday[j].teacher = teacher.short_name;
            //console.log("2wednes dukse",secondYearRoutine.wednesday[j])
          }
        }
      }
      if(teacher.thursday[i].year == "2"){
        for(let j=0; j<7; j++){
          if(teacher.thursday[i].time == secondYearRoutine.thursday[j].time){
            secondYearRoutine.thursday[j].course = teacher.thursday[j].course;
            secondYearRoutine.thursday[j].teacher = teacher.short_name;
            //console.log("2thurs dukse",secondYearRoutine.thursday[j])
          }
        }
      }
    }
  })


  // --------------third year routine--------------
  teachers_schedule.map(teacher => {
    // i, j indicates period number
    for(let i=0; i<7; i++){
      if(teacher.sunday[i].year == "3"){
        for(let j=0; j<7; j++){
          if(teacher.sunday[i].time == thirdYearRoutine.sunday[j].time){
            thirdYearRoutine.sunday[j].course = teacher.sunday[j].course;
            thirdYearRoutine.sunday[j].teacher = teacher.short_name;
            //console.log("3sun dukse",thirdYearRoutine.sunday[j])
          }
        }
      }
      if(teacher.monday[i].year == "3"){
        //console.log("mon",teacher.monday[i]);
        for(let j=0; j<7; j++){
          if(teacher.monday[i].time == thirdYearRoutine.monday[j].time){
            thirdYearRoutine.monday[j].course = teacher.monday[j].course;
            thirdYearRoutine.monday[j].teacher = teacher.short_name;
            //console.log("3mon dukse",thirdYearRoutine.monday[j])
          }
        }
    
      }
      if(teacher.tuesday[i].year == "3"){
        for(let j=0; j<7; j++){
          if(teacher.tuesday[i].time == thirdYearRoutine.tuesday[j].time){
            thirdYearRoutine.tuesday[j].course = teacher.tuesday[j].course;
            thirdYearRoutine.tuesday[j].teacher = teacher.short_name;
            //console.log("3tues dukse",thirdYearRoutine.tuesday[j])
          }
        }
      }
      if(teacher.wednesday[i].year == "3"){
        //console.log("wednes",teacher.wednesday[i]);
        for(let j=0; j<7; j++){
          if(teacher.wednesday[i].time == thirdYearRoutine.wednesday[j].time){
            thirdYearRoutine.wednesday[j].course = teacher.wednesday[j].course;
            thirdYearRoutine.wednesday[j].teacher = teacher.short_name;
            //console.log("3wednes dukse",thirdYearRoutine.wednesday[j])
          }
        }
      }
      if(teacher.thursday[i].year == "3"){
        for(let j=0; j<7; j++){
          if(teacher.thursday[i].time == thirdYearRoutine.thursday[j].time){
            thirdYearRoutine.thursday[j].course = teacher.thursday[j].course;
            thirdYearRoutine.thursday[j].teacher = teacher.short_name;
            //console.log("3thurs dukse",thirdYearRoutine.thursday[j])
          }
        }
      }
    }
  })


  // ---------------------fourth year routine----------------
  teachers_schedule.map(teacher => {
    // i, j indicates period number
    for(let i=0; i<7; i++){
      if(teacher.sunday[i].year == "4"){
        for(let j=0; j<7; j++){
          if(teacher.sunday[i].time == fourthYearRoutine.sunday[j].time){
            fourthYearRoutine.sunday[j].course = teacher.sunday[j].course;
            fourthYearRoutine.sunday[j].teacher = teacher.short_name;
            //console.log("4sun dukse",fourthYearRoutine.sunday[j])
          }
        }
      }
      if(teacher.monday[i].year == "4"){
        //console.log("mon",teacher.monday[i]);
        for(let j=0; j<7; j++){
          if(teacher.monday[i].time == fourthYearRoutine.monday[j].time){
            fourthYearRoutine.monday[j].course = teacher.monday[j].course;
            fourthYearRoutine.monday[j].teacher = teacher.short_name;
            console.log("4mon dukse",fourthYearRoutine.monday[j])
          }
        }
    
      }
      if(teacher.tuesday[i].year == "4"){
        for(let j=0; j<7; j++){
          if(teacher.tuesday[i].time == fourthYearRoutine.tuesday[j].time){
            fourthYearRoutine.tuesday[j].course = teacher.tuesday[j].course;
            fourthYearRoutine.tuesday[j].teacher = teacher.short_name;
            console.log("4tues dukse",fourthYearRoutine.tuesday[j])
          }
        }
      }
      if(teacher.wednesday[i].year == "4"){
        //console.log("wednes",teacher.wednesday[i]);
        for(let j=0; j<7; j++){
          if(teacher.wednesday[i].time == fourthYearRoutine.wednesday[j].time){
            fourthYearRoutine.wednesday[j].course = teacher.wednesday[j].course;
            fourthYearRoutine.wednesday[j].teacher = teacher.short_name;
            console.log("4wednes dukse",fourthYearRoutine.wednesday[j])
          }
        }
      }
      if(teacher.thursday[i].year == "4"){
        for(let j=0; j<7; j++){
          if(teacher.thursday[i].time == fourthYearRoutine.thursday[j].time){
            fourthYearRoutine.thursday[j].course = teacher.thursday[j].course;
            fourthYearRoutine.thursday[j].teacher = teacher.short_name;
            console.log("4thurs dukse",fourthYearRoutine.thursday[j])
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

  const routine = getYearRoutine(year);
  console.log(routine);
}

function showMasterRoutine(){
  const masterRoutine = document.getElementById("master-routine");
  const yearRoutine = document.getElementById("year-routine");

  masterRoutine.style.display = "block";
  yearRoutine.style.display = "none";
}



