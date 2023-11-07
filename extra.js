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

//   ----------------------------------------------DATASET--------------------------------------
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

// --------------------------------------------------------