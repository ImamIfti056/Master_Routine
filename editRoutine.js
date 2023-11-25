const editRoutine = document.getElementById('editRoutineForm');
const selectTeacher = document.getElementById('selectTeacher');

teachers_schedule.map(t =>{
    const option = document.createElement('option');
    option.innerHTML = `${t.name}`;
    selectTeacher.appendChild(option)
})
// sunday
let s_f_y = document.getElementById('s-f-y');
let s_f_c = document.getElementById('s-f-c');
let s_f_d = document.getElementById('s-f-d');

let s_s_y = document.getElementById('s-s-y');
let s_s_c = document.getElementById('s-s-c');
let s_s_d = document.getElementById('s-s-d');

let s_t_y = document.getElementById('s-t-y');
let s_t_c = document.getElementById('s-t-c');
let s_t_d = document.getElementById('s-t-d');

let s_fo_y = document.getElementById('s-fo-y');
let s_fo_c = document.getElementById('s-fo-c');
let s_fo_d = document.getElementById('s-fo-d');

let s_fi_y = document.getElementById('s-fi-y');
let s_fi_c = document.getElementById('s-fi-c');
let s_fi_d = document.getElementById('s-fi-d');

let s_si_y = document.getElementById('s-si-y');
let s_si_c = document.getElementById('s-si-c');
let s_si_d = document.getElementById('s-si-d');

let s_l_y = document.getElementById('s-l-y');
let s_l_c = document.getElementById('s-l-c');
let s_l_d = document.getElementById('s-l-d');

// monday
let m_f_y = document.getElementById('m-f-y');
let m_f_c = document.getElementById('m-f-c');
let m_f_d = document.getElementById('m-f-d');

let m_s_y = document.getElementById('m-s-y');
let m_s_c = document.getElementById('m-s-c');
let m_s_d = document.getElementById('m-s-d');

let m_t_y = document.getElementById('m-t-y');
let m_t_c = document.getElementById('m-t-c');
let m_t_d = document.getElementById('m-t-d');

let m_fo_y = document.getElementById('m-fo-y');
let m_fo_c = document.getElementById('m-fo-c');
let m_fo_d = document.getElementById('m-fo-d');

let m_fi_y = document.getElementById('m-fi-y');
let m_fi_c = document.getElementById('m-fi-c');
let m_fi_d = document.getElementById('m-fi-d');

let m_si_y = document.getElementById('m-si-y');
let m_si_c = document.getElementById('m-si-c');
let m_si_d = document.getElementById('m-si-d');

let m_l_y = document.getElementById('m-l-y');
let m_l_c = document.getElementById('m-l-c');
let m_l_d = document.getElementById('m-l-d');

// tuesday
let t_f_y = document.getElementById('t-f-y');
let t_f_c = document.getElementById('t-f-c');
let t_f_d = document.getElementById('t-f-d');

let t_s_y = document.getElementById('t-s-y');
let t_s_c = document.getElementById('t-s-c');
let t_s_d = document.getElementById('t-s-d');

let t_t_y = document.getElementById('t-t-y');
let t_t_c = document.getElementById('t-t-c');
let t_t_d = document.getElementById('t-t-d');

let t_fo_y = document.getElementById('t-fo-y');
let t_fo_c = document.getElementById('t-fo-c');
let t_fo_d = document.getElementById('t-fo-d');

let t_fi_y = document.getElementById('t-fi-y');
let t_fi_c = document.getElementById('t-fi-c');
let t_fi_d = document.getElementById('t-fi-d');

let t_si_y = document.getElementById('t-si-y');
let t_si_c = document.getElementById('t-si-c');
let t_si_d = document.getElementById('t-si-d');

let t_l_y = document.getElementById('t-l-y');
let t_l_c = document.getElementById('t-l-c');
let t_l_d = document.getElementById('t-l-d');

// wednesday
let w_f_y = document.getElementById('w-f-y');
let w_f_c = document.getElementById('w-f-c');
let w_f_d = document.getElementById('w-f-d');

let w_s_y = document.getElementById('w-s-y');
let w_s_c = document.getElementById('w-s-c');
let w_s_d = document.getElementById('w-s-d');

