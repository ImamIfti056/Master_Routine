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