function updateDateTime() {
    const timeElement = document.getElementById('time');
    const now = new Date();

    // Format the time
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // The hour '0' should be '12'
    const time = `${hours}:${minutes} ${ampm}`;

    // Format the date
    const month = (now.getMonth() + 1).toString();
    const day = now.getDate().toString();
    const year = now.getFullYear().toString();
    const date = `${month}/${day}/${year}`;

    timeElement.innerHTML = `${time}<br>${date}`;
}

// Update the time every second
setInterval(updateDateTime, 1000);

// Initial call to set the time immediately on page load
updateDateTime();

function updateBatteryLevel(battery) {
    const batteryElement = document.getElementById('battery');
    batteryElement.innerHTML = `${Math.floor(battery.level * 100)}%`;
}

function monitorBatteryLevel() {
    navigator.getBattery().then(function(battery) {
        // Update the battery level initially
        updateBatteryLevel(battery);

        // Update the battery level when it changes
        battery.addEventListener('levelchange', function() {
            updateBatteryLevel(battery);
        });
    });
}

// Monitor battery level on page load
monitorBatteryLevel();