let w_t_y = document.getElementById('w-t-y');
let w_t_c = document.getElementById('w-t-c');
let w_t_d = document.getElementById('w-t-d');

let w_fo_y = document.getElementById('w-fo-y');
let w_fo_c = document.getElementById('w-fo-c');
let w_fo_d = document.getElementById('w-fo-d');

let w_fi_y = document.getElementById('w-fi-y');
let w_fi_c = document.getElementById('w-fi-c');
let w_fi_d = document.getElementById('w-fi-d');

let w_si_y = document.getElementById('w-si-y');
let w_si_c = document.getElementById('w-si-c');
let w_si_d = document.getElementById('w-si-d');

let w_l_y = document.getElementById('w-l-y');
let w_l_c = document.getElementById('w-l-c');
let w_l_d = document.getElementById('w-l-d');

// thursday
let th_f_y = document.getElementById('th-f-y');
let th_f_c = document.getElementById('th-f-c');
let th_f_d = document.getElementById('th-f-d');

let th_s_y = document.getElementById('th-s-y');
let th_s_c = document.getElementById('th-s-c');
let th_s_d = document.getElementById('th-s-d');

let th_t_y = document.getElementById('th-t-y');
let th_t_c = document.getElementById('th-t-c');
let th_t_d = document.getElementById('th-t-d');

let th_fo_y = document.getElementById('th-fo-y');
let th_fo_c = document.getElementById('th-fo-c');
let th_fo_d = document.getElementById('th-fo-d');

let th_fi_y = document.getElementById('th-fi-y');
let th_fi_c = document.getElementById('th-fi-c');
let th_fi_d = document.getElementById('th-fi-d');

let th_si_y = document.getElementById('th-si-y');
let th_si_c = document.getElementById('th-si-c');
let th_si_d = document.getElementById('th-si-d');

let th_l_y = document.getElementById('th-l-y');
let th_l_c = document.getElementById('th-l-c');
let th_l_d = document.getElementById('th-l-d');


