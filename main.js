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

let days = ["sunday", "monday", "tuesday", "wednesday", "thursday"];

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
      //console.log(day_id);        
      weeks.map(week => {
        if(week.id == day_id){
          console.log(week);
          var first = week.first;
          var second = week.second;
          var third = week.third;
          var fourth = week.fourth;
          var fifth = week.fifth;
          var sixth = week.sixth;
          var lab = week.lab;
          
          first.map(sch => {
            for(let i=0; i<details.length; i++){
              if(details[i].id == sch){
                schedule.time = "8:00 AM - 8:50 AM";
                schedule.year = details[i].year;
                schedule.course = details[i].course;
                teacher_schedule.sunday.push(schedule);
                schedule = {
                  "time": "",
                  "year": "",
                  "course": ""
                }
                break;
              }else{
                schedule.time = "8:00 AM - 8:50 AM";
                schedule.year = "";
                schedule.course = "";
                schedule = {
                  "time": "",
                  "year": "",
                  "course": ""
                }
              }              
            }
          })
          //console.log(teacher_schedule.sunday)

          second.map(sch => {
            for(let i=0; i<details.length; i++){
              if(details[i].id == sch){
                schedule.time = "8:50 AM - 9:40 AM";
                schedule.year = details[i].year;
                schedule.course = details[i].course;
                teacher_schedule.sunday.push(schedule);
                //console.log(teacher_schedule.sunday);
                schedule = {
                  "time": "",
                  "year": "",
                  "course": ""
                }
                break;
              }else{
                schedule.time = "8:50 AM - 9:40 AM";
                schedule.year = "";
                schedule.course = "";
                schedule = {
                  "time": "",
                  "year": "",
                  "course": ""
                }
              }
            }
          })

          third.map(sch => {
            for(let i=0; i<details.length; i++){
              if(details[i].id == sch){
                schedule.time = "9:40 AM - 10:30 AM";
                schedule.year = details[i].year;
                schedule.course = details[i].course;
                teacher_schedule.sunday.push(schedule);
                //console.log(teacher_schedule.sunday);
                schedule = {
                  "time": "",
                  "year": "",
                  "course": ""
                }
                break;
              }else{
                schedule.time = "9:40 AM - 10:30 AM";
                schedule.year = "";
                schedule.course = "";
                schedule = {
                  "time": "",
                  "year": "",
                  "course": ""
                }
              }
            }
          })

          
          console.log(teacher_schedule)

        } 
      })
      
    })
    

teachers_schedule.push(teacher_schedule);
console.log(teachers_schedule)
})


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
      //console.log(teacher[`${day}`])
      tr.innerHTML = `
              <th>${teacher.name}</th>
          `;
      table.appendChild(tr);
    });
  }
  trigger(day);






































































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





