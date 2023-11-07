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

// ---------------------- MAIN DATASET -----------------------------------
const periods = ["8:00 AM - 8:50 AM", "8:50 AM - 9:40 AM", "9:40 AM - 10:30 AM", "10:40 AM - 11:30 AM", "11:30 AM - 12:20 PM", "12:20 PM - 1:10 PM",  "2:30 PM - 5:00 PM"];
var teachers_schedule =[];

teachers.map(teacher => {
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
    var schedule = {
      "time": "",
      "year": "",
      "course": ""
    }

    for(d in teacher){
      if(d == "id" || d== "name" || d=="short_name"){
        continue;
      }
      teacher[d].map(day_id => {      
        weeks.map(week => {
          if(week.id == day_id){
            var period = [week.first[0], week.second[0], week.third[0], week.fourth[0], week.fifth[0], week.sixth[0], week.lab[0]];

            for(let k=0; k<periods.length; k++){
              for(let i=0; i<details.length; i++){
                schedule.time = periods[k];
                if(details[i].id == period[k]){
                  if(typeof(details[i].course) == "object"){
                    schedule.year = "";
                    schedule.course = "";
                    teacher_schedule[d].push(schedule);
                    schedule = {
                      "time": "",
                      "year": "",
                      "course": ""
                    }
                    break;  
                  }
                  schedule.year = details[i].year;
                  schedule.course = details[i].course;
                  teacher_schedule[d].push(schedule);
                  schedule = {
                    "time": "",
                    "year": "",
                    "course": ""
                  }
                  break;
                }
              }
            }
          } 
        })
        
      })
    }

teachers_schedule.push(teacher_schedule);
})
// ------------------------------------------------------------------------------------------------------

// --------------------------- TIME ZONE ----------------------------------------------
function setTime(){
  const dateStr = new Date().toString();
  const dateArr = dateStr.split(" ");
  var currentDay = dateArr[0];
  const currentMonth = dateArr[1];
  const currentDate = dateArr[2];
  const currentYear = dateArr[3];
  var currentTime = dateArr[4];


  if(currentDay == "Sat" || currentDay =="Sun" || currentDay == "Fri"){
    currentDay = "sunday";
  }else if(currentDay == "Mon"){
    currentDay = "monday";
  }else if(currentDay == "Tue"){
    currentDay = "tuesday";
  }else if(currentDay == "Wed"){
    currentDay = "wednesday";
  }else if(currentDay == "Thu"){
    currentDay = "thursday";
  }

  if(currentTime.split(":")[0] >= 12){
    var hourInt = parseInt(currentTime.split(":")[0])-12;
    var mint = currentTime.split(":")[1];
    var hourStr = hourInt.toString();

    
    currentTime = `${hourStr}:${mint} PM`;
  }else{
    var hour = currentTime.split(":")[0];
    var mint = currentTime.split(":")[1];
    currentTime = `${hour}:${mint} AM`;
  }

  document.getElementById("timezone").innerHTML = `
  ${currentTime} <br>
  ${currentDay.toUpperCase()}, ${currentDate} ${currentMonth}, ${currentYear}
  `;

  return{
    currentDay, currentTime
  }
}
setTime();
setInterval(setTime, 60000);
var currentTime = setTime().currentTime;
var currentDay = setTime().currentDay;
// --------------------------------------------------------------------------------------

// ------------------------------------------ CURRENT CLASSES-----------------------------------------------
const time12to24 = (time12) => new Date(`2023-07-27 ${time12}`).toLocaleTimeString('en-US', { hour12: false });
var activePeriodIndex = null;

for(let i=0; i<periods.length; i++){
  start_time = time12to24(periods[i].split("-")[0]);
  end_time = time12to24(periods[i].split("-")[1]);
  target_time = time12to24(currentTime);
  // target_time = "10:01:00";

  // Convert time strings to Date objects with a common date
  const startDate = new Date(`2000-01-01T${start_time}`);
  const endDate = new Date(`2000-01-01T${end_time}`);
  const targetDate = new Date(`2000-01-01T${target_time}`);

  if (targetDate >= startDate && targetDate <= endDate) {
    activePeriodIndex=i;
  }
}
// -----------------------------------------------------------------------------------------------------------

// ----------------------------------SHOW TEACHERS LIST------------------------------------
const listSection = document.getElementById("teachers-list");
const ol = document.createElement("ol");

teachers_schedule.map(teacher => {
  const li = document.createElement("li");
  li.innerHTML=`
    <button class='btn-teachersName' onclick='showTeacherRoutine(${teacher.id})'>${teacher.short_name + ' - ' + teacher.name}</button>
  `;
  ol.appendChild(li);
})

listSection.appendChild(ol);
// ----------------------------------------------------------------------------------------