let selectedTeacherId;
selectTeacher.addEventListener('click', function () {
    teachers_schedule.map(t => {
        if(t.name == this.value){
            selectedTeacherId = t.id;
            for(i in t){
                if(i == "id" || i=="name" || i=="short_name" || i=="dept"){
                    continue;
                }
                if(i == "sunday"){
                    s_f_y.value = t[i][0].year;
                    s_f_c.value = t[i][0].course;
                    s_f_d.value = t[i][0].dept;
                    s_s_y.value = t[i][1].year;
                    s_s_c.value = t[i][1].course;
                    s_s_d.value = t[i][1].dept;
                    s_t_y.value = t[i][2].year;
                    s_t_c.value = t[i][2].course;
                    s_t_d.value = t[i][2].dept;
                    s_fo_y.value = t[i][3].year;
                    s_fo_c.value = t[i][3].course;
                    s_fo_d.value = t[i][3].dept;
                    s_fi_y.value = t[i][4].year;
                    s_fi_c.value = t[i][4].course;
                    s_fi_d.value = t[i][4].dept;
                    s_si_y.value = t[i][5].year;
                    s_si_c.value = t[i][5].course;
                    s_si_d.value = t[i][5].dept;
                    s_l_y.value = t[i][6].year;
                    s_l_c.value = t[i][6].course;
                    s_l_d.value = t[i][6].dept;
                }
                if(i == "monday"){
                    m_f_y.value = t[i][0].year;
                    m_f_c.value = t[i][0].course;
                    m_f_d.value = t[i][0].dept;
                    m_s_y.value = t[i][1].year;
                    m_s_c.value = t[i][1].course;
                    m_s_d.value = t[i][1].dept;
                    m_t_y.value = t[i][2].year;
                    m_t_c.value = t[i][2].course;
                    m_t_d.value = t[i][2].dept;
                    m_fo_y.value = t[i][3].year;
                    m_fo_c.value = t[i][3].course;
                    m_fo_d.value = t[i][3].dept;
                    m_fi_y.value = t[i][4].year;
                    m_fi_c.value = t[i][4].course;
                    m_fi_d.value = t[i][4].dept;
                    m_si_y.value = t[i][5].year;
                    m_si_c.value = t[i][5].course;
                    m_si_d.value = t[i][5].dept;
                    m_l_y.value = t[i][6].year;
                    m_l_c.value = t[i][6].course;
                    m_l_d.value = t[i][6].dept;
                }
                if(i == "tuesday"){
                    t_f_y.value = t[i][0].year;
                    t_f_c.value = t[i][0].course;
                    t_f_d.value = t[i][0].dept;
                    t_s_y.value = t[i][1].year;
                    t_s_c.value = t[i][1].course;
                    t_s_d.value = t[i][1].dept;
                    t_t_y.value = t[i][2].year;
                    t_t_c.value = t[i][2].course;
                    t_t_d.value = t[i][2].dept;
                    t_fo_y.value = t[i][3].year;
                    t_fo_c.value = t[i][3].course;
                    t_fo_d.value = t[i][3].dept;
                    t_fi_y.value = t[i][4].year;
                    t_fi_c.value = t[i][4].course;
                    t_fi_d.value = t[i][4].dept;
                    t_si_y.value = t[i][5].year;
                    t_si_c.value = t[i][5].course;
                    t_si_d.value = t[i][5].dept;
                    t_l_y.value = t[i][6].year;
                    t_l_c.value = t[i][6].course;
                    t_l_d.value = t[i][6].dept;
                }
                if(i == "wednesday"){
                    w_f_y.value = t[i][0].year;
                    w_f_c.value = t[i][0].course;
                    w_f_d.value = t[i][0].dept;
                    w_s_y.value = t[i][1].year;
                    w_s_c.value = t[i][1].course;
                    w_s_d.value = t[i][1].dept;
                    w_t_y.value = t[i][2].year;
                    w_t_c.value = t[i][2].course;
                    w_t_d.value = t[i][2].dept;
                    w_fo_y.value = t[i][3].year;
                    w_fo_c.value = t[i][3].course;
                    w_fo_d.value = t[i][3].dept;
                    w_fi_y.value = t[i][4].year;
                    w_fi_c.value = t[i][4].course;
                    w_fi_d.value = t[i][4].dept;
                    w_si_y.value = t[i][5].year;
                    w_si_c.value = t[i][5].course;
                    w_si_d.value = t[i][5].dept;
                    w_l_y.value = t[i][6].year;
                    w_l_c.value = t[i][6].course;
                    w_l_d.value = t[i][6].dept;
                }
                if(i == "thursday"){
                    th_f_y.value = t[i][0].year;
                    th_f_c.value = t[i][0].course;
                    th_f_d.value = t[i][0].dept;
                    th_s_y.value = t[i][1].year;
                    th_s_c.value = t[i][1].course;
                    th_s_d.value = t[i][1].dept;
                    th_t_y.value = t[i][2].year;
                    th_t_c.value = t[i][2].course;
                    th_t_d.value = t[i][2].dept;
                    th_fo_y.value = t[i][3].year;
                    th_fo_c.value = t[i][3].course;
                    th_fo_d.value = t[i][3].dept;
                    th_fi_y.value = t[i][4].year;
                    th_fi_c.value = t[i][4].course;
                    th_fi_d.value = t[i][4].dept;
                    th_si_y.value = t[i][5].year;
                    th_si_c.value = t[i][5].course;
                    th_si_d.value = t[i][5].dept;
                    th_l_y.value = t[i][6].year;
                    th_l_c.value = t[i][6].course;
                    th_l_d.value = t[i][6].dept;
                }
            }
        }
    })

})

