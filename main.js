const teachers_url = "http://127.0.0.1:8000/teachers/";

fetch(teachers_url)
  .then((response) => response.json())
  .then((data) => {
    localStorage.setItem("datas", JSON.stringify(data));
  })
  .catch((error) => {
    console.log(error);
  });
const teachers_list = localStorage.getItem("datas");
const teachers = JSON.parse(teachers_list);


// ---------------------- MAIN DATASET -----------------------------------
const periods = ["8:00 AM - 8:50 AM", "8:50 AM - 9:40 AM", "9:40 AM - 10:30 AM", "10:40 AM - 11:30 AM", "11:30 AM - 12:20 PM", "12:20 PM - 1:10 PM",  "2:30 PM - 5:00 PM"];
var teachers_schedule =[];
teachers.map(teacher => {
    var teacher_schedule = {
        "id": "",
        "name": "", 
        "short_name": "",
        "dept": "",
        "sunday": [
          {"time": "8:00 AM - 8:50 AM","dept": "","year": "","course": ""},
          {"time": "8:50 AM - 9:40 AM","dept": "","year": "","course": ""},
          {"time": "9:40 AM - 10:30 AM","dept": "","year": "","course": ""},
          {"time": "10:40 AM - 11:30 AM","dept": "","year": "","course": ""},
          {"time": "11:30 AM - 12:20 PM","dept": "","year": "","course": ""},
          {"time": "12:20 PM - 01:10 PM","dept": "","year": "","course": ""},
          {"time": "02:30 PM - 05:00 PM","dept": "","year": "","course": ""},
        ],
        "monday": [
          {"time": "8:00 AM - 8:50 AM","dept": "","year": "","course": ""},
          {"time": "8:50 AM - 9:40 AM","dept": "","year": "","course": ""},
          {"time": "9:40 AM - 10:30 AM","dept": "","year": "","course": ""},
          {"time": "10:40 AM - 11:30 AM","dept": "","year": "","course": ""},
          {"time": "11:30 AM - 12:20 PM","dept": "","year": "","course": ""},
          {"time": "12:20 PM - 01:10 PM","dept": "","year": "","course": ""},
          {"time": "02:30 PM - 05:00 PM","dept": "","year": "","course": ""},
        ],
        "tuesday": [
          {"time": "8:00 AM - 8:50 AM","dept": "","year": "","course": ""},
          {"time": "8:50 AM - 9:40 AM","dept": "","year": "","course": ""},
          {"time": "9:40 AM - 10:30 AM","dept": "","year": "","course": ""},
          {"time": "10:40 AM - 11:30 AM","dept": "","year": "","course": ""},
          {"time": "11:30 AM - 12:20 PM","dept": "","year": "","course": ""},
          {"time": "12:20 PM - 01:10 PM","dept": "","year": "","course": ""},
          {"time": "02:30 PM - 05:00 PM","dept": "","year": "","course": ""},
        ],
        "wednesday": [
          {"time": "8:00 AM - 8:50 AM","dept": "","year": "","course": ""},
          {"time": "8:50 AM - 9:40 AM","dept": "","year": "","course": ""},
          {"time": "9:40 AM - 10:30 AM","dept": "","year": "","course": ""},
          {"time": "10:40 AM - 11:30 AM","dept": "","year": "","course": ""},
          {"time": "11:30 AM - 12:20 PM","dept": "","year": "","course": ""},
          {"time": "12:20 PM - 01:10 PM","dept": "","year": "","course": ""},
          {"time": "02:30 PM - 05:00 PM","dept": "","year": "","course": ""},
        ],
        "thursday": [
          {"time": "8:00 AM - 8:50 AM","dept": "","year": "","course": ""},
          {"time": "8:50 AM - 9:40 AM","dept": "","year": "","course": ""},
          {"time": "9:40 AM - 10:30 AM","dept": "","year": "","course": ""},
          {"time": "10:40 AM - 11:30 AM","dept": "","year": "","course": ""},
          {"time": "11:30 AM - 12:20 PM","dept": "","year": "","course": ""},
          {"time": "12:20 PM - 01:10 PM","dept": "","year": "","course": ""},
          {"time": "02:30 PM - 05:00 PM","dept": "","year": "","course": ""},
        ],
    };
    var period_mapping = {
        "first":0,
        "second":1,
        "third":2,
        "fourth":3,
        "fifth":4,
        "sixth":5,
        "lab":6,
    }
    teacher_schedule.id = teacher.id;
    teacher_schedule.name = teacher.name;
    teacher_schedule.short_name = teacher.short_name.toUpperCase();
    teacher_schedule.dept = teacher.dept.toUpperCase();

    for(let d in teacher){
      if(d == "id" || d== "name" || d=="short_name" || d=="dept"){
        continue;
      }
      [newDay,newPeriod,newItem]=(d.split('_'));
      extrordinaryIndex=period_mapping[newPeriod];

      if(newItem === "course"){
        if(teacher[d].toLowerCase() == "null" || teacher[d] == null){
          // teacher_schedule[newDay][extrordinaryIndex].course="";
          teacher_schedule[newDay][extrordinaryIndex].course=teacher[d];
        }else{
          teacher_schedule[newDay][extrordinaryIndex].course=teacher[d];
        }
      }
      if(newItem === "year"){
        if(teacher[d].toLowerCase() == "null" || teacher[d] == null){
          // teacher_schedule[newDay][extrordinaryIndex].year="";
          teacher_schedule[newDay][extrordinaryIndex].year=teacher[d];
        }else{
          teacher_schedule[newDay][extrordinaryIndex].year=teacher[d];
        }
      }
      if(newItem === "dept"){
        if(teacher[d].toLowerCase() == "null" || teacher[d] == null){
          // teacher_schedule[newDay][extrordinaryIndex].dept="";
          teacher_schedule[newDay][extrordinaryIndex].dept=teacher[d];
        }else{
          teacher_schedule[newDay][extrordinaryIndex].dept=teacher[d];          
        }
      }
    }
teachers_schedule.push(teacher_schedule);
// console.log(teachers_schedule)
})
// ------------------------------------------------------------------------------------------------------
function download(id) {
  const invoice = document.getElementById(id);

  html2pdf(invoice, {
    margin: 0.5,
    filename: 'Routine.pdf',
    image: { type: 'jpeg', quality: 1 },
    html2canvas: { scale: 3},
    jsPDF: { unit: 'in', format: 'a4', orientation: 'landscape' }
  })
}

