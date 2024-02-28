var endTime = new Date();
endTime.setDate(endTime.getDate() + 10); // Set end time 10 days from now

function updateTimer() {
  var now = new Date();
  var timeDiff = endTime - now;

  if (timeDiff <= 0) {
    document.getElementById("days").textContent = "0";
    document.getElementById("hours").textContent = "0";
    document.getElementById("minutes").textContent = "0";
    document.getElementById("seconds").textContent = "0";
    return;
  }

  var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  var endDateString = endTime.toLocaleDateString();
  document.getElementById("Endtime").textContent =
    "Giveaway ends on: " + endDateString;
}
setInterval(updateTimer, 1000);