function updateRoutine(id,
    s_f_y, s_f_c, s_f_d, s_s_y, s_s_c, s_s_d, s_t_y, s_t_c, s_t_d, s_fo_y, s_fo_c, s_fo_d, s_fi_y, s_fi_c, s_fi_d, s_si_y, s_si_c, s_si_d, s_l_y, s_l_c, s_l_d, 
    m_f_y, m_f_c, m_f_d, m_s_y, m_s_c, m_s_d, m_t_y, m_t_c, m_t_d, m_fo_y, m_fo_c, m_fo_d, m_fi_y, m_fi_c, m_fi_d, m_si_y, m_si_c, m_si_d, m_l_y, m_l_c, m_l_d, 
    t_f_y, t_f_c, t_f_d, t_s_y, t_s_c, t_s_d, t_t_y, t_t_c, t_t_d, t_fo_y, t_fo_c, t_fo_d, t_fi_y, t_fi_c, t_fi_d, t_si_y, t_si_c, t_si_d, t_l_y, t_l_c, t_l_d, 
    w_f_y, w_f_c, w_f_d, w_s_y, w_s_c, w_s_d, w_t_y, w_t_c, w_t_d, w_fo_y, w_fo_c, w_fo_d, w_fi_y, w_fi_c, w_fi_d, w_si_y, w_si_c, w_si_d, w_l_y, w_l_c, w_l_d, 
    th_f_y, th_f_c, th_f_d, th_s_y, th_s_c, th_s_d, th_t_y, th_t_c, th_t_d, th_fo_y, th_fo_c, th_fo_d, th_fi_y, th_fi_c, th_fi_d, th_si_y, th_si_c, th_si_d, th_l_y, th_l_c, th_l_d)
{
    console.log('updating', id);
    if(id){
        fetch(`http://127.0.0.1:8000/teachers/${id}`, {
        method: "PUT",

        body: JSON.stringify({
            sunday_first_year: s_f_y.value.toLowerCase(),
            sunday_first_course: s_f_c.value.toLowerCase(),
            sunday_first_dept: s_f_d.value.toLowerCase(),

            sunday_second_year: s_s_y.value.toLowerCase(),
            sunday_second_course: s_s_c.value.toLowerCase(),
            sunday_second_dept: s_s_d.value.toLowerCase(),

            sunday_third_year: s_t_y.value.toLowerCase(),
            sunday_third_course: s_t_c.value.toLowerCase(),
            sunday_third_dept: s_t_d.value.toLowerCase(),

            sunday_fourth_year: s_fo_y.value.toLowerCase(),
            sunday_fourth_course: s_fo_c.value.toLowerCase(),
            sunday_fourth_dept: s_fo_d.value.toLowerCase(),

            sunday_fifth_year: s_fi_y.value.toLowerCase(),
            sunday_fifth_course: s_fi_c.value.toLowerCase(),
            sunday_fifth_dept: s_fi_d.value.toLowerCase(),

            sunday_sixth_year: s_si_y.value.toLowerCase(),
            sunday_sixth_course: s_si_c.value.toLowerCase(),
            sunday_sixth_dept: s_si_d.value.toLowerCase(),

            sunday_lab_year: s_l_y.value.toLowerCase(),
            sunday_lab_course: s_l_c.value.toLowerCase(),
            sunday_lab_dept: s_l_d.value.toLowerCase(),

            // monday
            monday_first_year: m_f_y.value.toLowerCase(),
            monday_first_course: m_f_c.value.toLowerCase(),
            monday_first_dept: m_f_d.value.toLowerCase(),

            monday_second_year: m_s_y.value.toLowerCase(),
            monday_second_course: m_s_c.value.toLowerCase(),
            monday_second_dept: m_s_d.value.toLowerCase(),

            monday_third_year: m_t_y.value.toLowerCase(),
            monday_third_course: m_t_c.value.toLowerCase(),
            monday_third_dept: m_t_d.value.toLowerCase(),

            monday_fourth_year: m_fo_y.value.toLowerCase(),
            monday_fourth_course: m_fo_c.value.toLowerCase(),
            monday_fourth_dept: m_fo_d.value.toLowerCase(),

            monday_fifth_year: m_fi_y.value.toLowerCase(),
            monday_fifth_course: m_fi_c.value.toLowerCase(),
            monday_fifth_dept: m_fi_d.value.toLowerCase(),

            monday_sixth_year: m_si_y.value.toLowerCase(),
            monday_sixth_course: m_si_c.value.toLowerCase(),
            monday_sixth_dept: m_si_d.value.toLowerCase(),

            monday_lab_year: m_l_y.value.toLowerCase(),
            monday_lab_course: m_l_c.value.toLowerCase(),
            monday_lab_dept: m_l_d.value.toLowerCase(),

            // tuesday
            tuesday_first_year: t_f_y.value.toLowerCase(),
            tuesday_first_course: t_f_c.value.toLowerCase(),
            tuesday_first_dept: t_f_d.value.toLowerCase(),

            tuesday_second_year: t_s_y.value.toLowerCase(),
            tuesday_second_course: t_s_c.value.toLowerCase(),
            tuesday_second_dept: t_s_d.value.toLowerCase(),

            tuesday_third_year: t_t_y.value.toLowerCase(),
            tuesday_third_course: t_t_c.value.toLowerCase(),
            tuesday_third_dept: t_t_d.value.toLowerCase(),

            tuesday_fourth_year: t_fo_y.value.toLowerCase(),
            tuesday_fourth_course: t_fo_c.value.toLowerCase(),
            tuesday_fourth_dept: t_fo_d.value.toLowerCase(),

            tuesday_fifth_year: t_fi_y.value.toLowerCase(),
            tuesday_fifth_course: t_fi_c.value.toLowerCase(),
            tuesday_fifth_dept: t_fi_d.value.toLowerCase(),

            tuesday_sixth_year: t_si_y.value.toLowerCase(),
            tuesday_sixth_course: t_si_c.value.toLowerCase(),
            tuesday_sixth_dept: t_si_d.value.toLowerCase(),

            tuesday_lab_year: t_l_y.value.toLowerCase(),
            tuesday_lab_course: t_l_c.value.toLowerCase(),
            tuesday_lab_dept: t_l_d.value.toLowerCase(),

            // wednesday
            wednesday_first_year: w_f_y.value.toLowerCase(),
            wednesday_first_course: w_f_c.value.toLowerCase(),
            wednesday_first_dept: w_f_d.value.toLowerCase(),

            wednesday_second_year: w_s_y.value.toLowerCase(),
            wednesday_second_course: w_s_c.value.toLowerCase(),
            wednesday_second_dept: w_s_d.value.toLowerCase(),

            wednesday_third_year: w_t_y.value.toLowerCase(),
            wednesday_third_course: w_t_c.value.toLowerCase(),
            wednesday_third_dept: w_t_d.value.toLowerCase(),

            wednesday_fourth_year: w_fo_y.value.toLowerCase(),
            wednesday_fourth_course: w_fo_c.value.toLowerCase(),
            wednesday_fourth_dept: w_fo_d.value.toLowerCase(),

            wednesday_fifth_year: w_fi_y.value.toLowerCase(),
            wednesday_fifth_course: w_fi_c.value.toLowerCase(),
            wednesday_fifth_dept: w_fi_d.value.toLowerCase(),

            wednesday_sixth_year: w_si_y.value.toLowerCase(),
            wednesday_sixth_course: w_si_c.value.toLowerCase(),
            wednesday_sixth_dept: w_si_d.value.toLowerCase(),

            wednesday_lab_year: w_l_y.value.toLowerCase(),
            wednesday_lab_course: w_l_c.value.toLowerCase(),
            wednesday_lab_dept: w_l_d.value.toLowerCase(),

            // thursday
            thursday_first_year: th_f_y.value.toLowerCase(),
            thursday_first_course: th_f_c.value.toLowerCase(),
            thursday_first_dept: th_f_d.value.toLowerCase(),

            thursday_second_year: th_s_y.value.toLowerCase(),
            thursday_second_course: th_s_c.value.toLowerCase(),
            thursday_second_dept: th_s_d.value.toLowerCase(),

            thursday_third_year: th_t_y.value.toLowerCase(),
            thursday_third_course: th_t_c.value.toLowerCase(),
            thursday_third_dept: th_t_d.value.toLowerCase(),

            thursday_fourth_year: th_fo_y.value.toLowerCase(),
            thursday_fourth_course: th_fo_c.value.toLowerCase(),
            thursday_fourth_dept: th_fo_d.value.toLowerCase(),

            thursday_fifth_year: th_fi_y.value.toLowerCase(),
            thursday_fifth_course: th_fi_c.value.toLowerCase(),
            thursday_fifth_dept: th_fi_d.value.toLowerCase(),

            thursday_sixth_year: th_si_y.value.toLowerCase(),
            thursday_sixth_course: th_si_c.value.toLowerCase(),
            thursday_sixth_dept: th_si_d.value.toLowerCase(),

            thursday_lab_year: th_l_y.value.toLowerCase(),
            thursday_lab_course: th_l_c.value.toLowerCase(),
            thursday_lab_dept: th_l_d.value.toLowerCase(),
        }),

        headers: {
            "Content-type": "application/json; charset=UTF-8",
        }
    })

    .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Handle successful update response
        console.log(data);
        document.querySelector('#editMsg').innerText = 'Teacher updated successfully';
        document.querySelector('#editMsg').style.display = 'block';
        document.querySelector("#editRoutineForm").style.display="none";
      })
      .catch((error) => {
        // Handle errors during the fetch request
        console.error('Error updating teacher:', error);
        document.querySelector('#editMsg').innerText = 'This schedule overlaps with an existing class. Please assign a different time or teacher';
        document.querySelector('#editMsg').style.display = 'block';
        document.querySelector('#editMsg').style.color = 'red';
      });
    }
}