// ------------------------------------------ SHOW MASTER ROUTINE ----------------------------------------------------------------------------
const week = ["sunday", "monday", "tuesday", "wednesday", "thursday"];
let day = currentDay;
let dayNo = week.indexOf(currentDay);
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
  const masterRoutine = document.getElementById("master-routine");
  const yearRoutine = document.getElementById("year-routine");
  const teacherRoutine = document.getElementById("teacher-routine");

  yearRoutine.style.display = "none";
  teacherRoutine.style.display = "none";
  masterRoutine.style.display = "block";

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
    let  lab1 = teacher[`${day}`][1].course;
    let  lab2 = teacher[`${day}`][4].course;
    if(lab1[lab1.length-1]%2 == 0){
      tr.innerHTML = `
        <th>${teacher.name}</th>
        <td colspan="3" class="lab">${lab1}</td>
        <td>${teacher[`${day}`][3].course}</td>
        <td>${teacher[`${day}`][4].course}</td>
        <td>${teacher[`${day}`][5].course}</td>
        <td>${teacher[`${day}`][6].course}</td>
      `;
      if(activePeriodIndex != null && (activePeriodIndex =="0" || activePeriodIndex =="1" || activePeriodIndex =="2")){
        tr.cells[1].className = "active-classes";
      }else if(activePeriodIndex != null && activePeriodIndex == "6"){
        tr.cells[tr.cells.length-1].className = "active-classes";
      }else if(activePeriodIndex != null){
        tr.cells[activePeriodIndex+1].className = "active-classes";
      }
      table.appendChild(tr);
    }
    else if(lab2[lab2.length-1]%2 == 0){
      tr.innerHTML = `
        <th>${teacher.name}</th>
        <td>${teacher[`${day}`][0].course}</td>
        <td>${teacher[`${day}`][1].course}</td>
        <td>${teacher[`${day}`][2].course}</td>
        <td colspan="3" class="lab">${lab2}</td>
        <td>${teacher[`${day}`][6].course}</td>
      `;
      if(activePeriodIndex != null && (activePeriodIndex =="3" || activePeriodIndex =="4" || activePeriodIndex =="5")){
        tr.cells[4].className = "active-classes";
      }else if(activePeriodIndex != null && activePeriodIndex == "6"){
        tr.cells[tr.cells.length-1].className = "active-classes";
      }else if(activePeriodIndex != null){
        tr.cells[activePeriodIndex+1].className = "active-classes";
      }
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
      if(activePeriodIndex != null){
        tr.cells[activePeriodIndex+1].className = "active-classes";
      }
      table.appendChild(tr);
    }
  });
}

function showMasterRoutine(){
  const masterRoutine = document.getElementById("master-routine");
  const yearRoutine = document.getElementById("year-routine");
  const teacherRoutine = document.getElementById("teacher-routine");

  masterRoutine.style.display = "block";
  yearRoutine.style.display = "none";
  teacherRoutine.style.display = "none";
}
// ----------------------------------------------------------------------------------------------------------------

// ---------------------------------------YEAR ROUTINE-------------------------------------------------------------
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
  const teacherRoutine = document.getElementById("teacher-routine");

  masterRoutine.style.display = "none";
  teacherRoutine.style.display = "none";
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
    const tr = document.createElement("tr");
    let  lab1 = routine[day][1].course;
    let  lab2 = routine[day][4].course;
    if(lab1[lab1.length-1]%2 == 0){
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
//------------------------------------------------------------------------------------------------------------------- 

// -------------------------------------------- SHOW TEACHERS ROUTINE--------------------------------------------
function showTeacherRoutine(id){
  const masterRoutine = document.getElementById("master-routine");
  const yearRoutine = document.getElementById("year-routine");
  const teacherRoutine = document.getElementById("teacher-routine");

  masterRoutine.style.display = "none";
  yearRoutine.style.display = "none";
  teacherRoutine.style.display = "block";

  teachers_schedule.map(teacher => {
    if(teacher.id == id){
      const table = document.getElementById("teacher-table");
      table.innerHTML = `
        <caption class="table-title">${teacher.name}</caption>
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
      
      for(d in teacher){
        if(d == "id" || d== "name" || d=="short_name"){
          continue;
        }
        let lab1 = teacher[d][1].course;
        let lab2 = teacher[d][4].course;

        if(lab1[lab1.length-1]%2 == 0){
          let tr = document.createElement("tr");
          tr.innerHTML=`
          <th>${d}</th>
          <td class="lab" colspan="3">${teacher[d][0].course}</td>
          <td>${teacher[d][3].course}</td>
          <td>${teacher[d][4].course}</td>
          <td>${teacher[d][5].course}</td>
          <td>${teacher[d][6].course}</td>
          `;

          table.appendChild(tr)
        }
        else if(lab2[lab2.length-1]%2 == 0){
          let tr = document.createElement("tr");
          tr.innerHTML=`
          <th>${d}</th>
          <td>${teacher[d][0].course}</td>
          <td>${teacher[d][1].course}</td>
          <td>${teacher[d][2].course}</td>
          <td class="lab" colspan="3">${teacher[d][3].course}</td>
          <td>${teacher[d][6].course}</td>
          `;

          table.appendChild(tr)
        }
        else{
          let tr = document.createElement("tr");
          tr.innerHTML=`
          <th>${d}</th>
          <td>${teacher[d][0].course}</td>
          <td>${teacher[d][1].course}</td>
          <td>${teacher[d][2].course}</td>
          <td>${teacher[d][3].course}</td>
          <td>${teacher[d][4].course}</td>
          <td>${teacher[d][5].course}</td>
          <td>${teacher[d][6].course}</td>
          `;

          table.appendChild(tr)
        }
      }

      

    }
  })
}
// --------------------------------------------------------------------------------------------------------

trigger(day);