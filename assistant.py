from datetime  import datetime

current_date = datetime.now().date().strftime("%d/%m/%y")
current_time = datetime.now().time()
current_day = datetime.now().strftime("%A")
time_slots = ["8:00 AM - 8:50 AM", "8:50 AM - 9:40 AM", "9:40 AM - 10:30 AM", "10:40 AM - 11:30 AM", "11:30 AM - 12:20 PM", "12:20 PM - 1:10 PM", "2:30 PM - 3:20 PM", "3:20 PM - 4:10 PM", "4:10 PM - 5:00 PM"]
#print(current_time)
        
time_range = "10:40 AM -  11:30 PM"
target_range = "11:40 PM - 1:30 AM"

def compareTime(slot, tar_time):
    # Split the time range into start and end times
    start_time_str, end_time_str = map(str.strip, slot.split('-'))

    try:
        # Convert the time strings to datetime objects
        start_time = datetime.strptime(start_time_str, "%I:%M %p").time()
        end_time = datetime.strptime(end_time_str, "%I:%M %p").time()
        #print(start_time, end_time)        

        #compare slots
        if start_time <= tar_time <= end_time:
            return 0
        elif tar_time<start_time:
            return -1
        else:
            return 1

    except ValueError as e:
        print(f"Error: {e}")



def compareTimeSlot(target_range, time_range):
    # Split the time range into start and end times
    #start_time_str, end_time_str = map(str.strip, time_range.split('-'))
    tar_start_time_str, tar_end_time_str = map(str.strip, target_range.split('-'))

    # Convert the time strings to datetime objects
    tar_start_time = datetime.strptime(tar_start_time_str, "%I:%M %p").time()
    tar_end_time = datetime.strptime(tar_end_time_str, "%I:%M %p").time()
    #print(type(tar_start_time), tar_end_time)

    flag1 = compareTime(time_range, tar_start_time)
    flag2 = compareTime(time_range, tar_end_time)

    if flag1==0 and flag2==0:
        print("inside")
    elif flag1==flag2:
        print("outside")
    else:
        print("overlap")


compareTime(time_range, current_time)


'''''
    # Compare the times
        if start_time <= tar_time <= end_time:
            print("The time is within the specified range.")
        else:
            print("The time is outside the specified range.")
'''''