document.getElementById('updateRoutine-btn').addEventListener('click', function (){
    updateRoutine( selectedTeacherId,
        s_f_y, s_f_c, s_f_d, s_s_y, s_s_c, s_s_d, s_t_y, s_t_c, s_t_d, s_fo_y, s_fo_c, s_fo_d, s_fi_y, s_fi_c, s_fi_d, s_si_y, s_si_c, s_si_d, s_l_y, s_l_c, s_l_d, 
        m_f_y, m_f_c, m_f_d, m_s_y, m_s_c, m_s_d, m_t_y, m_t_c, m_t_d, m_fo_y, m_fo_c, m_fo_d, m_fi_y, m_fi_c, m_fi_d, m_si_y, m_si_c, m_si_d, m_l_y, m_l_c, m_l_d, 
        t_f_y, t_f_c, t_f_d, t_s_y, t_s_c, t_s_d, t_t_y, t_t_c, t_t_d, t_fo_y, t_fo_c, t_fo_d, t_fi_y, t_fi_c, t_fi_d, t_si_y, t_si_c, t_si_d, t_l_y, t_l_c, t_l_d, 
        w_f_y, w_f_c, w_f_d, w_s_y, w_s_c, w_s_d, w_t_y, w_t_c, w_t_d, w_fo_y, w_fo_c, w_fo_d, w_fi_y, w_fi_c, w_fi_d, w_si_y, w_si_c, w_si_d, w_l_y, w_l_c, w_l_d, 
        th_f_y, th_f_c, th_f_d, th_s_y, th_s_c, th_s_d, th_t_y, th_t_c, th_t_d, th_fo_y, th_fo_c, th_fo_d, th_fi_y, th_fi_c, th_fi_d, th_si_y, th_si_c, th_si_d, th_l_y, th_l_c, th_l_d                       
    )
})

