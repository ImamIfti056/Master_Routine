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
          //console.log("4mon dukse",fourthYearRoutine.monday[j])
        }
      }
  
    }
    if(teacher.tuesday[i].year == "4"){
      for(let j=0; j<7; j++){
        if(teacher.tuesday[i].time == fourthYearRoutine.tuesday[j].time){
          fourthYearRoutine.tuesday[j].course = teacher.tuesday[j].course;
          fourthYearRoutine.tuesday[j].teacher = teacher.short_name;
          //console.log("4tues dukse",fourthYearRoutine.tuesday[j])
        }
      }
    }
    if(teacher.wednesday[i].year == "4"){
      //console.log("wednes",teacher.wednesday[i]);
      for(let j=0; j<7; j++){
        if(teacher.wednesday[i].time == fourthYearRoutine.wednesday[j].time){
          fourthYearRoutine.wednesday[j].course = teacher.wednesday[j].course;
          fourthYearRoutine.wednesday[j].teacher = teacher.short_name;
          //console.log("4wednes dukse",fourthYearRoutine.wednesday[j])
        }
      }
    }
    if(teacher.thursday[i].year == "4"){
      for(let j=0; j<7; j++){
        if(teacher.thursday[i].time == fourthYearRoutine.thursday[j].time){
          fourthYearRoutine.thursday[j].course = teacher.thursday[j].course;
          fourthYearRoutine.thursday[j].teacher = teacher.short_name;
          //console.log("4thurs dukse",fourthYearRoutine.thursday[j])
        }
      }
    }
  }
})