from datetime import datetime

# Initialize an empty class schedule for all days of the week
days_of_week = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"]
time_slots = ["8:00 AM - 8:50 AM", "8:50 AM - 9:40 AM", "9:40 AM - 10:30 AM", "10:40 AM - 11:30 AM", "11:30 AM - 12:20 PM", "12:20 PM - 1:10 PM", "2:30 PM - 3:20 PM", "3:20 PM - 4:10 PM", "4:10 PM - 5:00 PM"]

# Get the current day and time
current_date = datetime.now().date().strftime("%d/%m/%y")
current_time = datetime.now().time().strftime("%I:%M %p")
current_day = datetime.now().strftime("%A")


teachers=[
    {
        "id": 1,
        "name": 'a',
        "schedule": {
            "sunday":[
                {
                    "time": "8:00-8:50",
                    "year": 3,
                    "course": "ECE-3209"
                },
                {
                    "time": "8:50-9:40",
                    "year": 2,
                    "course": "ECE-2209"
                }
            ],
            "monday":[
                {
                    "time": "8:00-8:50",
                    "year": 3,
                    "course": "ECE-3209"
                },
                {
                    "time": "8:50-9:40",
                    "year": 2,
                    "course": "ECE-2209"
                }
            ]
        }
    },
    {
        "id": 2,
        "name": 'b',
        "schedule": {
            "sunday":[
                {
                    "time": "8:00-8:50",
                    "year": 2,
                    "course": "ECE-2209"
                },
                {
                    "time": "8:50-9:40",
                    "year": None,
                    "course": None
                }
            ],
            "monday":[
                {
                    "time": "8:00-8:50",
                    "year": 3,
                    "course": "ECE-3209"
                },
                {
                    "time": "8:50-9:40",
                    "year": 2,
                    "course": "ECE-2209"
                }
            ]
        }
    }
]

def add_teacher(id, name):
    new_teacher_node = {
        "id": id,
        "name": name,
        "schedule": {
            "sunday":[],
            "monday":[]
        }
    }
    teachers.append(new_teacher_node)

def add_schedule_for_teacher(id, day):
    for teacher in teachers:
        if teacher["id"] == id:
            t_s=teacher["schedule"][day]

            while True:
                new_schedule = {
                    "time": input("time: "),
                    "year": int(input("year")),
                    "course": input("course: ")
                }
                t_s.append(new_schedule)
                temp = input("Add another schedule? Press 1 for Yes and 0 for No: ")
                if temp == '0':
                    return
                elif temp != '0' and temp != '1':
                    print("Invalid input. Please try again.")
                    return

    print("Teacher not found!")

#print(teachers)
#add_schedule_for_teacher(int(input("id: ")), input("day: "))
#add_teacher(int(input("id: ")), input("Name: "))

def remove_teacher(id, name):
    for teacher in teachers:
        if teacher["id"] == id:
            teachers.remove(teacher)
            print("Teacher removed successfully.")
            return
#remove_teacher(int(input("reid: ")), input("rName: "))

def view_schedule(id, day):
    for teacher in teachers:
        if teacher["id"] == id:
            if day == "all":
                print(teacher["schedule"])
                return
            else:
                print(teacher["schedule"][day])
                return
            
#view_schedule(int(input("reid: ")), input("day: "))

def clear_schedule(id, day, time):
    for teacher in teachers:
        if teacher["id"] == id:
            if time == "all":
                for s in teacher["schedule"][day]:
                    s["year"] = None
                    s["course"] = None
                return
            for s in teacher["schedule"][day]:
                if s["time"] == time:
                    s["year"] = None
                    s["course"] = None
                    return
            print("Invalid time input. Please try again.")
#clear_schedule(int(input("reid: ")), input("day: "), input("time: "))
#view_schedule(int(input("id: ")), input("day: "))

def routine(day):
    for teacher in teachers:
        print(teacher["name"])
        print("Classes: ")
        for cls in teacher["schedule"][day]:
            print(cls)

routine("monday")

#print(teachers)