// --------------------------------------DELETE TEACHER----------------------------------
function deleteTeacher(){
    console.log("deleteing", selectedTeacherId);
    if(selectedTeacherId){
        fetch(`http://127.0.0.1:8000/teachers/${selectedTeacherId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json().then((data) => ({ data, status: response.status }));
        })
        .then((parsedResponse) => {
          const { data, status } = parsedResponse;
          if (status === 204) {
            console.log('Teacher deleted successfully');
            document.querySelector('#editMsg').innerText = 'Teacher deleted successfully';
            document.querySelector('#editMsg').style.display = 'block';
            document.querySelector("#editRoutineForm").style.display="none";
            document.querySelector('#confirmDelete').style.display = 'none';
          } else {
            console.error('Unexpected status while deleting teacher:', status, data);
          }
        })
        .catch((error) => {            
            console.error('error deleting', error);
            document.querySelector('#editMsg').innerText = 'Teacher deleted successfully';
            document.querySelector('#editMsg').style.display = 'block';
            document.querySelector("#editRoutineForm").style.display="none";
            document.querySelector('#confirmDelete').style.display = 'none';     
        });
    }
}

function confirmDeleteTeacher(){
    if(selectedTeacherId){
        document.querySelector('#confirmDelete').style.display = 'block';
    }
}
function negative(){
    document.querySelector('#confirmDelete').style.display = 'none';
}

