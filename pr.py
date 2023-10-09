from datetime import datetime
import sqlite3


# Get the current day and time
current_date = datetime.now().date().strftime("%d/%m/%y")
current_time = datetime.now().time()
current_day = datetime.now().strftime("%A").lower()
days_of_week = ["sunday", "monday", "tuesday", "wednesday", "thursday"]
#print(type(current_time))

# Create a SQLite database to store schedule data
conn = sqlite3.connect('schedules.db')
c = conn.cursor()

#c.execute("DROP TABLE teachers")

# Create tables for teachers and schedules
c.execute('''CREATE TABLE IF NOT EXISTS teachers
             (teacher_id INTEGER PRIMARY KEY AUTOINCREMENT, teacher_name TEXT)''')

c.execute('''CREATE TABLE IF NOT EXISTS schedules
             (teacher_id INTEGER, teacher_name TEXT, day TEXT, time TEXT, year INTEGER, course TEXT, FOREIGN KEY (teacher_id) REFERENCES teachers (teacher_id))''')

 
#-------------------------------TEACHER TABLE---------------------------------------
def add_teacher():
    #teacher_id = int(input("Enter teacher id: "))
    teacher_name = input("Enter teacher name: ")
    # Insert data into the database
    c.execute('''INSERT INTO teachers (teacher_name) VALUES(?)''', ( teacher_name,))
    conn.commit()
    print("Teacher added successfully.")

def view_teachers():
    c.execute('''SELECT * FROM teachers''')
    results = c.fetchall()
    print(results)

def remove_teacher():
    teacher_name = input("Enter teacher id: ")
    #delete data from db
    c.execute("DELETE FROM teachers WHERE id = ?", (teacher_name,))
    conn.commit()
    print("Teacher removed successfully")




#------------------------SCHEDULE TABLE-----------------------------------------------
def add_schedule():
    #teacher_id = int(input("Enter teacher id: "))
    teacher_name = input("Enter teacher name: ")
    day = input("Enter day: ")
    time = input("Enter time: ")
    year = int(input("Enter year: "))
    course = input("Enter course_no: ")

    # Get the teacher_id based on the teacher_name
    c.execute("SELECT teacher_id FROM teachers WHERE teacher_name = ?", (teacher_name,))
    result = c.fetchone()
    if result:
        teacher_id = result[0]
        # Insert data into the database
        c.execute('''INSERT INTO schedules VALUES(?, ?, ?, ?, ?, ?)''', (teacher_id, teacher_name, day, time, year, course))
        conn.commit()
        print("Schedule added successfully.")
        return
    else:
        print(f"Teacher '{teacher_name}' not found in the teachers list.")
        return
    

def view_schedule():
    teacher_name = input("Enter name of the teacher: ")
    c.execute("SELECT * FROM schedules WHERE teacher_name = ?", (teacher_name,))
    results = c.fetchall()
    print(results)


def remove_schedule():
    #teacher_id = int(input("Enter teacher id to be deleted: "))
    teacher_name = input("Enter teacher name: ")
    i = input("Delete all schedules of the week? Press 1 for yes or press anything.")
    #delete data from db
    if i == '1':
        c.execute("DELETE FROM schedules WHERE teacher_name = ?", (teacher_name,))
        conn.commit()
        print(f"All schedules removed for {teacher_name} successfully.")
        return
    else:       
        target_day = input("Enter day to be deleted: ")
        target_time = input("Enter time to be deleted: ")
        c.execute("DELETE FROM schedules WHERE day = ? AND time = ?",  (target_day, target_time))
        conn.commit()
        print(f"{target_day} {target_time} Schedule deleted for {teacher_name}")


#------------------------------------VIEW SPECIFIC SCHEDULE-----------------------------
def view_all_schedules(year, teacher="all"):
    print(year , teacher)

    if teacher == "all":
        c.execute("SELECT * FROM schedules WHERE year = ?", (year,))
        print(f"Schedule for all teachers with {year} year")
    else:
        c.execute("SELECT * FROM schedules WHERE year = ? AND teacher_name = ?", (year, teacher))
        print(f"Schedule for teacher {teacher} with {year} year")

    results = c.fetchall()
    if results:        
        print(results)
        return
    else:
        print(f"NO schedules found for teacher {teacher} with {year} year")


def get_current_classes(current_day):
    print(current_day)
    
    c.execute("SELECT * FROM schedules WHERE day = ?", (current_day,))
    all_classes = c.fetchall()
    if all_classes:
        print(all_classes)
    else:
        print("nothing found")
    
    current_classes=[]
    for schedule in all_classes:
        start_time_str, end_time_str = map(str.strip, schedule[3].split('-'))

        # Convert the time strings to datetime objects
        start_time = datetime.strptime(start_time_str, "%I:%M %p").time()
        end_time = datetime.strptime(end_time_str, "%I:%M %p").time()
        #print(start_time, end_time)

        if start_time <= current_time <= end_time:
            print("in range")
            current_classes.append(schedule)
            print(current_classes)
        else:
            print("out of range")


def view_table():
    for day in days_of_week:
        c.execute("SELECT * FROM schedules WHERE day = ?", (day,))
        if day == "sunday":
            sunday = c.fetchall()
        elif day == "monday":
            monday = c.fetchall()
        elif day == "tuesday":
            tuesday = c.fetchall()
        elif day == "wednesday":
            wednesday = c.fetchall()
        else:
            thursday = c.fetchall()

    

#view_teachers()
#add_teacher()
#view_teachers()

#view_schedule()
#add_schedule()
#remove_schedule()
#view_schedule()
view_all_schedules(int(input("Enter year: ")), input("Enter teacher name (type all for all teachers): "))

#get_current_classes("sunday")

#view_table()


conn.close()