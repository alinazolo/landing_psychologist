// 🔹 Set your fixed date & time here (YYYY-MM-DD HH:MM format)
var targetDateTime = "2025-03-10 12:00"; 
var targetTime = new Date(targetDateTime).getTime();

function updateCountdown() {
    var now = new Date().getTime();
    var remainingTime = targetTime - now;

    if (remainingTime <= 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "<h2>🎉 Time's up!</h2>";
        return;
    }

    var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    var hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
    var minutes = Math.floor((remainingTime / (1000 * 60)) % 60);
    var seconds = Math.floor((remainingTime / 1000) % 60);

    document.getElementById("days").textContent = days.toString().padStart(2, "0");
    document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
}

// Update countdown every second
var countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown(); // Run immediately on page load