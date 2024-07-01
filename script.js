function updateDateTime() {
    var now = new Date();
    document.getElementById('currentTime').textContent = now.toUTCString();
    document.getElementById('currentDay').textContent = now.toLocaleDateString('en-US', { weekday: 'long' });
}

function addGoal() {
    var newGoal = prompt("Enter a new goal:");
    if (newGoal) {
        var li = document.createElement('li');
        li.textContent = newGoal;
        document.getElementById('goalsList').appendChild(li);
    }
}

updateDateTime();
setInterval(updateDateTime, 1000);