// --------------------------- TIME ZONE ----------------------------------------------
function setTime(){
  const dateStr = new Date().toString();
  const dateArr = dateStr.split(" ");
  var currentDay = dateArr[0];
  const currentMonth = dateArr[1];
  const currentDate = dateArr[2];
  const currentYear = dateArr[3];
  var currentTime = dateArr[4];

  if(currentDay == "Sat"){
    currentDay = "saturday";
  }else if(currentDay == "Fri"){
    currentDay = "friday";
  }else if(currentDay =="Sun"){
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

  if(currentTime.split(":")[0] > 12){
    var hourInt = parseInt(currentTime.split(":")[0])-12;
    var mint = currentTime.split(":")[1];
    var hourStr = hourInt.toString();    
    currentTime = `${hourStr}:${mint} PM`;
  }else if(currentTime.split(":")[0] < 12){
    var hour = currentTime.split(":")[0];
    if(hour ==0) hour = '12';
    var mint = currentTime.split(":")[1];
    currentTime = `${hour}:${mint} AM`;
  }else{
    var hour = currentTime.split(":")[0];
    var mint = currentTime.split(":")[1];
    currentTime = `${hour}:${mint} PM`;
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
  let start_time = time12to24(periods[i].split("-")[0]);
  let end_time = time12to24(periods[i].split("-")[1]);
  let target_time = time12to24(currentTime);
  // let target_time = "11:01:00";

  // Convert time strings to Date objects with a common date
  const startDate = new Date(`2000-01-01T${start_time}`);
  const endDate = new Date(`2000-01-01T${end_time}`);
  const targetDate = new Date(`2000-01-01T${target_time}`);

  if (targetDate >= startDate && targetDate <= endDate) {
    activePeriodIndex=i;
  }
}
// ------------------------------------------------------------------------------------------------------ 

// ----------------------------------SHOW TEACHERS LIST------------------------------------
const listSection = document.getElementById("teachers-list");
const ol = document.createElement("ol");

teachers_schedule.map(teacher => {
  const li = document.createElement("li");
  li.innerHTML=`
    <button class='btn-teachersName' onclick='showTeacherRoutine(${teacher.id})'>${teacher.short_name.toUpperCase() + ' - ' + teacher.name.toUpperCase()}</button>
  `;
  ol.appendChild(li);
})

listSection.appendChild(ol);
// ----------------------------------------------------------------------------------------

// ------------------------------------------ SHOW MASTER ROUTINE ----------------------------------------------------------------------------
const week = [ "sunday", "monday", "tuesday", "wednesday", "thursday"];
let day = currentDay;
if(day=="saturday" || day =="friday") day = "sunday";
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
  const manageRoutine = document.getElementById("manage-routine");
  const teachersList = document.getElementById("teachers-list");
  yearRoutine.style.display = "none";
  teacherRoutine.style.display = "none";
  manageRoutine.style.display = "none";
  teachersList.style.display='block';
  masterRoutine.style.display = "block";

  const table = document.getElementById("master-table");
  table.innerHTML = `
    <tr>
        <th>Teachers Name</th>
        <th>8:00-<br>8:50</th>
        <th>8:50-<br>9:40</th>
        <th>9:40-<br>10:30</th>
        <th>10:40-<br>11:30</th>
        <th>11:30-<br>12:20</th>
        <th>12:20-<br>1:10</th>
        <th>2:30-<br>5:00</th>
    </tr>
  `;
  teachers_schedule.map((teacher) => {
    let tr = document.createElement("tr");
    let  lab1 = teacher[`${day}`][1].course;
    let  lab2 = teacher[`${day}`][4].course;
    if(lab1[lab1.length-1]%2 == 0){
      tr.innerHTML = `
        <th>${teacher.name}</th>
        <td colspan="3" class="lab">${lab1.toUpperCase()}</td>
        <td>${teacher[`${day}`][3].course.toLowerCase() == "null" ? "" : teacher[`${day}`][3].course.toUpperCase()}</td>
        <td>${teacher[`${day}`][4].course.toLowerCase() == "null" ? "" : teacher[`${day}`][4].course.toUpperCase()}</td>
        <td>${teacher[`${day}`][5].course.toLowerCase() == "null" ? "" : teacher[`${day}`][5].course.toUpperCase()}</td>
        <td>${teacher[`${day}`][6].course.toLowerCase() == "null" ? "" : teacher[`${day}`][6].course.toUpperCase()}</td>
      `;
      if(activePeriodIndex != null && (activePeriodIndex =="0" || activePeriodIndex =="1" || activePeriodIndex =="2")){
        if(tr.cells[1].innerText){
          if(teacher[day][activePeriodIndex].dept.toLowerCase() != "ece"){
            tr.cells[activePeriodIndex+1].className = "active-classes-non-dept";
            tr.cells[0].className = "active-classes-non-dept";
          }else{
            tr.cells[1].className = "active-classes";
            tr.cells[0].className = "active-classes";
          }
        }
      }else if(activePeriodIndex != null && activePeriodIndex == "6"){
        if(tr.cells[tr.cells.length-1].innerText){
          if(teacher[day][activePeriodIndex].dept.toLowerCase() != "ece"){
            tr.cells[activePeriodIndex+1].className = "active-classes-non-dept";
            tr.cells[0].className = "active-classes-non-dept";
          }else{
            tr.cells[tr.cells.length-1].className = "active-classes";
            tr.cells[0].className = "active-classes";
          }
        }
      }else if(activePeriodIndex != null){
        if(tr.cells[activePeriodIndex-1].innerText){
          if(teacher[day][activePeriodIndex].dept.toLowerCase() != "ece"){
            tr.cells[activePeriodIndex-1].className = "active-classes-non-dept";
            tr.cells[0].className = "active-classes-non-dept";
          }else{
            tr.cells[activePeriodIndex-1].className = "active-classes";
            tr.cells[0].className = "active-classes";
          }
        }
      }
      table.appendChild(tr);
    }
    else if(lab2[lab2.length-1]%2 == 0){
      tr.innerHTML = `
        <th>${teacher.name}</th>
        <td>${teacher[`${day}`][0].course.toLowerCase() == "null" ? "" : teacher[`${day}`][0].course.toUpperCase()}</td>
        <td>${teacher[`${day}`][1].course.toLowerCase() == "null" ? "" : teacher[`${day}`][1].course.toUpperCase()}</td>
        <td>${teacher[`${day}`][2].course.toLowerCase() == "null" ? "" : teacher[`${day}`][2].course.toUpperCase()}</td>
        <td colspan="3" class="lab">${lab2.toLowerCase == "null" ? "" : lab2.toUpperCase()}</td>
        <td>${teacher[`${day}`][6].course.toLowerCase() == "null" ? "" : teacher[`${day}`][6].course.toUpperCase()}</td>
      `;
      if(activePeriodIndex != null && (activePeriodIndex =="3" || activePeriodIndex =="4" || activePeriodIndex =="5")){
        if(tr.cells[4].innerText){
          if(teacher[day][activePeriodIndex].dept.toLowerCase() != "ece"){
            tr.cells[4].className = "active-classes-non-dept";
            tr.cells[0].className = "active-classes-non-dept";
          }else{
            tr.cells[4].className = "active-classes";
            tr.cells[0].className = "active-classes";
          }
        }
      }else if(activePeriodIndex != null && activePeriodIndex == "6"){
        if(tr.cells[tr.cells.length-1].innerText){
          if(teacher[day][activePeriodIndex].dept.toLowerCase() != "ece"){
            tr.cells[tr.cells.length-1].className = "active-classes-non-dept";
            tr.cells[0].className = "active-classes-non-dept";
          }else{
            tr.cells[tr.cells.length-1].className = "active-classes";
            tr.cells[0].className = "active-classes";
          }
        }
      }else if(activePeriodIndex != null){
        if(tr.cells[activePeriodIndex+1].innerText){
          if(teacher[day][activePeriodIndex].dept.toLowerCase() != "ece"){
            tr.cells[activePeriodIndex+1].className = "active-classes-non-dept";
            tr.cells[0].className = "active-classes-non-dept";
          }else{
            tr.cells[activePeriodIndex+1].className = "active-classes";
            tr.cells[0].className = "active-classes";
          }
        }
      }
      table.appendChild(tr);
    }
    else{
      tr.innerHTML = `
      <th>${teacher.name}</th>
      <td>${teacher[`${day}`][0].course.toLowerCase()=="null" ? "" : teacher[`${day}`][0].course.toUpperCase()}</td>
      <td>${teacher[`${day}`][1].course.toLowerCase()=="null" ? "" : teacher[`${day}`][1].course.toUpperCase()}</td>
      <td>${teacher[`${day}`][2].course.toLowerCase()=="null" ? "" : teacher[`${day}`][2].course.toUpperCase()}</td>
      <td>${teacher[`${day}`][3].course.toLowerCase()=="null" ? "" : teacher[`${day}`][3].course.toUpperCase()}</td>
      <td>${teacher[`${day}`][4].course.toLowerCase()=="null" ? "" : teacher[`${day}`][4].course.toUpperCase()}</td>
      <td>${teacher[`${day}`][5].course.toLowerCase()=="null" ? "" : teacher[`${day}`][5].course.toUpperCase()}</td>
      <td>${teacher[`${day}`][6].course.toLowerCase()=="null" ? "" : teacher[`${day}`][6].course.toUpperCase()}</td>
      `;
      if(activePeriodIndex != null){
        if(tr.cells[activePeriodIndex+1].innerText){
          if(teacher[day][activePeriodIndex].dept.toLowerCase() != "ece"){
            tr.cells[activePeriodIndex+1].className = "active-classes-non-dept";
            tr.cells[0].className = "active-classes-non-dept";
          }else{
            tr.cells[activePeriodIndex+1].className = "active-classes";
            tr.cells[0].className = "active-classes";
          }
        }
      }
      table.appendChild(tr);
    }
  });
}

function showMasterRoutine(){
  const masterRoutine = document.getElementById("master-routine");
  const yearRoutine = document.getElementById("year-routine");
  const teacherRoutine = document.getElementById("teacher-routine");
  const manageRoutine = document.getElementById("manage-routine");
  const teachersList = document.getElementById("teachers-list");
  teachersList.style.display='block';
  masterRoutine.style.display = "block";
  yearRoutine.style.display = "none";
  manageRoutine.style.display = "none";
  teacherRoutine.style.display = "none";
}
// ----------------------------------------------------------------------------------------------------------------

// ---------------------------------------YEAR ROUTINE-------------------------------------------------------------
function createYearRoutine(){  //template of year routine
  return{
    "sunday":[
      {"time": "8:00 AM - 8:50 AM","teacher": "","course": ""},
      {"time": "8:50 AM - 9:40 AM","teacher": "","course": ""},
      {"time": "9:40 AM - 10:30 AM","teacher": "","course": ""},
      {"time": "10:40 AM - 11:30 AM","teacher": "","course": ""},
      {"time": "11:30 AM - 12:20 PM","teacher": "","course": ""},
      {"time": "12:20 PM - 01:10 PM","teacher": "","course": ""},
      {"time": "02:30 PM - 05:00 PM","teacher": "","course": ""}
    ],
    "monday":[
      {"time": "8:00 AM - 8:50 AM","teacher": "","course": ""},
      {"time": "8:50 AM - 9:40 AM","teacher": "","course": ""},
      {"time": "9:40 AM - 10:30 AM","teacher": "","course": ""},
      {"time": "10:40 AM - 11:30 AM","teacher": "","course": ""},
      {"time": "11:30 AM - 12:20 PM","teacher": "","course": ""},
      {"time": "12:20 PM - 01:10 PM","teacher": "","course": ""},
      {"time": "02:30 PM - 05:00 PM","teacher": "","course": ""}
    ],
    "tuesday":[
      {"time": "8:00 AM - 8:50 AM","teacher": "","course": ""},
      {"time": "8:50 AM - 9:40 AM","teacher": "","course": ""},
      {"time": "9:40 AM - 10:30 AM","teacher": "","course": ""},
      {"time": "10:40 AM - 11:30 AM","teacher": "","course": ""},
      {"time": "11:30 AM - 12:20 PM","teacher": "","course": ""},
      {"time": "12:20 PM - 01:10 PM","teacher": "","course": ""},
      {"time": "02:30 PM - 05:00 PM","teacher": "","course": ""}
    ],
    "wednesday":[
      {"time": "8:00 AM - 8:50 AM","teacher": "","course": ""},
      {"time": "8:50 AM - 9:40 AM","teacher": "","course": ""},
      {"time": "9:40 AM - 10:30 AM","teacher": "","course": ""},
      {"time": "10:40 AM - 11:30 AM","teacher": "","course": ""},
      {"time": "11:30 AM - 12:20 PM","teacher": "","course": ""},
      {"time": "12:20 PM - 01:10 PM","teacher": "","course": ""},
      {"time": "02:30 PM - 05:00 PM","teacher": "","course": ""}
    ],
    "thursday":[
      {"time": "8:00 AM - 8:50 AM","teacher": "","course": ""},
      {"time": "8:50 AM - 9:40 AM","teacher": "","course": ""},
      {"time": "9:40 AM - 10:30 AM","teacher": "","course": ""},
      {"time": "10:40 AM - 11:30 AM","teacher": "","course": ""},
      {"time": "11:30 AM - 12:20 PM","teacher": "","course": ""},
      {"time": "12:20 PM - 01:10 PM","teacher": "","course": ""},
      {"time": "02:30 PM - 05:00 PM","teacher": "","course": ""}
    ]
  }
}

function getYearRoutine(y){
  var firstYearRoutine = createYearRoutine();
  var secondYearRoutine = createYearRoutine();
  var thirdYearRoutine = createYearRoutine();
  var fourthYearRoutine = createYearRoutine();

// ------------------first Year routine-------------------------
  teachers_schedule.map(teacher => {
    for(let i=0; i<7; i++){
      for(d in teacher){
        if(d == "id" || d== "name" || d=="short_name"|| d=="dept"){
          continue;
        }
        if(teacher[d][i].year == "1"){
          for(let j=0; j<7; j++){
            if(teacher[d][i].time == firstYearRoutine[d][j].time && teacher[d][j].dept.toLowerCase() == "ece"){
              if(firstYearRoutine[d][j].course && teacher[d][j].course!=firstYearRoutine[d][j].course){
                if(firstYearRoutine[d][j].course.split('+').length > 1 && firstYearRoutine[d][j].course.split('+')[0] != teacher[d][j].course){
                  firstYearRoutine[d][j].course = firstYearRoutine[d][j].course.split('+')[0] + '+' + teacher[d][j].course;    
                }
                else if(firstYearRoutine[d][j].course.split('+').length > 1 && firstYearRoutine[d][j].course.split('+')[1] != teacher[d][j].course){
                  firstYearRoutine[d][j].course = firstYearRoutine[d][j].course.split('+')[1] + '+' + teacher[d][j].course;
                }
                else{
                  firstYearRoutine[d][j].course = firstYearRoutine[d][j].course + '+' + teacher[d][j].course;
                }

              }else{
                firstYearRoutine[d][j].course = teacher[d][j].course;
              }
              
              if(firstYearRoutine[d][j].teacher){
                firstYearRoutine[d][j].teacher = firstYearRoutine[d][j].teacher + '/' + teacher.short_name;
              }else{
                firstYearRoutine[d][j].teacher = teacher.short_name;
              }
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
        if(d == "id" || d== "name" || d=="short_name" || d=="dept"){
          continue;
        }
        if(teacher[d][i].year == "2"){
          for(let j=0; j<7; j++){
            if(teacher[d][i].time == secondYearRoutine[d][j].time && teacher[d][j].dept.toLowerCase() == "ece"){
              if(secondYearRoutine[d][j].course && teacher[d][j].course!=secondYearRoutine[d][j].course){
                if(secondYearRoutine[d][j].course.split('+').length > 1 && secondYearRoutine[d][j].course.split('+')[0] != teacher[d][j].course){
                  secondYearRoutine[d][j].course = secondYearRoutine[d][j].course.split('+')[0] + '+' + teacher[d][j].course;    
                }
                else if(secondYearRoutine[d][j].course.split('+').length > 1 && secondYearRoutine[d][j].course.split('+')[1] != teacher[d][j].course){
                  secondYearRoutine[d][j].course = secondYearRoutine[d][j].course.split('+')[1] + '+' + teacher[d][j].course;
                }
                else{
                  secondYearRoutine[d][j].course = secondYearRoutine[d][j].course + '+' + teacher[d][j].course;
                }
            
              }else{
                secondYearRoutine[d][j].course = teacher[d][j].course;
              }

              if(secondYearRoutine[d][j].teacher){
                secondYearRoutine[d][j].teacher = secondYearRoutine[d][j].teacher + '/' + teacher.short_name;
              }else{
                secondYearRoutine[d][j].teacher = teacher.short_name;
              }
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
        if(d == "id" || d== "name" || d=="short_name" || d=="dept"){
          continue;
        }
        if(teacher[d][i].year == "3"){
          for(let j=0; j<7; j++){
            if(teacher[d][i].time == thirdYearRoutine[d][j].time && teacher[d][j].dept.toLowerCase() == "ece"){
              if(thirdYearRoutine[d][j].course && teacher[d][j].course!=thirdYearRoutine[d][j].course){
                if(thirdYearRoutine[d][j].course.split('+').length > 1 && thirdYearRoutine[d][j].course.split('+')[0] != teacher[d][j].course){
                  thirdYearRoutine[d][j].course = thirdYearRoutine[d][j].course.split('+')[0] + '+' + teacher[d][j].course;    
                }
                else if(thirdYearRoutine[d][j].course.split('+').length > 1 && thirdYearRoutine[d][j].course.split('+')[1] != teacher[d][j].course){
                  thirdYearRoutine[d][j].course = thirdYearRoutine[d][j].course.split('+')[1] + '+' + teacher[d][j].course;
                }
                else{
                  thirdYearRoutine[d][j].course = thirdYearRoutine[d][j].course + '+' + teacher[d][j].course;
                }
            
              }else{
                thirdYearRoutine[d][j].course = teacher[d][j].course;
              }

              if(thirdYearRoutine[d][j].teacher){
                thirdYearRoutine[d][j].teacher = thirdYearRoutine[d][j].teacher + '/' + teacher.short_name;
              }else{                
                thirdYearRoutine[d][j].teacher = teacher.short_name;
              }
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
        if(d == "id" || d== "name" || d=="short_name" || d=="dept"){
          continue;
        }
        if(teacher[d][i].year == "4"){
          for(let j=0; j<7; j++){
            if(teacher[d][i].time == fourthYearRoutine[d][j].time  && teacher[d][j].dept.toLowerCase() == "ece"){
              if(fourthYearRoutine[d][j].course && teacher[d][j].course!=fourthYearRoutine[d][j].course){
                if(fourthYearRoutine[d][j].course.split('+').length > 1 && fourthYearRoutine[d][j].course.split('+')[0] != teacher[d][j].course){
                  fourthYearRoutine[d][j].course = fourthYearRoutine[d][j].course.split('+')[0] + '+' + teacher[d][j].course;    
                }
                else if(fourthYearRoutine[d][j].course.split('+').length > 1 && fourthYearRoutine[d][j].course.split('+')[1] != teacher[d][j].course){
                  fourthYearRoutine[d][j].course = fourthYearRoutine[d][j].course.split('+')[1] + '+' + teacher[d][j].course;
                }
                else{
                  fourthYearRoutine[d][j].course = fourthYearRoutine[d][j].course + '+' + teacher[d][j].course;
                }

              }else{
                fourthYearRoutine[d][j].course = teacher[d][j].course;
              }

              if(fourthYearRoutine[d][j].teacher){
                fourthYearRoutine[d][j].teacher= fourthYearRoutine[d][j].teacher + '/' + teacher.short_name;
              }else{
                fourthYearRoutine[d][j].teacher = teacher.short_name;
              }
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
  const manageRoutine = document.getElementById("manage-routine");
  const teachersList = document.getElementById("teachers-list");
  teachersList.style.display='block';
  masterRoutine.style.display = "none";
  teacherRoutine.style.display = "none";
  manageRoutine.style.display = "none";
  yearRoutine.style.display = "block";

  const table = document.getElementById("year-table");
  table.innerHTML = `
    <caption class="table-title">Year: ${year}</caption>
    <tr>
        <th>Day | Time</th>
        <th>8:00-<br>8:50</th>
        <th>8:50-<br>9:40</th>
        <th>9:40-<br>10:30</th>
        <th>10:40-<br>11:30</th>
        <th>11:30-<br>12:20</th>
        <th>12:20-<br>1:10</th>
        <th>2:30-<br>5:00</th>
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
  console.log(routine)
  for(day in routine){
    const tr = document.createElement("tr");
    let  lab1 = routine[day][1].course;
    let  lab2 = routine[day][4].course;
    if(lab1[lab1.length-1]%2 == 0){
      tr.innerHTML=`
        <th>${day}</th>
        <td class="lab" colspan="3">${routine[day][0].teacher} <br> ${lab1.toUpperCase()}</td>
        <td>${routine[day][3].teacher} <br> ${routine[day][3].course.toUpperCase()}</td>
        <td>${routine[day][4].teacher} <br> ${routine[day][4].course.toUpperCase()}</td>
        <td>${routine[day][5].teacher} <br> ${routine[day][5].course.toUpperCase()}</td>
        <td>${routine[day][6].teacher} <br> ${routine[day][6].course.toUpperCase()}</td>
      `;
      table.appendChild(tr);
    }
    else if(lab2[lab2.length-1]%2 == 0){
      tr.innerHTML=`
        <th>${day}</th>
        <td>${routine[day][0].teacher} <br> ${routine[day][0].course.toUpperCase()}</td>
        <td>${routine[day][1].teacher} <br> ${routine[day][1].course.toUpperCase()}</td>
        <td>${routine[day][2].teacher} <br> ${routine[day][2].course.toUpperCase()}</td>
        <td class="lab" colspan="3">${routine[day][3].teacher} <br> ${lab2.toUpperCase()}</td>
        <td>${routine[day][6].teacher} <br> ${routine[day][6].course.toUpperCase()}</td>
      `;
      table.appendChild(tr);
    }
    else{
      tr.innerHTML=`
        <th>${day}</th>
        <td>${routine[day][0].teacher} <br> ${routine[day][0].course.toUpperCase()}</td>
        <td>${routine[day][1].teacher} <br> ${routine[day][1].course.toUpperCase()}</td>
        <td>${routine[day][2].teacher} <br> ${routine[day][2].course.toUpperCase()}</td>
        <td>${routine[day][3].teacher} <br> ${routine[day][3].course.toUpperCase()}</td>
        <td>${routine[day][4].teacher} <br> ${routine[day][4].course.toUpperCase()}</td>
        <td>${routine[day][5].teacher} <br> ${routine[day][5].course.toUpperCase()}</td>
        <td>${routine[day][6].teacher} <br> ${routine[day][6].course.toUpperCase()}</td>
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
  const teachersList = document.getElementById("teachers-list");
  teachersList.style.display='block';
  masterRoutine.style.display = "none";
  yearRoutine.style.display = "none";
  teacherRoutine.style.display = "block";

  teachers_schedule.map(teacher => {
    if(teacher.id == id){
      const table = document.getElementById("teacher-table");
      table.innerHTML = `
        <caption class="table-title">${teacher.name.toUpperCase()}</caption>
        <tr>
            <th>Day | Time</th>
            <th>8:00-<br>8:50</th>
            <th>8:50-<br>9:40</th>
            <th>9:40-<br>10:30</th>
            <th>10:40-<br>11:30</th>
            <th>11:30-<br>12:20</th>
            <th>12:20-<br>1:10</th>
            <th>2:30-<br>5:00</th>
        </tr>
      `;
      
      for(d in teacher){
        if(d == "id" || d== "name" || d=="short_name" || d=="dept"){
          continue;
        }
        let lab1 = teacher[d][1].course;
        let lab2 = teacher[d][4].course;
        if(lab1[lab1.length-1]%2 == 0){
          let tr = document.createElement("tr");
          tr.innerHTML=`
          <th>${d}</th>
          <td class="lab" colspan="3">${teacher[d][0].course.toLowerCase()=="null" ? "" : teacher[d][0].course.toUpperCase() }</td>
          <td>${teacher[d][3].course.toLowerCase() == "null" ? "" : teacher[d][3].course.toUpperCase()}</td>
          <td>${teacher[d][4].course.toLowerCase() == "null" ? "" : teacher[d][4].course.toUpperCase()}</td>
          <td>${teacher[d][5].course.toLowerCase() == "null" ? "" : teacher[d][5].course.toUpperCase()}</td>
          <td>${teacher[d][6].course.toLowerCase() == "null" ? "" : teacher[d][6].course.toUpperCase()}</td>
          `;
          table.appendChild(tr)
        }
        else if(lab2[lab2.length-1]%2 == 0){
          let tr = document.createElement("tr");
          tr.innerHTML=`
          <th>${d}</th>
          <td>${teacher[d][0].course.toLowerCase() == "null" ? "" : teacher[d][0].course.toUpperCase()}</td>
          <td>${teacher[d][1].course.toLowerCase() == "null" ? "" : teacher[d][1].course.toUpperCase()}</td>
          <td>${teacher[d][2].course.toLowerCase() == "null" ? "" : teacher[d][2].course.toUpperCase()}</td>
          <td class="lab" colspan="3">${teacher[d][3].course.toLowerCase()=="null" ? "" : teacher[d][3].course.toUpperCase()}</td>
          <td>${teacher[d][6].course.toLowerCase()=="null" ? "" : teacher[d][6].course.toUpperCase()}</td>
          `;
          table.appendChild(tr)
        }
        else{
          let tr = document.createElement("tr");
          tr.innerHTML=`
          <th>${d}</th>
          <td>${teacher[d][0].course.toLowerCase()=="null" ? "" : teacher[d][0].course.toUpperCase()}</td>
          <td>${teacher[d][1].course.toLowerCase()=="null" ? "" : teacher[d][1].course.toUpperCase()}</td>
          <td>${teacher[d][2].course.toLowerCase()=="null" ? "" : teacher[d][2].course.toUpperCase()}</td>
          <td>${teacher[d][3].course.toLowerCase()=="null" ? "" : teacher[d][3].course.toUpperCase()}</td>
          <td>${teacher[d][4].course.toLowerCase()=="null" ? "" : teacher[d][4].course.toUpperCase()}</td>
          <td>${teacher[d][5].course.toLowerCase()=="null" ? "" : teacher[d][5].course.toUpperCase()}</td>
          <td>${teacher[d][6].course.toLowerCase()=="null" ? "" : teacher[d][6].course.toUpperCase()}</td>
          `;
          table.appendChild(tr)
        }        
      }
    }
  })
}
// --------------------------------------------------------------------------------------------------------

trigger(day);