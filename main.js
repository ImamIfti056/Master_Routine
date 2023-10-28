const teachers_url = "http://127.0.0.1:8000/teachers/";
const weeks_url = "http://127.0.0.1:8000/weeks/";

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

const teachers_list = localStorage.getItem("datas");
const weeks_list = localStorage.getItem("weeks");

const teachers = JSON.parse(teachers_list);
const weeks = JSON.parse(weeks_list);

 //console.log("teachers: ",teachers)
 //console.log("weeks: ",weeks);

let days = ["sunday", "monday", "tuesday", "wednesday", "thursday"];

var teachers_schedule =[];

teachers.map(teacher => {
    console.log("teacher", teacher);
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

    teacher.sunday.map(sch => {
        //console.log(sch);
        schedule = {
            "year": "",
            "course": "",
            "start_time": "",
            "end_time": ""
        }
        weeks.map(week => {
            if(week.id == sch){
                //console.log(week);
                schedule.year = week.year;
                schedule.course = week.course;
                schedule.start_time = week.starttime;
                schedule.end_time = week.endtime;
                teacher_schedule.sunday.push(schedule);
            }
        })
        //console.log("sunday sch: ",teacher_schedule.sunday)
        
    })

    teacher.monday.map(sch => {
        //console.log(sch);
        schedule = {
            "year": "",
            "course": "",
            "start_time": "",
            "end_time": ""
        }
        weeks.map(week => {
            //console.log(day);
            if(week.id == sch){
                //console.log(week);
                schedule.year = week.year;
                schedule.course = week.course;
                schedule.start_time = week.starttime;
                schedule.end_time = week.endtime;
                teacher_schedule.monday.push(schedule);
            }
        })
        //console.log("monday sch", teacher_schedule.monday)     
    })
    teacher.tuesday.map(sch => {
        schedule = {
            "year": "",
            "course": "",
            "start_time": "",
            "end_time": ""
        }
        weeks.map(week => {
            if(week.id == sch){
                //console.log(week);
                schedule.year = week.year;
                schedule.course = week.course;
                schedule.start_time = week.starttime;
                schedule.end_time = week.endtime;
                teacher_schedule.tuesday.push(schedule);
            }
        })  
        //  console.log(teacher_schedule.tuesday)      
    })
    teacher.wednesday.map(sch => {
        schedule = {
            "year": "",
            "course": "",
            "start_time": "",
            "end_time": ""
        }
        weeks.map(week => {
            if(week.id == sch){
                //console.log(sch);
                schedule.year = week.year;
                schedule.course = week.course;
                schedule.start_time = week.starttime;
                schedule.end_time = week.endtime;
                teacher_schedule.wednesday.push(schedule);
                //console.log(teacher_schedule.wednesday)       
                schedule = {
                    "year": "",
                    "course": "",
                    "start_time": "",
                    "end_time": ""
                }
            }
        }) 
        //console.log(teacher_schedule.wednesday)       
    })
    teacher.thursday.map(sch => {
        schedule = {
            "year": "",
            "course": "",
            "start_time": "",
            "end_time": ""
        }
        weeks.map(week => {
            //console.log(day);
            if(week.id == sch){
                //console.log(week);
                schedule.year = week.year;
                schedule.course = week.course;
                schedule.start_time = week.starttime;
                schedule.end_time = week.endtime;
                teacher_schedule.thursday.push(schedule);
            }
        })        
    })



    teachers_schedule.push(teacher_schedule);
    //console.log(teachers_schedule)
})

// var teachers_schedule = [];

// for (let i = 0; i < teachers.length; i++) {
//   let teacher_schedule = {};

//   teacher_schedule.name = teachers[i].name;

//   teacher_schedule.schedule = [{}, {}, {}, {}, {}];

//   let api_schedule_length = teachers[i].schedule.length;

//   for (let j = 0; j < api_schedule_length; j++) {
//     for (let k = 0; k < weeks.length; k++) {
//       // for third year only for now, later years will be added later
//       if (weeks[k].id == teachers[i].schedule[j] && weeks[k].year == 3) {
//         if (weeks[k].weekname == "Sunday") {
//           teacher_schedule.weeks_all[0] = weeks[k];
//         } else if (weeks[k].weekname == "Monday") {
//           teacher_schedule.weeks_all[1] = weeks[k];
//         } else if (weeks[k].weekname == "Tuesday") {
//           teacher_schedule.weeks_all[2] = weeks[k];
//         } else if (weeks[k].weekname == "Wednesday") {
//           teacher_schedule.weeks_all[3] = weeks[k];
//         } else if (weeks[k].weekname == "Thursday") {
//           teacher_schedule.weeks_all[4] = weeks[k];
//         }
//       }
//     }
//   }

//   teachers_schedule.push(teacher_schedule);
// }

//console.log(teachers_schedule);

// const week = ["sunday", "monday", "tuesday", "wednesday", "thursday"];
// let dayNo = 0;
// let day = week[dayNo];
// const dayLabel = document.getElementById("dayLabel");
// dayLabel.innerText = day;

// function lt() {
//   if (dayNo > 0) {
//     dayNo = dayNo - 1;
//     day = week[dayNo];
//     dayLabel.innerText = day;
//     trigger(day);
//   }
// }
// function gt() {
//   if (dayNo < 4) {
//     dayNo = dayNo + 1;
//     day = week[dayNo];
//     dayLabel.innerText = day;
//     trigger(day);
//   }
// }

// function trigger(day) {
//   const table = document.getElementById("table");
//   table.innerHTML = `
//         <tr>
//             <th>Teachers Name</th>
//             <th>8:00-8:50</th>
//             <th>8:50-9:40</th>
//             <th>9:40-10:30</th>
//             <th>10:40-11:30</th>
//             <th>11:30-12:20</th>
//             <th>12:20-1:10</th>
//             <th>2:30-5:00</th>
//         </tr>
//     `;
//   teachers.map((teacher) => {
//     let tr = document.createElement("tr");
//     tr.innerHTML = `
//             <th>${teacher["name"]}</th>
//             <td>${teacher["schedule"][day][0]["course"]}</td>
//             <td>${teacher["schedule"][day][1]["course"]}</td>
//             <td>${teacher["schedule"][day][2]["course"]}</td>
//             <td>${teacher["schedule"][day][3]["course"]}</td>
//             <td>${teacher["schedule"][day][4]["course"]}</td>
//             <td>${teacher["schedule"][day][5]["course"]}</td>
//             <td>${teacher["schedule"][day][6]["course"]}</td>
//         `;
//     table.appendChild(tr);
//   });
// }
// trigger(day);

// function getYearRoutine(year){
//     let year_routine=[
//         {
//         "time": "",
//         "teacher": "",
//         "course": ""
//         },
//         {
//         "time": "",
//         "teacher": "",
//         "course": ""
//         },
//         {
//         "time": "",
//         "teacher": "",
//         "course": ""
//         },
//         {
//         "time": "",
//         "teacher": "",
//         "course": ""
//         },
//         {
//         "time": "",
//         "teacher": "",
//         "course": ""
//         }
// ];
//     teachers.map(teacher =>{
//         console.log(teacher.schedule.sunday)
//     })
// }





