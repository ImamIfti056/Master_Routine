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