// Function to update battery status
async function updateBattery() {
    const battery = await navigator.getBattery();
    document.getElementById('battery').innerText = `Battery: ${Math.round(battery.level * 100)}%`;

    // Update battery status on change
    battery.onlevelchange = () => {
        document.getElementById('battery').innerText = `Battery: ${Math.round(battery.level * 100)}%`;
    };
}

// Function to update date and time
function updateDateTime() {
    const now = new Date();
    const timeOptions = {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    };
    const dateOptions = {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric'
    };

    const formattedTime = now.toLocaleTimeString('en-US', timeOptions);
    const formattedDate = now.toLocaleDateString('en-US', dateOptions);

    document.getElementById('time').innerText = formattedTime;
    document.getElementById('date').innerText = formattedDate;
}

// Initial update
updateBattery();
updateDateTime();

// Update date and time every second
setInterval(updateDateTime, 1000);
//cheese again
