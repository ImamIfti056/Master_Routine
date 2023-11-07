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