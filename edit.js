const periods = [
  "8:00 AM - 8:50 AM",
  "8:50 AM - 9:40 AM",
  "9:40 AM - 10:30 AM",
  "10:40 AM - 11:30 AM",
  "11:30 AM - 12:20 PM",
  "12:20 PM - 1:10 PM",
  "2:30 PM - 5:00 PM"
];

// Get the current time
const currentTime = new Date();
const currentHours = currentTime.getHours();
const currentMinutes = currentTime.getMinutes();

// Convert current time to a string in the same format as periods
const currentTimeStr = `${currentHours}:${currentMinutes >= 10 ? currentMinutes : '0' + currentMinutes} ${currentHours >= 12 ? 'PM' : 'AM'}`;

// Find the time slot for the current time
let timeSlot = null;

for (let i = 0; i < periods.length; i++) {
  const [startTimeStr, endTimeStr] = periods[i].split(' - ');
  const startTime = new Date(`2000-01-01 ${startTimeStr}`);
  const endTime = new Date(`2000-01-01 ${endTimeStr}`);

  if (currentTime >= startTime && currentTime <= endTime) {
    timeSlot = i + 1; // Time slot is 1-based
    break;
  }
}

if (timeSlot !== null) {
  console.log(`The current time is in time slot ${timeSlot}: ${periods[timeSlot - 1]}`);
} else {
  console.log("The current time is not within any time slot.");
}
