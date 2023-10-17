import sqlite3

conn = sqlite3.connect('schedules.db')
c = conn.cursor()
sql = "select * from schedules order by teacher_name"
c.execute(sql)
results = c.fetchall()
# print(results)

# c.execute("insert into schedules (teacher_id, teacher_name, day, time, year, course) values (1, 'monir', 'monday', '12.20-1.10', 1, 'ece3208')")
# conn.commit()

days_of_week = ["sunday", "monday", "tuesday", "wednesday", "thursday"]
print(results)
teachers = []
s_t = []
for item in results:
    exist = False
    for i1_item in teachers:
        # print(i1_item)
        # exist = False
        if item[0] == i1_item['id']:
            exist = True
            break
        
    if not exist:
            teachers.append(
                {
                    "id": item[0],
                    "name": item[1],
                    "schedule": {
                        "sunday": [], "monday": [], "tuesday": [], "wednesday": [], "thursday": []
                    }
                }
            )

# print(teachers)
print("\n")
d_counter = -1
for item in teachers:
    d_counter = d_counter + 1
    for d_name in days_of_week:
        for i1_item in results:
            if item['id'] == i1_item[0] and d_name == i1_item[2]:
                # try:
                    teachers[d_counter]['schedule'][i1_item[2]].append(
                        {
                            "time": i1_item[3],
                            "year": i1_item[4],
                            "course": i1_item[5],
                        }
                    )
                # except:
                #     teachers[d_counter]['schedule'][i1_item[2]] = [
                #         {
                #             "time": i1_item[3],
                #             "year": i1_item[4],
                #             "course": i1_item[5],
                #         }
                #     ]

# print(results[0][0])
# print(teachers)